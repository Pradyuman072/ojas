import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";
import Tilt from "../Tilt";
import styled from 'styled-components';

export const Card = ({ data, caption, show }) => {
  return (
    <StyledCard data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <div className='card-img'>
        <Tilt options={{ max: 15, speed: 400 }}>
          <img className="team-card" src={data.cover} alt={data.title} loading="lazy" />
        </Tilt>
      </div>
      <div className='card-details'>
        <Link href={`${data.handle}`} className='title-link' target="_blank">
          <TitleSm title={data.title} />
        </Link>

        {caption && (
          <Link href={`${data.handlegit}`} target="_blank">
            {caption} <HiOutlineArrowRight className='link-icon' />
          </Link>
        )}

        <div className='flex'>
          <span>{data.catgeory}</span> {data.date && <span> / {data.date}</span>}
        </div>

        {show && (
          <ul>
            {data.desc.map((text, i) => (
              <li key={i}> - {text.text} </li>
            ))}
          </ul>
        )}
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
  }

  .card-img {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    height: 350px; /* Set a fixed height for the image container */
    width: 100%; /* Ensure it takes full width */
  }

  .team-card {
    width: 100%;
    height: 100%; /* Make the image fill the container */
    object-fit: cover; /* Maintain aspect ratio and cover the container */
    transition: transform 0.3s ease;
  }

  .card-details {
    padding: 1rem;
    background: linear-gradient(135deg, rgba(0, 0, 128, 0.9), rgba(0, 0, 64, 0.9)); /* Dark blue gradient */
    border-radius: 0 0 1rem 1rem;
    transition: background 0.3s ease;

    &:hover {
      background: linear-gradient(135deg, rgba(0, 0, 128, 1), rgba(0, 0, 64, 1)); /* Darker gradient on hover */
    }
  }

  .title-link {
    font-weight: bold;
    color: #fff; /* Change text color to white for better contrast */
    transition: color 0.3s ease;

    &:hover {
      color: #ffcc00; /* Change to your desired hover color */
    }
  }

  .link-icon {
    margin-left: 5px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(3px);
    }
  }
`;

export default Card;