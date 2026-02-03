'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, Sphere } from '@react-three/drei'
import { Suspense } from 'react'

function RotatingBox() {
  return (
    <Box args={[1, 1, 1]} position={[-1.5, 0, 0]}>
      <meshStandardMaterial color="hotpink" />
    </Box>
  )
}

function FloatingSphere() {
  return (
    <Sphere args={[0.5, 32, 32]} position={[1.5, 0, 0]}>
      <meshStandardMaterial color="cyan" wireframe />
    </Sphere>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          {/* 3D Objects */}
          <RotatingBox />
          <FloatingSphere />
          
          {/* Controls */}
          <OrbitControls enableZoom enablePan enableRotate />
          
          {/* Grid helper */}
          <gridHelper args={[10, 10]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
