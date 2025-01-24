import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

import { TitleSm } from "@/components/common/Title"
import Tilt from "@/components/Tilt"
// import Image from "next/image"

export const ShowCaseCard = ({ data, caption, show}) => {
  return (
    <div className="">
      <div  data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='card'>
        <div className='card-img '>
        <Tilt options={{ max:15, speed: 400 }}>
          <img className="team-card" src={data.cover} alt={data.title} loading="lazy"/>
          </Tilt>
        </div>
        <div className='card-details '>
          <Link href={`${data.handle}`} className='title-link' target="_blank">
            <TitleSm title={data.title} />
             </Link>

          {caption && (
            <Link href={`${data.handlegit}`} target="_blank">
              {caption} <HiOutlineArrowRight className='link-icon' />
            </Link>
          )}
               
          <div className='flex'>
            <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text} </li>
              ))}''
            </ul>
          )}
        </div>
      </div>
    </div>
  )
} 