import React from 'react'
import {Canvas,useThree} from '@react-three/fiber'

const Dog = () => {

    useThree(({camera,scene,gl})=>{
        console.log(camera.position)
    })
  return (
    <div>
        Dog
    </div>
  )
}

export default Dog