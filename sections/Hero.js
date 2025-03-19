import { TitleSm } from "@/components/common/Title";
import React from "react";
import AboutUs from "./AboutUs";
import Tilt from "@/components/Tilt";
import styled from 'styled-components';
import EmailSubmissionForm from "@/sections/ContactUs";
import FAQSection from "@/components/common/Faq";
import Orb from './Orb';
const Hero = () => {
  return (
    <StyledHero className="">
     

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
       
<div style={{ width: '100%', height: "150%", position: 'relative' }}>
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={10}
    forceHoverState={false}
  />
</div>
           
        </div>
    
   
      </section>
      <div className="circuit-background" ><AboutUs />
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
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center vertically */
    align-items: center; /* Center horizontally */
    text-align: center;
  }

  .sub-heading {
    margin-bottom: 4rem;
    font-size: 3rem;
    color: #ffffff;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  }

  .home-page-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: black; /* Button color */
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