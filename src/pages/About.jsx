import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants'
import CTA from '../components/CTA';

/// TODO: Change Work Experience section to my work experience

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
                <div className='btn-back rounded-x1' />
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
        {/* <div className='py-16'>
          <h3 className='subhead-text'>Work Experince</h3>
          <p>
            Software Developer with a B.Sc, in Computer Science based in Israel.
            passionate about building innovative software solutions.
            I specialize in both front-end and back-end development, database management, and DevOps practices.
          </p>
        </div> */}

        {/* <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experince) => (
              <VerticalTimelineElement
                key={experince.company_name}
                date={experince.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img src={experince.icon}
                      alt={experince.company_name}
                      className='w-[60%] h-[60%] object-contain'></img>
                  </div>}
                iconStyle={{
                  background: experince.iconBg
                }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experince.iconBg,
                  boxShadow: 'none',
                }}>
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experince.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base'
                    style={{ margin: 0 }}>
                    {experince.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {
                    experince.points.map((point, index) => (
                      <li className='text-black-500/50 font-normal pl-1 text-small'
                        key={`experince-point-${index}`}>
                        {point}
                      </li>
                    ))
                  }
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div> */}

      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default About