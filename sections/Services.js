import { event } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import Banner from "@/components/Banner"
import React from "react"

const Services = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='EVENTS' /> <br />
            <br />
            <Title title='BEST EVENTS' className='title-bg' />
          </div>
          <div  data-aos="zoom-in" className='grid-2 py' style={{}}>
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
  )
}

export default Services
