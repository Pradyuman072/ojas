"use client"
import { useEffect } from "react"
import styled from "styled-components"
import DarkLayout from "@/components/dark-layout"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Train, Radio, Wifi, CheckCircle } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`

const BreadcrumbNav = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #a0a0a0;
  margin-right: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3b82f6;
  }
`

const ProjectHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const ProjectTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(45deg, #a770ef, #cf8bf3, #fdb99b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  display: inline-block;
  text-shadow: 0 0 30px rgba(167, 112, 239, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const ProjectSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #a0a0a0;
  font-weight: 400;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1.25rem;
  }
`

const HeroImage = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4));
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    border-radius: 0.75rem;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  }
`

const ResponsiveImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  aspect-ratio: 1.5 / 1;
  
  @media (max-width: 768px) {
    aspect-ratio: 4 / 3;
  }
  
  @media (max-width: 480px) {
    aspect-ratio: 1 / 1;
  }
`

const Section = styled.section`
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 4rem;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 3rem;
    gap: 1.5rem;
  }
`

const SectionContent = styled.div`
  color: #e0e0e0;
  line-height: 1.8;
  font-size: 1.1rem;
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    line-height: 1.6;
    font-size: 1rem;
  }
`

const SectionImage = styled.div`
  flex: 1;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  position: relative;
  height: 100%;
  min-height: 400px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3));
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    border-radius: 0.75rem;
    min-height: 300px;
  }
  
  @media (max-width: 480px) {
    min-height: 250px;
  }
