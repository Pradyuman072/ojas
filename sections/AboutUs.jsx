import { ccdata } from "@/assets/data/dummydata";
import { Title, TitleSm } from "@/components/common/Title";
import Link from "next/link";
import React from "react";
import styled from 'styled-components';

const ShowCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT US' /> <br />
            <br />
            <Title title='OUR CLUB COORDINATORS' className='title-bg' />
          </div>
          <br />
          <br />
          {/* about us */}
          <div className='cc-card'>
            {ccdata.map((coordinator) => (
              <StyledWrapper key={coordinator.id}>
                <div className="myCard">
                  <div className="innerCard">
                    <div className="frontSide">
                      <p className="title">{coordinator.title}</p>
                      <img src={coordinator.cover} className="img-responsive" alt={coordinator.title} />
                    </div>
                    <div className="backSide">
                      <p className="title">Contact</p>
                      <Link href={coordinator.handlegit} target="_blank">
                        <p>Linkedin</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </StyledWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const StyledWrapper = styled.div`
  .myCard {
    background-color: transparent;
    width: 300px;
    height: 400px;
    perspective: 1000px;
    margin: 10px; /* Add some margin for spacing */
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .innerCard {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .myCard:hover .innerCard {
    transform: rotateY(180deg);
  }

  .frontSide,
  .backSide {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 1rem;
    color: white;
    box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
    font-weight: 700;
  }

  .frontSide {
    background: linear-gradient(135deg, rgba(0, 0, 128, 1) 0%, rgba(200, 100, 200, 1) 100%); /* Lighter purple */
  }

  .backSide {
    background-color: #003366; /* Dark blue color */
    transform: rotateY(180deg);
  }

  .frontSide img {
    width: 80%; 
    border-radius: 1rem;
  }
`;

export default ShowCase;