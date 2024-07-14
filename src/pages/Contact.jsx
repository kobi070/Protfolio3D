import { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader'

const Contact = () => {

  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setisLoading] = useState(false);
  const [currentAnimations, setCurrentAnimations] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleFocused = (e) => {
    e.preventDefault();
    setisLoading(true);
    setCurrentAnimations('hit');
  };

  const handleBlur = () => { setCurrentAnimations('walk') };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    setCurrentAnimations('walk');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        form_name: form.name,
        to_name: 'Kobi',
        from_email: form.email,
        to_email: 'kobi070@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,

    ).then(() => {
      setisLoading(false);
      // TODO: to show success message
      // TODO: to hide an alert
      setForm({ name: '', email: '', message: '' });

    }).catch((error) => {
      setisLoading(false);
      setCurrentAnimations('idle');
      console.log(error);
      // TODO: Show error message

    });

  };

  return (
    <section className='relative flex lg:flex-row flex-col
    max-container'>
      <div className='flex-1 flex flex-col'>
        <h1 className='sm:text-5xl text-3xl font-extrabold sm:leading-snug font-manrope'>
          Get in Touch
        </h1>
        <form
          ref={formRef}
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}>
          <label className='text-black-500'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocused}
              onBlur={handleBlur}>
            </input>
          </label>

          <label className='text-black-500'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='john@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocused}
              onBlur={handleBlur}>
            </input>
          </label>

          <label className='text-black-500'>
            Your Message
            <textarea
              name='message'
              row={4}
              className='textarea'
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocused}
              onBlur={handleBlur}>
            </textarea>
          </label>

          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocused}
            onBlur={handleBlur}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>

        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.6} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.625, -0.625, 0]}
              scale={[0.55, 0.55, 0.55]}
              currentAnimation={currentAnimations}
            />
          </Suspense>

        </Canvas>
      </div>
    </section>
  )
}

export default Contact