import React from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei'

const Plane = ({isRoatating, ...props}) => {
    const {scene, animations} = useGLTF(planeScene);
    return (
        <mesh {...props}>
            <primitive
                object={scene}>
            </primitive>
        </mesh>
    )
}

export default Plane