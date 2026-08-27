import react from 'react'
import {Canvas,useThree} from '@react-three/fiber'
import * as THREE from 'three'
import {OrbitControls, useGLTF,useTexture} from '@react-three/drei'

const Dog=()=>{
  const model=useGLTF('/models/dog.drc.glb')


  // const {camera,scene,gl}=useThree();
  // useEffect(()=>{
  //   camera.positionz=0.55
  // })

  useThree(({camera,scene,gl})=>{
    // console.log(camera.position)
    camera.position.z=0.55
  })

  const textures=useTexture({
    normalMap:"/models/dog_normals.jpg"
  })

  model.scene.traverse((child)=>{
    // console.log(child.name)
    if(child.name.includes("DOG")){
      console.log(child.name)
    }
  })

  return(
    <>
        <primitive object={model.scene} position={[0.25,-0.55,0]} rotation={[0.25,Math.PI/3.9,0]}/>
        <directionalLight position={[0,5,5]} color="#ffffff" intensity={10}/>
        {/* <OrbitControls/> */}
    </>
  )
}
export default Dog