import react from 'react'
import {Canvas,useThree} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'

const Dog=()=>{
  const model=useGLTF('/models/dog.drc.glb')

  useThree(({camera,scene,gl})=>{
    console.log(camera.position)
    camera.position.z=0.7
  })

  return(
    <>
        <primitive object={model.scene} position={[0,-0.5,0]} rotation={[0,Math.PI,0]}/>
        <directionalLight position={[0,5,5]} color="0xffffff" intensity={10}/>
        <OrbitControls/>
    </>
  )
}
export default Dog