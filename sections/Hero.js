import { TitleSm } from "@/components/common/Title";
import React from "react";
import AboutUs from "./AboutUs";
import Tilt from "@/components/Tilt";
import styled from 'styled-components';
import EmailSubmissionForm from "@/sections/ContactUs";
import FAQSection from "@/components/common/Faq";


const Hero = () => {
  return (
    <StyledHero className="circuit-background">
     

      <section className='hero  '>
         <div data-aos="zoom-in" className='container items-center text-center'>
          <Tilt>
            <h1 className='hero-title '>TEAM OJAS</h1>
          </Tilt>
          <div className='sub-heading'>
            <Tilt>
              <TitleSm title='Departmental Team of Electrical Engineering' className="title" />
            </Tilt>
          </div>
        </div>
        <div data-aos="zoom-in" className="snow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1536" preserveAspectRatio="xMidYMax slice">
            <g fill="#4b1b88" fillOpacity="0.8" transform="translate(55 42)">
              <g id="snow-bottom-layer">
                {/* Snow ellipses */}
                {Array.from({ length: 50 }).map((_, i) => (
                  <ellipse key={i} cx={Math.random() * 1024} cy={Math.random() * 1536} rx="6" ry="5.5" />
                ))}
              </g>
            </g>
            <g fill="#FFF" fillOpacity="0.4" transform="translate(65 63)">
              <g id="snow-top-layer">
                {/* Snow circles */}
                {Array.from({ length: 50 }).map((_, i) => (
                  <circle key={i} cx={Math.random() * 1024} cy={Math.random() * 1536} r="8" />
                ))}
              </g>
            </g>
          </svg>
        </div>
    
   
      </section>
      <div ><AboutUs />
       {/* <FAQSection/> */}
                <EmailSubmissionForm/>
                <FAQSection/>
      </div>
	    

    </StyledHero>
  );
}

const StyledHero = styled.div`
  .hero {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/path/to/your/background-image.jpg') no-repeat center center/cover;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center vertically */
    align-items: center; /* Center horizontally */
    text-align: center;
  }

  .sub-heading {
    margin-bottom: 2rem;
    font-size: 1.5rem; /* Increased font size for sub-heading */
  }

  .home-page-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #ffcc00; /* Button color */
    color: #282c34; /* Text color */
    border-radius: 5px;
    font-size: 1.2rem;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease;
    margin-top: 1rem;
  }

  .home-page-btn:hover {
    background-color: #e6b800; /* Darker shade on hover */
    transform: translateY(-2px);
  }

  .snow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2; /* Ensure content is above the snow */
  }
`;

export default Hero;