"use client";

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text, Billboard, Html } from "@react-three/drei";
import * as THREE from "three";
import { type Dapp } from "@/data/dapps";
import ProjectLogo from "./ProjectLogo";

interface ProjectMarkersProps {
  dapps: Dapp[];
  onSelect: (dapp: Dapp) => void;
  bikePosition?: THREE.Vector3;
}

export default function ProjectMarkers({ dapps, onSelect, bikePosition = new THREE.Vector3() }: ProjectMarkersProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [nearby, setNearby] = useState<string | null>(null);
  const markersRef = useRef<{ [key: string]: THREE.Vector3 }>({});
  const { camera } = useThree();

  // Distribute projects in a circle/spiral pattern
  const getProjectPosition = (index: number, total: number) => {
    const radius = 8 + (Math.floor(index / 8) * 12);
    const angle = (index / Math.max(8, total % 8 || 8)) * Math.PI * 2 + (Math.floor(index / 8) * 0.5);
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = 0.5;
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

    setNearby(closestId);
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

        return (
          <group key={dapp.id} position={position}>
            {/* Project marker - glowing sphere */}
            <mesh
              onPointerOver={() => setHovered(dapp.id)}
              onPointerOut={() => setHovered(null)}
              onClick={() => onSelect(dapp)}
              castShadow
            >
              <sphereGeometry args={[0.6, 16, 16]} />
              <meshStandardMaterial
                color={getTypeColor(dapp.type)}
                emissive={getTypeColor(dapp.type)}
                emissiveIntensity={isHovered || isNearby ? 0.8 : 0.3}
                transparent
                opacity={0.75}
              />
            </mesh>

            {/* Project Logo inside sphere */}
            <ProjectLogo name={dapp.name} id={dapp.id} />

            {/* Glow effect when nearby */}
            {isNearby && (
              <mesh>
                <sphereGeometry args={[1, 16, 16]} />
                <meshStandardMaterial
                  color={getTypeColor(dapp.type)}
                  transparent
                  opacity={0.2}
                />
              </mesh>
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
