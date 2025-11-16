"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense, useState } from "react";
import BikeController from "./BikeController";
import ProjectMarkers from "./ProjectMarkers";
import { type Dapp } from "@/data/dapps";
import * as THREE from "three";

interface Scene3DProps {
  filteredDapps: Dapp[];
  onProjectSelect: (dapp: Dapp) => void;
}

export default function Scene3D({ filteredDapps, onProjectSelect }: Scene3DProps) {
  const [bikePosition, setBikePosition] = useState(new THREE.Vector3(0, 0, 0));

  return (
    <div className="h-screen w-full relative">
      <Canvas shadows>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />

          {/* Camera */}
          <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={75} />

          {/* Black Ground Plane */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[500, 500]} />
            <meshStandardMaterial color="#000000" />
          </mesh>

          {/* Bike Controller */}
          <BikeController onPositionUpdate={setBikePosition} />

          {/* Project Markers */}
          <ProjectMarkers dapps={filteredDapps} onSelect={onProjectSelect} bikePosition={bikePosition} />

          {/* Environment */}
          <Environment preset="night" />
        </Suspense>
      </Canvas>

      {/* Controls overlay */}
      <div className="absolute bottom-4 left-4 rounded-lg bg-black/90 backdrop-blur-sm p-4 text-white text-sm border border-white/10">
        <div className="font-semibold mb-3 text-base">Controls</div>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-white/20 rounded text-xs">W</kbd>
            <kbd className="px-2 py-1 bg-white/20 rounded text-xs">A</kbd>
            <kbd className="px-2 py-1 bg-white/20 rounded text-xs">S</kbd>
            <kbd className="px-2 py-1 bg-white/20 rounded text-xs">D</kbd>
            <span className="ml-2">- Drive</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-white/20 rounded text-xs">↑</kbd>
            <kbd className="px-2 py-1 bg-white/20 rounded text-xs">↓</kbd>
            <kbd className="px-2 py-1 bg-white/20 rounded text-xs">←</kbd>
            <kbd className="px-2 py-1 bg-white/20 rounded text-xs">→</kbd>
            <span className="ml-2">- Drive (Alt)</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-white/20 rounded text-xs">Shift</kbd>
            <span className="ml-2">- Boost speed</span>
          </div>
          <div className="mt-2 pt-2 border-t border-white/10">
            Click on glowing projects to view details
          </div>
        </div>
      </div>
    </div>
  );
}
