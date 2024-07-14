import { useState } from 'react'

const Contact = () => {
  const [form, setform] = useState({ name: '', email: '', message: '' })
  const [isLoading, setisLoading] = useState(false)
  const handleChange = () => { };
  const handleFocused = () => { };
  const handleBlur = () => { };

  return (
    <section className='relative flex lg:flex-row flex-col
    max-container'>
      <div className='flex-1 flex flex-col'>
        <h1 className='sm:text-5xl text-3xl font-extrabold sm:leading-snug font-manrope'>
          Get in Touch
        </h1>
      </div>
      <form className='w-full flex flex-col gap-7 mt-14'>
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