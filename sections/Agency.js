import Tilt from "@/components/Tilt"
import { Title, TitleSm } from "@/components/common/Title"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Agency = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <section className='agency bg-top'>
          <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT PROJECTS' /> <br />
            <br />
            <Title title='Making your vision become a reality.' className='title-bg' />
          </div>

          <div className='content flex'>
            <div data-aos="zoom-in" className='left w-40 py'>
              <Tilt options={{ max:15, speed: 400 }} className="hover-box">
                <img src='/images/mastercap.jpg' alt='Img' className='round' width='100%' height='100%' />
                <a href="/" className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#00dc93" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg></a>
              </Tilt>  
            </div>
            <div  data-aos="fade-left" className='right w-60 ml'>
              <TitleSm title='MASTER CAP' />
              <br /> 
              <p className='misson-p pcolor fade-left'>The Master cap is a technology that will be developed for blind individuals to enable them to perform everyday tasks like reading books and traveling independently, among many other things, despite their condition.</p>
            </div>
          </div>

          <div className='content flex'>
            <div data-aos="zoom-in" className='left w-40 py'>
              <Tilt options={{ max:15, speed: 400 }} className="hover-box">
                <img src='\images\PARAMOTION.gif' alt='Img' className='round' width='100%' height='100%' />
                <a href="/" className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#00dc93" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg></a>
              </Tilt>  
            </div>
            <div  data-aos="fade-left" className='right w-60 ml'>
              <TitleSm title='PARA MOTION ASSISTIVE SYSTEM' />
              <br />
              <p className='misson-p pcolor'>This project presents the development of a comprehensive system for monitoring the movement of paralyzed or disordered movement of hands using EMG muscle sensors, NB-IoT, and Arduino technology.</p>
            </div>
          </div>

          <div className='content flex'>
            <div data-aos="zoom-in" className='left w-40 py'>
              <Tilt options={{ max:15, speed: 400 }} className="hover-box">
                <img src='/images/smartenergyhub.jpg' alt='Img' className='round' width='100%' height='100%' />
                <a href="/" className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#00dc93" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg></a>
              </Tilt>  
            </div>
            <div  data-aos="fade-left" className='right w-60 ml'>
              <TitleSm title='SMART ENERGY HUB' />
              <br />
              <p className='misson-p pcolor'>Smart Energy Hub is an advanced energy management system designed to revolutionize the way consumers interact with their electricity usage. The platform offers real-time billing calculations, power factor monitoring, and efficient fault reporting, ensuring a seamless experience for both residential and industrial users. Leveraging cutting-edge technologies such as Node MCU, GSM, and Open Weather Map API, the system not only provides accurate energy consumption data but also predicts renewable energy output, promoting sustainable practices.</p>
            </div>
          </div>

          <div className='content flex'>
            <div data-aos="zoom-in" className='left w-40 py'>
              <Tilt options={{ max:15, speed: 400 }} className="hover-box">
                <img src='/images/hardwaretrojan.jpg' alt='Img' className='round' width='100%' height='100%' />
                <a href="/" className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#00dc93" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg></a>
              </Tilt>  
            </div>
            <div  data-aos="fade-left" className='right w-60 ml'>
              <TitleSm title='HARDWARE TROJAN DETECTION USING ML' />
              <br />
              <p className='misson-p pcolor'>Utilizing machine learning algorithms, our project focuses on detecting hardware Trojans embedded within integrated circuits, safeguarding electronic devices from potential security breaches and ensuring their integrity and reliability.</p>
            </div>
          </div>

          <div data-aos="zoom-in" className='heading-title'>
            <TitleSm title='SOME PAST YEAR PROJECTS' /> <br />
            <br />
            <Title title='Making your vision become a reality.' className='title-bg' />
          </div>

          <div className='content flex'>
            <div data-aos="zoom-in" className='left w-40 py'>
              <Tilt options={{ max:15, speed: 400 }} className="hover-box">
                <img src='/images/ventilator.jpg' alt='Img' className='round' width='100%' height='100%' />
                <a href="/" className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#00dc93" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg></a>
              </Tilt>  
            </div>
            <div  data-aos="fade-left" className='right w-60 ml'>
              <TitleSm title='DESIGN AND DEVELOPMENT OF A LOW-COST AUTOMATIC VENTILATOR' />
              <br />
              <br />
              <p className='misson-p pcolor'>The profound secret of its existence is that a low-cost automatic portable ventilator has a controlled breath rate of 12 RR/min and 500-600 mL tidal volume, which supports pneumonia cases in COVID-19 patients..</p>
            </div>
          </div>



          <div className='content flex'>
            <div data-aos="zoom-in" className='left w-40 py'>
            <Tilt options={{ max:15, speed: 400 }} className="hover-box">
              <img src='/images/gesture.jpg' alt='Img' className='round' width='100%' height='100%' />
              <a href="/" className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#00dc93" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg></a>
            </Tilt>  
            </div>
            <div  data-aos="fade-left" className='right w-60 ml'>
              <TitleSm title='GESTURE-CONTROLED CAR RACE' />
              <br />
              <br />
              <p className='misson-p pcolor'>Why use a joystick when you can use just flick your hands? Here is a gesture controled car. Now all you need is your hands to
              drive a car ;no more fiddling around with remotes .</p>
            </div>
          </div>

          <div  className='content flex'>
          <div data-aos="zoom-in" className='left w-40 py'>
            <Tilt options={{ max:15, speed: 400 }} className="hover-box">
              <img src='/images/gluco.jpg' alt='Img' className='round' width='100%' height='100%' />
              <a href="/" className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#00dc93" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg></a>
            </Tilt>  
            </div>
            <div data-aos="fade-left" className='right w-60 ml'>
              <TitleSm title='NON- INVASIVE GLUCOMETER USING NIR SPECTROSCOPY' />
              <br />
              <br />
              <p className='misson-p pcolor'>This project provides a painless, non-invasive method for the detection of glucose
               levels in the human body. To control blood sugar levels, the diabetic pierces his fingers and has to go through
                a lot of pain. The proposed model is a cost-effective and non-obtrusive prototype utilizing NIR (near infrared)
                 spectroscopy methodology.</p>
            </div>
          </div>

          <br />
          <br />

        </div>
      </section>
    </>
  );
}

export default Agency;