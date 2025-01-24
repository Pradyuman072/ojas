import { showcase } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import FAQSection from "@/components/common/Faq"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { ShowCaseCard } from "./ShowCaseCard"

const ShowCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT US' /> <br />
            <br />
            <Title title='Take brief view of our Club' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='grid-3'>
            {showcase.map((item) => (
              <ShowCaseCard data={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
            <FAQSection/>
    </>
  )
}

export default ShowCase
