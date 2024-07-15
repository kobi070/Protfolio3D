import { Html } from '@react-three/drei';

/**
 * Loader component to display a spinning loader animation.
 * Uses @react-three/drei's Html component to render HTML content inside a three.js scene.
 * 
 * @returns {JSX.Element} The rendered loader component.
 */
const Loader = () => {
  return (
    <Html>
      <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20
        border-blue-500 border-t-blue-500 rounded-full animate-spin'>
        </div>
      </div>
    </Html>
  );
}

export default Loader;
