import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { Island, Bird, Plane, Sky } from '../models';
import { useState } from 'react';

// Implement later 
{/* <div className='absolute top-28 lef-0 right-0 z-10 flex
      items-centre justify-center'>
        POPUP
      </div> */}

const Home = () => {
  const [isRoatating, setIsRotating] = useState(false);
  const [currentState, setCurrentStage] = useState(1);


  const adjustIslandForScreenSize = () => {
    let screenScale,
      screenPosition = [0, -6.5, -43],
      rotation = [0.1, 4.7, 0];

    screenScale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] :
      [1, 1, 1];

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition

    screenScale = window.innerWidth < 768 ? [1.5, 1.5, 1.5] :
      [3, 3, 3];
    screenPosition = window.innerWidth < 768 ? [0, -1.5, 0] :
      [, -4, -4];

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRoatation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] =
    adjustPlaneForScreenSize();


  return (
    <section className='w-full h-screen relative'>
      <Canvas className={`w-full h-screen bg-transparent ${isRoatating ?
        'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}>

        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000"
            intensity={1} />


          <Bird />
          <Sky isRoatating={isRoatating}/>
          <Island
            isRotating={isRoatating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            scale={islandScale}
            rotation={islandRoatation}
          />
          <Plane
            isRoatating={isRoatating}
            setIsRotating={setIsRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home