import { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useGLTF, useAnimations } from '@react-three/drei'

const Plane = ({ isRoatating, setIsRotating, ...props }) => {
    const planeRef = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, planeRef);

    useEffect(() => {
        if (isRoatating) {
            actions['Take 001'].play();
        } else {
            actions['Take 001'].stop();
        }
    }, [isRoatating])

    return (
        <mesh {...props} ref={planeRef}>
            <primitive
                object={scene}>
            </primitive>
        </mesh>
    )
}

export default Plane