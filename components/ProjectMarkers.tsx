"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Billboard, Html } from "@react-three/drei";
import * as THREE from "three";
import { type Dapp } from "@/data/dapps";
import ProjectLogo from "./ProjectLogo";

// Animated glow sphere component with rotation
function AnimatedGlowSphere({ 
  radius, 
  color, 
  intensity, 
  opacity, 
  roughness, 
  metalness,
  rotationSpeed = 0.5 
}: {
  radius: number;
  color: string;
  intensity: number;
  opacity: number;
  roughness: number;
  metalness: number;
  rotationSpeed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed * 0.005;
      meshRef.current.rotation.x += rotationSpeed * 0.003;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={intensity}
        transparent
        opacity={opacity}
        depthWrite={false}
        roughness={roughness}
        metalness={metalness}
      />
    </mesh>
  );
}

interface ProjectMarkersProps {
  dapps: Dapp[];
  onSelect: (dapp: Dapp) => void;
  bikePosition?: THREE.Vector3;
}

export default function ProjectMarkers({ dapps, onSelect, bikePosition = new THREE.Vector3() }: ProjectMarkersProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [nearby, setNearby] = useState<string | null>(null);
  const markersRef = useRef<{ [key: string]: THREE.Vector3 }>({});
  const previousNearbyRef = useRef<string | null>(null);

  // Distribute projects in a spiral pattern to prevent overlaps
  const getProjectPosition = (index: number, total: number) => {
    // Keep projects within a reasonable radius (max 200 units from center for 500x500 ground)
    const maxRadius = 200;
    const minSpacing = 3; // Minimum distance between projects
    
    // Use golden angle spiral for even distribution
    const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~2.39996 radians
    const angle = index * goldenAngle;
    
    // Spiral radius increases gradually
    const radiusRatio = index / total;
    const radius = Math.sqrt(radiusRatio) * maxRadius;
    
    // Ensure minimum spacing by adjusting radius
    const adjustedRadius = Math.max(radius, Math.sqrt(index) * minSpacing * 0.5);
    const finalRadius = Math.min(adjustedRadius, maxRadius);
    
    const x = Math.cos(angle) * finalRadius;
    const z = Math.sin(angle) * finalRadius;
    const y = 0.6; // Slightly above ground plane (y=0)
    return new THREE.Vector3(x, y, z);
  };

  useFrame(() => {
    // Check proximity to bike
    let closestId: string | null = null;
    let closestDistance = Infinity;

    dapps.forEach((dapp) => {
      const position = markersRef.current[dapp.id] || getProjectPosition(dapps.indexOf(dapp), dapps.length);
      if (!markersRef.current[dapp.id]) {
        markersRef.current[dapp.id] = position;
      }
      
      const distance = position.distanceTo(bikePosition);
      if (distance < 3 && distance < closestDistance) {
        closestDistance = distance;
        closestId = dapp.id;
      }
    });

    // Only update state if the value actually changed
    if (closestId !== previousNearbyRef.current) {
      previousNearbyRef.current = closestId;
      setNearby(closestId);
    }
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "App":
        return "#3b82f6";
      case "Infra":
        return "#a855f7";
      case "App/Infra":
        return "#ec4899";
      default:
        return "#6b7280";
    }
  };

  return (
    <>
      {dapps.map((dapp, index) => {
        const position = markersRef.current[dapp.id] || getProjectPosition(index, dapps.length);
        if (!markersRef.current[dapp.id]) {
          markersRef.current[dapp.id] = position;
        }
        
        const isHovered = hovered === dapp.id;
        const isNearby = nearby === dapp.id;
        const distance = position.distanceTo(bikePosition);

        const typeColor = getTypeColor(dapp.type);
        const glowIntensity = isHovered || isNearby ? 1.2 : 0.4;
        const sphereScale = isHovered || isNearby ? 1.15 : 1.0;

        return (
          <group key={dapp.id} position={position}>
            {/* Project marker - logo as main element with enhanced glow */}
            <group
              onPointerOver={() => setHovered(dapp.id)}
              onPointerOut={() => setHovered(null)}
              onClick={() => onSelect(dapp)}
              scale={sphereScale}
            >
              {/* Outer glow layer - larger, more diffused, slow rotation */}
              <AnimatedGlowSphere
                radius={0.85}
                color={typeColor}
                intensity={glowIntensity * 0.3}
                opacity={0.15}
                roughness={1}
                metalness={0}
                rotationSpeed={0.3}
              />

              {/* Middle glow layer - medium intensity, medium rotation */}
              <AnimatedGlowSphere
                radius={0.75}
                color={typeColor}
                intensity={glowIntensity * 0.5}
                opacity={0.25}
                roughness={0.8}
                metalness={0.1}
                rotationSpeed={-0.5}
              />

              {/* Inner glow sphere - core glow, faster rotation */}
              <AnimatedGlowSphere
                radius={0.65}
                color={typeColor}
                intensity={glowIntensity * 0.8}
                opacity={0.35}
                roughness={0.6}
                metalness={0.2}
                rotationSpeed={0.7}
              />

              {/* Glass-like sphere shell - adds depth and reflection */}
              <mesh>
                <sphereGeometry args={[0.7, 32, 32]} />
                <meshPhysicalMaterial
                  color={typeColor}
                  emissive={typeColor}
                  emissiveIntensity={glowIntensity * 0.4}
                  transparent
                  opacity={0.1}
                  depthWrite={false}
                  roughness={0.1}
                  metalness={0.9}
                  clearcoat={1}
                  clearcoatRoughness={0.2}
                  transmission={0.8}
                  thickness={0.5}
                />
              </mesh>

              {/* Project Logo - main visible element */}
              <ProjectLogo name={dapp.name} id={dapp.id} website={dapp.website} />
            </group>

            {/* Expanded glow effect when nearby - pulsing ring */}
            {isNearby && (
              <>
                <mesh>
                  <sphereGeometry args={[1.2, 32, 32]} />
                  <meshStandardMaterial
                    color={typeColor}
                    emissive={typeColor}
                    emissiveIntensity={0.6}
                    transparent
                    opacity={0.15}
                    depthWrite={false}
                  />
                </mesh>
                <mesh>
                  <sphereGeometry args={[1.4, 32, 32]} />
                  <meshStandardMaterial
                    color={typeColor}
                    emissive={typeColor}
                    emissiveIntensity={0.3}
                    transparent
                    opacity={0.08}
                    depthWrite={false}
                  />
                </mesh>
              </>
            )}

            {/* Project name label - always faces camera */}
            <Billboard position={[0, 1.8, 0]}>
              <Text
                fontSize={0.4}
                color={isHovered || isNearby ? "#fff" : "#aaa"}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#000"
              >
                {dapp.name}
              </Text>
            </Billboard>

            {/* Distance indicator when nearby */}
            {isNearby && (
              <Billboard position={[0, 2.5, 0]}>
                <Html center>
                  <div className="rounded-lg bg-black/90 px-3 py-1.5 text-xs text-white shadow-lg">
                    {distance.toFixed(1)}m
                  </div>
                </Html>
              </Billboard>
            )}
          </group>
        );
      })}
    </>
  );
}
