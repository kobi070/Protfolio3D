import React from 'react'
import { skills } from '../constants'

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'> Hello, I'm <span className='blue-gradient_text
       font-semibold drop-shadow'>
        Kobi</span>
      </h1>

      <div className='mt-5 felx flex-col gap3 text-slate-500'>
        <p>
          Software Developer with a B.Sc, in Computer Science based in Israel.
          passionate about building innovative software solutions.
          I specialize in both front-end and back-end development, database management, and DevOps practices.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {
            skills.map((skill) => (
              <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-x1'/>
                <div className='btn-front rounded-xl flex 
                justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'>

                  </img>
                </div>
              </div>
            )
            )
          }
        </div>
      </div>

    </section>
  )
}

export default About