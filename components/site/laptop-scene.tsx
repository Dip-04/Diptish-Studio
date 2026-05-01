"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function LaptopScene() {
  const group = useRef<{
    rotation: { x: number; y: number; z: number };
    position: { x: number; y: number; z: number };
  } | null>(null);

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.elapsedTime;
    group.current.rotation.x = -0.25 + Math.sin(time * 0.5) * 0.05;
    group.current.rotation.y = Math.sin(time * 0.35) * 0.35;
    group.current.position.y = Math.sin(time * 0.9) * 0.1;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={1.6} />
      <directionalLight position={[3, 4, 6]} intensity={2.2} />
      <directionalLight position={[-4, -2, 2]} intensity={0.8} />
      <pointLight position={[0, 2, 4]} intensity={2.5} color="#8b5cf6" />

      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[3.55, 2.1, 0.16]} />
        <meshStandardMaterial color="#090d18" metalness={0.62} roughness={0.3} />
      </mesh>

      <mesh position={[0, 0.24, 0.09]}>
        <planeGeometry args={[3.2, 1.82]} />
        <meshStandardMaterial
          color="#06101d"
          emissive="#4f46e5"
          emissiveIntensity={0.62}
          metalness={0.25}
          roughness={0.2}
        />
      </mesh>

      <mesh position={[0, -1.1, 0.85]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[4.0, 0.16, 2.5]} />
        <meshStandardMaterial color="#05070d" metalness={0.7} roughness={0.25} />
      </mesh>

      <mesh position={[0, -0.3, 0.88]} rotation={[-0.13, 0, 0]}>
        <boxGeometry args={[2.15, 0.05, 0.92]} />
        <meshStandardMaterial color="#111827" emissive="#7c3aed" emissiveIntensity={0.22} />
      </mesh>

      <mesh position={[-1.1, 0.72, 0.18]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={2.2} />
      </mesh>

      <mesh position={[1.12, -0.42, 0.16]}>
        <sphereGeometry args={[0.06, 32, 32]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.7} />
      </mesh>

      <mesh position={[0, 1.3, -0.15]} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.1, 0.03, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={1.2} />
      </mesh>
    </group>
  );
}

export function LaptopCanvas() {
  return (
    <Canvas camera={{ position: [0, 0.5, 7], fov: 32 }}>
      <LaptopScene />
    </Canvas>
  );
}
