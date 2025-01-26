import React, { useEffect } from 'react';
import Tilt from "@/components/Tilt"
import { Title, TitleSm } from "@/components/common/Title"
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({ imageSrc, title, description }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className='content flex'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        data-aos="zoom-in" 
        className={`left w-40 py transition-all duration-500 ease-in-out 
          ${isHovered ? 'w-1/3' : 'w-full'}`}
      >
        <Tilt options={{ max:15, speed: 400 }} className="hover-box">
          <img src={imageSrc} alt='Img' className='round' width='100%' height='100%' />
          <a href="/" className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#00dc93" viewBox="0 0 256 256">
              <path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path>
            </svg>
          </a>
        </Tilt>  
      </div>
      {isHovered && (
        <div data-aos="fade-left" className='right w-60 ml'>
          <TitleSm title={title} />
          <br /> 
          <p className='misson-p pcolor fade-left'>{description}</p>
        </div>
      )}
    </div>
  );
};

const Agency = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
   {
      imageSrc: '/images/smartenergyhub.jpg',
      title: 'SMART ENERGY HUB',
      description: 'Smart Energy Hub is an advanced energy management system designed to revolutionize the way consumers interact with their electricity usage. The platform offers real-time billing calculations, power factor monitoring, and efficient fault reporting, ensuring a seamless experience for both residential and industrial users.'
    },  {
      imageSrc: '/images/hardwaretrojan.jpg',
      title: 'HARDWARE TROJAN DETECTION USING ML',
      description: 'Utilizing machine learning algorithms, our project focuses on detecting hardware Trojans embedded within integrated circuits, safeguarding electronic devices from potential security breaches and ensuring their integrity and reliability.'
    }, {
      imageSrc: '/images/mastercap.jpg',
      title: 'MASTER CAP',
      description: 'The Master cap is a technology that will be developed for blind individuals to enable them to perform everyday tasks like reading books and traveling independently, among many other things, despite their condition.'
    },
    {
      imageSrc: '/images/PARAMOTION.gif',
      title: 'PARA MOTION ASSISTIVE SYSTEM',
      description: 'This project presents the development of a comprehensive system for monitoring the movement of paralyzed or disordered movement of hands using EMG muscle sensors, NB-IoT, and Arduino technology.'
    },
   
   
  ];
  const pastProjects = [
    {
      imageSrc: '/images/ventilator.jpg',
      title: 'DESIGN AND DEVELOPMENT OF A LOW-COST AUTOMATIC VENTILATOR',
      description: 'The profound secret of its existence is that a low-cost automatic portable ventilator has a controlled breath rate of 12 RR/min and 500-600 mL tidal volume, which supports pneumonia cases in COVID-19 patients.'
    },
    {
      imageSrc: '/images/gesture.jpg',
      title: 'GESTURE-CONTROLED CAR RACE',
      description: 'Why use a joystick when you can use just flick your hands? Here is a gesture controled car. Now all you need is your hands to drive a car ;no more fiddling around with remotes.'
    },
    {
      imageSrc: '/images/gluco.jpg',
      title: 'NON- INVASIVE GLUCOMETER USING NIR SPECTROSCOPY',
      description: 'This project provides a painless, non-invasive method for the detection of glucose levels in the human body. To control blood sugar levels, the diabetic pierces his fingers and has to go through a lot of pain. The proposed model is a cost-effective and non-obtrusive prototype utilizing NIR (near infrared) spectroscopy methodology.'
    }
  ];

  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT PROJECTS' /> <br />
            <br />
            <Title title='Making your vision become a reality.' className='title-bg' />
          </div>

          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
            />
          ))}
  <div className='heading-title'>
            <Title title='Making your vision become a reality.' className='title-bg' />
            <TitleSm title='Some Past Year Projects.' className='title-bg' />
          </div>

{pastProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
            />
          ))}
          <br />
          <br />
        </div>
      </section>
    </>
  );
}

export default Agency;