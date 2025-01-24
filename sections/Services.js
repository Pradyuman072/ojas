import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { event } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import Banner from "@/components/Banner";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, 
    });
  }, []);

  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='EVENTS' /> <br />
            <br />
            <Title title='BEST EVENTS' className='title-bg' />
          </div>
          <div data-aos="zoom-in" className='grid-2 py'>
            {event.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </div>
          <Banner /> 
          <br />
          <br />
        </div>
      </section>
    </>
  );
}

export default Services;