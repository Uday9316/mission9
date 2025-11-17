"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface BikeControllerProps {
  onPositionUpdate?: (position: THREE.Vector3) => void;
}

// Realistic Bugatti wheel - moved outside to avoid recreation
function Wheel({ position, wheelRef }: { position: [number, number, number]; wheelRef: React.RefObject<THREE.Group | null> }) {
  return (
    <group ref={wheelRef} position={position}>
      {/* Tire */}
      <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.55, 0.55, 0.45, 24]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.95} />
      </mesh>
      {/* Rim outer */}
      <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.42, 0.42, 0.46, 24]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.98} roughness={0.02} />
      </mesh>
      {/* Rim inner with purple accent */}
      <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.32, 0.32, 0.47, 16]} />
        <meshStandardMaterial color="#9333ea" metalness={0.95} roughness={0.05} />
      </mesh>
      {/* Center hub */}
      <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.16, 0.16, 0.48, 16]} />
        <meshStandardMaterial color="#7c3aed" metalness={0.98} roughness={0.02} />
      </mesh>
    </group>
  );
}

export default function BikeController({ onPositionUpdate }: BikeControllerProps) {
  const carRef = useRef<THREE.Group>(null);
  const frontLeftWheelRef = useRef<THREE.Group>(null);
  const frontRightWheelRef = useRef<THREE.Group>(null);
  const backLeftWheelRef = useRef<THREE.Group>(null);
  const backRightWheelRef = useRef<THREE.Group>(null);
  const exhaustRefs = useRef<(THREE.Mesh | null)[]>([]);
  
  const rotationVelocity = useRef(0);
  const { camera } = useThree();
  const [keys, setKeys] = useState<Set<string>>(new Set());
  const speed = useRef(0);
  const wheelRotation = useRef(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKeys((prev) => new Set(prev).add(event.code));
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      setKeys((prev) => {
        const newSet = new Set(prev);
        newSet.delete(event.code);
        return newSet;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame((state, delta) => {
    if (!carRef.current) return;

    const maxSpeed = 12;
    const boostSpeed = 20;
    const acceleration = 15;
    const deceleration = 20;
    const turnSpeed = 3.5;

    const forward = keys.has("KeyW") || keys.has("ArrowUp");
    const backward = keys.has("KeyS") || keys.has("ArrowDown");
    const left = keys.has("KeyA") || keys.has("ArrowLeft");
    const right = keys.has("KeyD") || keys.has("ArrowRight");
    const boost = keys.has("ShiftLeft") || keys.has("ShiftRight");

    let targetSpeed = 0;
    const currentMaxSpeed = boost ? boostSpeed : maxSpeed;
    if (forward) targetSpeed = currentMaxSpeed;
    if (backward) targetSpeed = -currentMaxSpeed * 0.6;
    
    if (targetSpeed !== 0) {
      speed.current = THREE.MathUtils.lerp(speed.current, targetSpeed, acceleration * delta);
    } else {
      speed.current = THREE.MathUtils.lerp(speed.current, 0, deceleration * delta);
    }

    let turnDirection = 0;
    if (left) turnDirection = 1;  // Left turn = positive rotation
    if (right) turnDirection = -1; // Right turn = negative rotation
    
    if (Math.abs(speed.current) > 0.1) {
      rotationVelocity.current = THREE.MathUtils.lerp(
        rotationVelocity.current,
        turnDirection * turnSpeed * (Math.abs(speed.current) / maxSpeed),
        delta * 5
      );
    } else {
      rotationVelocity.current = THREE.MathUtils.lerp(rotationVelocity.current, 0, delta * 5);
    }

    carRef.current.rotation.y += rotationVelocity.current * delta;

    const forwardVector = new THREE.Vector3(0, 0, 1); // Changed to +1 so car moves in +Z direction
    forwardVector.applyQuaternion(carRef.current.quaternion);
    forwardVector.multiplyScalar(speed.current * delta);
    carRef.current.position.add(forwardVector);

    wheelRotation.current += speed.current * delta * 2;
    
    if (frontLeftWheelRef.current) {
      frontLeftWheelRef.current.rotation.x = wheelRotation.current;
      frontLeftWheelRef.current.rotation.y = rotationVelocity.current * 0.3;
    }
    if (frontRightWheelRef.current) {
      frontRightWheelRef.current.rotation.x = wheelRotation.current;
      frontRightWheelRef.current.rotation.y = rotationVelocity.current * 0.3;
    }
    if (backLeftWheelRef.current) {
      backLeftWheelRef.current.rotation.x = wheelRotation.current;
    }
    if (backRightWheelRef.current) {
      backRightWheelRef.current.rotation.x = wheelRotation.current;
    }

    // Update exhaust glow based on speed
    const exhaustIntensity = Math.min(1, Math.abs(speed.current) / (maxSpeed * 0.5));
    exhaustRefs.current.forEach((exhaustMesh) => {
      if (exhaustMesh && exhaustMesh.material) {
        const material = exhaustMesh.material as THREE.MeshStandardMaterial;
        material.emissiveIntensity = exhaustIntensity * 0.8;
        exhaustMesh.visible = Math.abs(speed.current) > 0.5;
      }
    });

    const carPosition = carRef.current.position;
    // Camera positioned behind the car (negative Z = behind, since car now faces +Z)
    // Reuse vectors to avoid allocations
    const cameraOffset = new THREE.Vector3(0, 5, -10);
    cameraOffset.applyQuaternion(carRef.current.quaternion);
    cameraOffset.add(carPosition);
    camera.position.lerp(cameraOffset, 0.08);
    
    // Look ahead in the direction the car is facing (positive Z = forward for the car)
    const lookAhead = new THREE.Vector3(0, 1, 15);
    lookAhead.applyQuaternion(carRef.current.quaternion);
    lookAhead.add(carPosition);
    camera.lookAt(lookAhead);

    if (onPositionUpdate) {
      onPositionUpdate(carPosition);
    }
  });

  const bugattiPurple = "#9333ea";
  const bugattiPurpleDark = "#7c3aed";
  const bugattiPurpleDarker = "#6d28d9";
  const bugattiAccent = "#a855f7";

  return (
    <group ref={carRef} position={[0, 0.8, 0]}>
      {/* Main Body - smoother with more segments */}
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 1.1, 4.8]} />
        <meshStandardMaterial color={bugattiPurple} metalness={0.95} roughness={0.08} />
      </mesh>

      {/* Front Section - curved using ellipsoid-like shape */}
      <mesh castShadow position={[0, 0.25, 2.3]} rotation={[0.25, 0, 0]}>
        <boxGeometry args={[2.0, 0.7, 1.0]} />
        <meshStandardMaterial color={bugattiPurpleDark} metalness={0.95} roughness={0.08} />
      </mesh>

      {/* Hood - long, sleek, curved */}
      <mesh castShadow position={[0, 0.4, 1.6]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[1.9, 0.55, 1.8]} />
        <meshStandardMaterial color={bugattiPurple} metalness={0.95} roughness={0.08} />
      </mesh>

      {/* Roof - low, aerodynamic, curved */}
      <mesh castShadow position={[0, 0.85, -0.2]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[1.7, 0.7, 2.6]} />
        <meshStandardMaterial color={bugattiPurpleDarker} metalness={0.95} roughness={0.08} />
      </mesh>

      {/* Windshield - very angled, smooth */}
      <mesh position={[0, 0.7, 0.9]} rotation={[0.28, 0, 0]}>
        <boxGeometry args={[1.6, 0.6, 0.15]} />
        <meshStandardMaterial color="#1a2a3a" transparent opacity={0.12} />
      </mesh>

      {/* Back Window */}
      <mesh position={[0, 0.7, -1.4]} rotation={[-0.15, 0, 0]}>
        <boxGeometry args={[1.6, 0.55, 0.15]} />
        <meshStandardMaterial color="#1a2a3a" transparent opacity={0.12} />
      </mesh>

      {/* Side Windows */}
      <mesh position={[0.85, 0.7, -0.2]}>
        <boxGeometry args={[0.12, 0.6, 2.2]} />
        <meshStandardMaterial color="#1a2a3a" transparent opacity={0.12} />
      </mesh>
      <mesh position={[-0.85, 0.7, -0.2]}>
        <boxGeometry args={[0.12, 0.6, 2.2]} />
        <meshStandardMaterial color="#1a2a3a" transparent opacity={0.12} />
      </mesh>

      {/* Bugatti Signature Grille - horseshoe shape */}
      <mesh position={[0, 0.15, 2.4]}>
        <boxGeometry args={[1.4, 0.4, 0.12]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.98} roughness={0.02} />
      </mesh>
      {/* Grille pattern - more detailed */}
      {[-0.5, -0.3, -0.15, 0, 0.15, 0.3, 0.5].map((x) => (
        <mesh key={x} position={[x, 0.15, 2.42]}>
          <boxGeometry args={[0.05, 0.35, 0.14]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.95} />
        </mesh>
      ))}

      {/* Headlights - large, spherical, realistic */}
      <mesh position={[0.7, 0.2, 2.25]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffdd" emissiveIntensity={1.5} />
      </mesh>
      <mesh position={[-0.7, 0.2, 2.25]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffdd" emissiveIntensity={1.5} />
      </mesh>
      {/* Headlight chrome rings */}
      <mesh position={[0.7, 0.2, 2.25]}>
        <torusGeometry args={[0.25, 0.035, 24, 48]} />
        <meshStandardMaterial color="#dddddd" metalness={0.98} roughness={0.02} />
      </mesh>
      <mesh position={[-0.7, 0.2, 2.25]}>
        <torusGeometry args={[0.25, 0.035, 24, 48]} />
        <meshStandardMaterial color="#dddddd" metalness={0.98} roughness={0.02} />
      </mesh>

      {/* Taillights - elongated Bugatti style */}
      <mesh position={[0.8, 0.2, -2.3]}>
        <boxGeometry args={[0.4, 0.3, 0.2]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff5555" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[-0.8, 0.2, -2.3]}>
        <boxGeometry args={[0.4, 0.3, 0.2]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff5555" emissiveIntensity={0.8} />
      </mesh>

      {/* Bugatti C-line - signature curved accent line */}
      <mesh position={[1.1, 0.3, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.05, 0.8, 4.6]} />
        <meshStandardMaterial color={bugattiAccent} metalness={0.98} roughness={0.02} />
      </mesh>
      <mesh position={[-1.1, 0.3, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.05, 0.8, 4.6]} />
        <meshStandardMaterial color={bugattiAccent} metalness={0.98} roughness={0.02} />
      </mesh>

      {/* Wheels - larger, more realistic */}
      <Wheel position={[-0.85, -0.6, 1.4]} wheelRef={frontLeftWheelRef} />
      <Wheel position={[0.85, -0.6, 1.4]} wheelRef={frontRightWheelRef} />
      <Wheel position={[-0.85, -0.6, -1.4]} wheelRef={backLeftWheelRef} />
      <Wheel position={[0.85, -0.6, -1.4]} wheelRef={backRightWheelRef} />

      {/* Side Mirrors - aerodynamic, realistic */}
      <mesh position={[1.1, 0.6, 0.7]} castShadow rotation={[0, -0.4, 0]}>
        <boxGeometry args={[0.25, 0.2, 0.4]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.98} roughness={0.02} />
      </mesh>
      <mesh position={[-1.1, 0.6, 0.7]} castShadow rotation={[0, 0.4, 0]}>
        <boxGeometry args={[0.25, 0.2, 0.4]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.98} roughness={0.02} />
      </mesh>

      {/* Rear Spoiler - active aerodynamics */}
      <mesh position={[0, 1.0, -2.4]} rotation={[0.35, 0, 0]} castShadow>
        <boxGeometry args={[2.0, 0.15, 0.6]} />
        <meshStandardMaterial color={bugattiPurpleDarker} metalness={0.95} roughness={0.08} />
      </mesh>

      {/* Exhaust System - Quad exhaust with realistic pipes */}
      <group position={[0, -0.4, -2.4]}>
        {[-0.45, -0.3, 0.3, 0.45].map((x, i) => (
          <group key={i}>
            {/* Exhaust pipe */}
            <mesh position={[x, 0, 0]} castShadow>
              <cylinderGeometry args={[0.1, 0.1, 0.6, 32]} />
              <meshStandardMaterial color="#1a1a1a" metalness={0.98} roughness={0.05} />
            </mesh>
            {/* Exhaust tip - glowing when moving */}
            <mesh 
              ref={(el) => {
                if (el) exhaustRefs.current[i] = el;
              }}
              position={[x, 0, 0.35]}
              visible={false}
            >
              <cylinderGeometry args={[0.12, 0.12, 0.15, 32]} />
              <meshStandardMaterial 
                color="#ff6600" 
                emissive="#ff4400" 
                emissiveIntensity={0}
              />
            </mesh>
            {/* Exhaust tip ring */}
            <mesh position={[x, 0, 0.35]}>
              <torusGeometry args={[0.12, 0.018, 20, 48]} />
              <meshStandardMaterial color="#2a2a2a" metalness={0.95} roughness={0.05} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Front Logo/Badge area */}
      <mesh position={[0, 0.3, 2.2]}>
        <boxGeometry args={[0.4, 0.2, 0.08]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.98} roughness={0.02} />
      </mesh>

      {/* Side air intakes - Bugatti signature */}
      <mesh position={[0.95, 0.15, 0.6]} rotation={[0, 0.25, 0]}>
        <boxGeometry args={[0.18, 0.35, 0.5]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.95} roughness={0.05} />
      </mesh>
      <mesh position={[-0.95, 0.15, 0.6]} rotation={[0, -0.25, 0]}>
        <boxGeometry args={[0.18, 0.35, 0.5]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.95} roughness={0.05} />
      </mesh>

      {/* Rear diffuser */}
      <mesh position={[0, -0.55, -2.2]} rotation={[0.25, 0, 0]}>
        <boxGeometry args={[1.9, 0.25, 0.7]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.95} roughness={0.05} />
      </mesh>

      {/* Body curves - add smoothness with additional geometry */}
      {/* Front fender curves */}
      <mesh position={[0.9, 0.1, 1.8]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.6]} />
        <meshStandardMaterial color={bugattiPurple} metalness={0.95} roughness={0.08} />
      </mesh>
      <mesh position={[-0.9, 0.1, 1.8]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.6]} />
        <meshStandardMaterial color={bugattiPurple} metalness={0.95} roughness={0.08} />
      </mesh>

      {/* Rear fender curves */}
      <mesh position={[0.9, 0.1, -1.8]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.6]} />
        <meshStandardMaterial color={bugattiPurple} metalness={0.95} roughness={0.08} />
      </mesh>
      <mesh position={[-0.9, 0.1, -1.8]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.6]} />
        <meshStandardMaterial color={bugattiPurple} metalness={0.95} roughness={0.08} />
      </mesh>
    </group>
  );
}
