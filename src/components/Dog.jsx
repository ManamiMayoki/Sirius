import React, { useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, useGLTF, useTexture, useAnimations } from '@react-three/drei'

const Dog = () => {
  const model = useGLTF('/models/dog.drc.glb')


  // const {camera,scene,gl}=useThree();
  // useEffect(()=>{
  //   camera.positionz=0.55
  // })

  useThree(({ camera, scene, gl }) => {
    // console.log(camera.position)
    camera.position.z = 0.7
    // gl.toneMapping=THREE.ReinhardToneMapping
    // gl.outputColorSpace=THREE.SRGBColorSpace
  })

  const { actions } = useAnimations(model.animations, model.scene)
  useEffect(() => {
    actions["Take 001"]?.play()
  }, [actions])

  // const textures=useTexture({
  //   normalMap:"/models/dog_normals.jpg",
  //   sampleMatCap: "/matcap/mat-2.png"
  // })


  // textures.normalMap.flipY=false
  // textures.sampleMatCap.colorSpace=THREE.SRGBColorSpace


  //optimized code
  const [
    normalMap,
    sampleMatCap
  ] = (useTexture(["/models/dog_normals.jpg", "matcap/mat-2.png"]))
    .map(texture => {
      texture.flipY = false
      texture.colorSpace = THREE.SRGBColorSpace
      return texture
    })

  const[branchMap,branchNormalMap]=(useTexture(["/models/branches_diffuse.jpeg", "/models/branches_normals.jpeg"]))
    .map(texture => {
      texture.flipY = true
      texture.colorSpace = THREE.SRGBColorSpace
      return texture
    })

  const dogMaterial = new THREE.MeshMatcapMaterial({
    normalMap: normalMap,
    matcap: sampleMatCap
  })

  const branchMaterial=new THREE.MeshMatcapMaterial({
    normalMap: branchNormalMap,
    map: branchMap
  })

  model.scene.traverse((child) => {
    // console.log(child.name)
    if (child.name.includes("DOG")) {
      // console.log(child.name)
      // child.material=new THREE.MeshMatcapMaterial({
      //   // normalMap: normalMap,
      //   // matcap: sampleMatCap
      //   // color:"#800000"
      // })
      child.material = dogMaterial
    }else{
      child.material = branchMaterial
    }
  })


  return (
    <>
      <primitive object={model.scene} position={[0.25, -0.55, 0]} rotation={[0.25, Math.PI / 3.9, 0]} />
      <directionalLight position={[0, 5, 5]} color="#ffffff" intensity={10} />
      {/* <OrbitControls/>  */}
    </>
  )
}
export default Dog