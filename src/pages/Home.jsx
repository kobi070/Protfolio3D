import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { Island, Bird, Plane, Sky } from '../models';
import HomeInfo from '../components/HomeInfo';

import sakura from '../assets/sakura.mp3';
import { a } from '@react-spring/three';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRoatating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

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

    screenScale = window.innerWidth < 768 ? [1.75, 1.75, 1.75] :
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
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRoatating ?
        'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}>

        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000"
            intensity={1} />


          <Bird />
          <Sky isRoatating={isRoatating} />
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
        <div className='absolute bottom-2 left-2'>
          <img src={!isPlayingMusic ? soundoff : soundon}
          className='w-10 h-10 cursor-pointer object-contain'
          alt='sound' 
            onClick={()=> setIsPlayingMusic(!isPlayingMusic)}
          />
        </div>
    </section>
  )
}

export default Home