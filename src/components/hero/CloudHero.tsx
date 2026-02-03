"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function CloudPlane({ textureUrl }: { textureUrl: string }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const tex = new THREE.TextureLoader().load(textureUrl);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 1);

  useFrame((_, dt) => {
    tex.offset.x += dt * 0.02;
    if (mesh.current) mesh.current.position.y = Math.sin(Date.now() * 0.00025) * 0.05;
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -0.2, 0]}>
      <planeGeometry args={[10, 6]} />
      <meshStandardMaterial map={tex} transparent opacity={0.65} />
    </mesh>
  );
}

export default function CloudHero() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 1.2, 3], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 5, 2]} intensity={1.2} />
          <CloudPlane textureUrl="/textures/clouds.png" />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
