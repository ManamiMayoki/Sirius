import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Dog() {
  const { scene } = useGLTF('/models/dog.glb')
  return <primitive object={scene} scale={1} />
}

useGLTF.preload('/models/dog.glb')