`

const SectionTitle = styled.h3`
  font-size: 2rem;
  background: linear-gradient(45deg, #a770ef, #cf8bf3, #fdb99b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  
  svg {
    margin-right: 0.75rem;
    color: #a770ef;
    filter: drop-shadow(0 0 8px rgba(167, 112, 239, 0.3));
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    
    svg {
      margin-right: 0.5rem;
    }
  }
`

const List = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
  
  li {
    margin-bottom: 1rem;
    position: relative;
    padding-left: 0.5rem;
    
    &::marker {
      color: #a770ef;
    }
    
    strong {
      color: #fdb99b;
      font-weight: 600;
      display: block;
      margin-bottom: 0.25rem;
    }
  }
  
  ul {
    margin: 0.75rem 0 0.75rem 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      color: #c0c0c0;
      
      &::marker {
        color: #cf8bf3;
      }
    }
  }
  
  @media (max-width: 768px) {
    margin-left: 1.25rem;
    
    li {
      margin-bottom: 0.75rem;
    }
    
    ul {
      margin: 0.5rem 0 0.5rem 1.25rem;
    }
  }
`

const Card = styled.div`
  background-color: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  
  p {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 0.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 0.5rem;
  }
`

const OutcomeCard = styled.div`
  background-color: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
  
  svg {
    color: #a770ef;
    margin-right: 1rem;
    min-width: 24px;
    filter: drop-shadow(0 0 8px rgba(167, 112, 239, 0.3));
  }
  
  strong {
    color: #fdb99b;
    font-weight: 600;
    margin-right: 0.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    border-radius: 0.75rem;
    
    svg {
      min-width: 20px;
      width: 20px;
      height: 20px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 0.5rem;
    
    svg {
      margin-right: 0.75rem;
    }
  }
`

const OutcomesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`

export default function TrackVisionPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
      offset: 100,
      disable: window.innerWidth < 768 ? 'mobile' : false
    });
  }, []);

  return (
    <DarkLayout>
      <Container className="circuit-background">
        <BreadcrumbNav>
          <BackLink href="/projects">
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </BackLink>
        </BreadcrumbNav>

        <ProjectHeader data-aos="fade-up">
          <ProjectTitle>Track Vision</ProjectTitle>
          <ProjectSubtitle>Railway Signal Detector During Fog</ProjectSubtitle>
          <HeroImage>
            <ResponsiveImage
              src="/images/trackvision.png"
              alt="Track Vision Project"
              width={900}
              height={600}
              priority
            />
          </HeroImage>
        </ProjectHeader>

        <Section>
          <SectionContent data-aos="fade-right">
            <SectionTitle>
              <Train size={28} /> Abstract
            </SectionTitle>
            <Card>
              <p>
                Fog significantly reduces visibility, causing severe train delays and even cancellations, especially in
                winter. Traditional railway signals become hard to see, leading to operational inefficiencies and safety
                concerns. This project proposes a LoRa-based Railway Signal Detector to assist train drivers by
                providing real-time signal status up to 1-2 kilometers in advance, ensuring smooth and timely train
                operations.
              </p>
              <p>
                The system consists of Traffic Light Transmitters installed at railway signals and a Train Receiver
                Module mounted on the locomotive. Each traffic light is integrated with an Arduino microcontroller and a
                LoRa transmitter, which continuously broadcasts its signal status (Red, Yellow, Green) along with a
                unique identifier. The train's LoRa receiver captures these signals, filters them based on Received
                Signal Strength Indicator (RSSI) and Signal-to-Noise Ratio (SNR), and displays only the upcoming signal
                status to the driver.
              </p>
              <p>
                To enhance accuracy, directional antennas are used to minimize interference from rear signals. By
                implementing this system, train drivers can anticipate signals despite foggy conditions, reducing delays
                and improving railway efficiency and safety.
              </p>
            </Card>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent data-aos="fade-right">
            <SectionTitle>
              <Radio size={28} /> Technology Used
            </SectionTitle>
            <List>
              <li>
                <strong>Microcontroller (Arduino + LoRa Module)</strong>
                <ul>
                  <li>
                    Arduino Uno is used for both signal transmission (at traffic lights) and reception (on the train).
                  </li>
                  <li>Reads the status of railway signals through GPIO pins.</li>
                  <li>Processes and transmits data wirelessly using LoRa SX1278 module.</li>
                </ul>
              </li>
              <li>
                <strong>LoRa Communication</strong>
                <ul>
                  <li>Uses LoRa SX1278 for long-range, low-power wireless communication.</li>
                  <li>Works on 433MHz, 868MHz, or 915MHz frequency bands.</li>
                  <li>
                    Provides real-time transmission of signal status (Red, Yellow, Green) from traffic light
                    transmitters to the train receiver.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Traffic Light Transmitter Setup (Arduino + LoRa TX)</strong>
                <ul>
                  <li>Each traffic light is connected to an Arduino board.</li>
                  <li>
                    When a signal LED (Red, Yellow, Green) receives power, the corresponding Arduino pin detects high
                    state.
                  </li>
                  <li>The LoRa transmitter continuously sends the signal status + unique ID.</li>
                </ul>
              </li>
              <li>
                <strong>Train Receiver Setup (Arduino + LoRa RX)</strong>
                <ul>
                  <li>A LoRa receiver on the train captures signals from traffic lights.</li>
                  <li>
                    Filters signals based on Received Signal Strength Indicator (RSSI) and Signal-to-Noise Ratio (SNR).
                  </li>
                  <li>Displays the upcoming signal status using LEDs or an LCD screen.</li>
                </ul>
              </li>
            </List>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent data-aos="fade-up">
            <SectionTitle>
              <Wifi size={28} /> Future Scope
            </SectionTitle>
            <List>
              <li>
                <strong>Integration with GPS & IoT</strong>
                <p>
                  Combine GPS tracking with signal detection to provide real-time train location and speed monitoring.
                  Send data to a cloud-based IoT platform for centralized railway traffic management.
                </p>
              </li>
              <li>
                <strong>AI-Based Signal Prediction</strong>
                <p>
                  Use machine learning algorithms to analyze historical train delays and predict signal changes. Improve
                  railway scheduling and automation.
                </p>
              </li>
              <li>
                <strong>Expansion to Multiple Railway Zones</strong>
                <p>
                  Deploy the system across major railway networks, especially in fog-prone areas. Ensure smooth railway
                  operations in extreme weather conditions.
                </p>
              </li>
              <li>
                <strong>Integration with Train Automation Systems</strong>
                <p>
                  Connect with Automatic Train Control (ATC) systems to automatically adjust train speed based on
                  received signal status. Increase safety by preventing collisions.
                </p>
              </li>
            </List>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent data-aos="fade-up">
            <SectionTitle>
              <CheckCircle size={28} /> Project Outcomes
            </SectionTitle>
            <OutcomesGrid>
              <OutcomeCard data-aos="zoom-in" data-aos-delay="100">
                <CheckCircle size={24} />
                <div>
                  <strong>Reduced Train Delays</strong> – Provides early signal detection, ensuring smooth operations in fog.
                </div>
              </OutcomeCard>
              <OutcomeCard data-aos="zoom-in" data-aos-delay="200">
                <CheckCircle size={24} />
                <div>
                  <strong>Improved Safety</strong> – Prevents accidents by giving real-time signal updates to train drivers.
                </div>
              </OutcomeCard>
              <OutcomeCard data-aos="zoom-in" data-aos-delay="300">
                <CheckCircle size={24} />
                <div>
                  <strong>Reliable Long-Range Communication</strong> – LoRa ensures uninterrupted signal transmission up to 2 km.
                </div>
              </OutcomeCard>
              <OutcomeCard data-aos="zoom-in" data-aos-delay="400">
                <CheckCircle size={24} />
                <div>
                  <strong>Cost-Effective & Scalable</strong> – Affordable and easy to implement across multiple railway networks.
                </div>
              </OutcomeCard>
              <OutcomeCard data-aos="zoom-in" data-aos-delay="500">
                <CheckCircle size={24} />
                <div>
                  <strong>Energy Efficient</strong> – Low-power operation with potential for solar-powered integration.
                </div>
              </OutcomeCard>
            </OutcomesGrid>
          </SectionContent>
        </Section>
      </Container>
    </DarkLayout>
  )
}