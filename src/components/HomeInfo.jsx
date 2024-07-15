import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

/**
 * Renders an informational box with text and a link button.
 * 
 * @param {Object} props The properties object.
 * @param {string} props.text The text content of the informational box.
 * @param {string} props.link The destination link for the button.
 * @param {string} props.btnTxt The text displayed on the button.
 * @returns {JSX.Element} The rendered informational box component.
 */
const infoBox = ({ text, link, btnTxt }) => (
    <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
            {text}
        </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnTxt}
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
    </div>
);

/**
 * Renders different content based on the current stage.
 * 
 * @param {Object} props The properties object.
 * @param {number} props.currentStage The current stage to determine which content to render.
 * @returns {JSX.Element|null} The rendered content component based on the current stage,
 *                              or null if the stage doesn't match any predefined content.
 */
const HomeInfo = ({ currentStage }) => {
    /**
     * Predefined content to render based on the current stage.
     * 
     * @type {Object}
     */
    const renderContent = {
        1: (
            <h1 className='sm:text-xl sm:leading-snug text-center
             neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Hi, I am <span className="font-semibold">Kobi</span> 👋
                <br />
                A Software Engineer from Israel
            </h1>
        ),
        2: (
            <infoBox
                text="Worked with many companies and picked up many skills along
             the way"
                link="/about"
                btnTxt="Learn more"
            />
        ),
        3: (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                    Led multiple projects to success over the years. <br /> Curious about the impact?
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    Visit my portfolio
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        ),
        4: (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
                </p>

                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Let's talk
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        )
    };

    // Render content based on the currentStage, or return null if no matching content found.
    return renderContent[currentStage] || null;
};

export default HomeInfo;
