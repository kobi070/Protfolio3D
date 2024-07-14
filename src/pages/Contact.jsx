import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const formRef = useRef(null);
  const [form, setform] = useState({ name: '', email: '', message: '' })
  const [isLoading, setisLoading] = useState(false);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  };

  const handleFocused = (e) => {
    e.preventDefault();
    setisLoading(true);

    emailjs.sendForm(
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

    }).catch((error) => {
      setisLoading(false);
      console.log(error);
      // TODO: Show error message
      
    });
  };

  const handleBlur = () => { };
  const handleSubmit = () => { };

  return (
    <section className='relative flex lg:flex-row flex-col
    max-container'>
      <div className='flex-1 flex flex-col'>
        <h1 className='sm:text-5xl text-3xl font-extrabold sm:leading-snug font-manrope'>
          Get in Touch
        </h1>
      </div>
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
    </section>
  )
}

export default Contact