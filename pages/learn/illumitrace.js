"use client"
import { useEffect } from "react"
import styled from "styled-components"
import DarkLayout from "@/components/dark-layout"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Lightbulb, Cpu, Globe } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const ProjectHeader = styled.div`
  margin-bottom: 4rem;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const ProjectTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #43cea2, #185a9d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  display: inline-block;
  letter-spacing: -0.03em;
  
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
  margin-bottom: 2.5rem;
  letter-spacing: 0.05em;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`

const HeroImage = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    border-radius: 0.75rem;
  }
  
  img {
    transform: scale(1);
    transition: transform 0.5s ease;
    width: 100%;
    height: auto;
  }
  
  &:hover img {
    transform: scale(1.02);
  }
`

const Section = styled.section`
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
    gap: 2rem;
  }
  
  @media (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
    
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`

const SectionContent = styled.div`
  color: #e0e0e0;
  line-height: 1.8;
  font-size: 1.125rem;
  flex: 3;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }
`

const SectionImage = styled.div`
  flex: 2;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  @media (max-width: 768px) {
    border-radius: 0.75rem;
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }
`

const SectionTitle = styled.h3`
  font-size: 2rem;
  background: linear-gradient(to right, #43cea2, #185a9d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
  
  svg {
    margin-right: 0.75rem;
    color: #43cea2;
    stroke-width: 1.5;
    
    @media (max-width: 480px) {
      width: 24px;
      height: 24px;
    }
  }
`

const List = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-bottom: 1.5rem;
  }
  
  li {
    margin-bottom: 0.75rem;
    position: relative;
    
    @media (max-width: 768px) {
      margin-bottom: 0.5rem;
    }
    
    &::before {
      content: "";
      position: absolute;
      left: -1.25rem;
      top: 0.75rem;
      width: 0.5rem;
      height: 0.5rem;
      background: linear-gradient(to right, #43cea2, #185a9d);
      border-radius: 50%;
      
      @media (max-width: 768px) {
        left: -1rem;
        top: 0.6rem;
        width: 0.4rem;
        height: 0.4rem;
      }
    }
  }
  
  ul {
    margin-top: 0.5rem;
    margin-left: 1.5rem;
    margin-bottom: 0.5rem;
    
    @media (max-width: 768px) {
      margin-left: 1rem;
    }
    
    li::before {
      background: #a0a0a0;
      width: 0.35rem;
      height: 0.35rem;
      
      @media (max-width: 768px) {
        width: 0.3rem;
        height: 0.3rem;
      }
    }
  }
  
  strong {
    color: #fff;
    font-weight: 600;
  }
`

const Card = styled.div`
  background: rgba(30, 30, 40, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(100, 100, 100, 0.2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 0.75rem;
    margin-bottom: 1.5rem;
  }
  
  &:hover {
    transform: translateY(-5px);
  }
  
  p {
    margin-bottom: 0;
    font-size: 1.25rem;
    line-height: 1.8;
    color: #f5f5f5;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }
`

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(100, 100, 100, 0.3), transparent);
  margin: 4rem 0;
  
  @media (max-width: 768px) {
    margin: 2.5rem 0;
  }
`

export default function IllumiTracePage() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
      easing: 'ease-out-cubic',
      disable: window.innerWidth < 768 ? 'mobile' : false // Optional: disable animations on mobile for better performance
    });
  }, []);
  
  return (
    <DarkLayout>
      <Container className="circuit-background">
        <ProjectHeader data-aos="fade-down">
          <ProjectTitle>Illumitrace</ProjectTitle>
          <ProjectSubtitle>Pitch Guided PCB Soldering Device</ProjectSubtitle>
          <HeroImage data-aos="zoom-in" data-aos-delay="200">
            <Image
              src="/images/illumitrace.jpeg"
              alt="Illumitrace Project"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </HeroImage>
        </ProjectHeader>

        <Section>
          <SectionContent data-aos="fade-right">
            <SectionTitle>
              <Lightbulb size={28} /> Objective
            </SectionTitle>
            <Card data-aos="fade-up" data-aos-delay="200">
              <p>
                To create an interactive platform where you can design electronic circuits online and instantly see them
                come to life on a physical LED board that represents your design in real-time.
              </p>
            </Card>
          </SectionContent>
        </Section>

        <Divider data-aos="fade-in" />

        <Section>
          <SectionContent data-aos="fade-right">
            <SectionTitle>
              <Cpu size={28} /> Problem Statement
            </SectionTitle>
            <p data-aos="fade-up" data-aos-delay="100">
              Understanding and creating electronic circuits can be intimidating, especially for beginners.
              Transitioning from theoretical knowledge to practical implementation often involves a steep learning
              curve. Common challenges include visualizing how components interact, identifying errors, and debugging
              complex designs.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              Soldering components onto a PCB can also be challenging due to the precision required and
              the risk of damaging components, leading to frustration and wasted resources. These difficulties can
              discourage students, hobbyists, and even young engineers from exploring electronics.
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              What's needed is a tool that bridges the gap between digital circuit design and physical implementation, offering real-time
              feedback to make the process intuitive, engaging, and educational.
            </p>
          </SectionContent>
        </Section>

        <Divider data-aos="fade-in" />

        <Section>
          <SectionContent data-aos="fade-right">
            <SectionTitle>
              <Globe size={28} /> Approach
            </SectionTitle>
            <p data-aos="fade-up">
              To address these challenges, our solution combines the power of online design tools with a physical
              visualization system. Here's how we'll make it happen:
            </p>

            <List>
              <li data-aos="fade-up" data-aos-delay="100">
                <strong>Intuitive Web Interface:</strong>
                <p>
                  A drag-and-drop circuit design tool that runs on a user-friendly website. With integrated SPICE
                  (Simulation Program with Integrated Circuit Emphasis) to simulate the behaviour of circuits, ensuring
                  realistic and reliable results. With a component checklist to keep track of all parts in the design
                  and prevent mistakes.
                </p>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <strong>Data Processing and Transfer:</strong>
                <p>
                  Convert the designed circuit into an array-based format where each component and connection is
                  represented by specific values (`0` for no connection, `1` for positive, and `2` for negative). This
                  data is sent step-by-step to an ESP32 microcontroller using the MQTT protocol enabling sequential
                  processing and real-time updates.
                </p>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <strong>LED Matrix for Real-Time Feedback:</strong>
                <p>
                  A physical LED matrix is used to represent the circuit. Each LED corresponds to a point on a PCB
                  (Printed Circuit Board), lighting up in specific colors (e.g., green for positive and red for negative
                  connections) to show the circuit in action. Implementing step by step illumination of the components
                  helps users identify the components to be soldered, understand how their circuit functions and
                  debugging in real-time.
                </p>
              </li>
              <li data-aos="fade-up" data-aos-delay="400">
                <strong>Hardware Alignment and Custom Casing:</strong>
                <p>
                  The LED matrix aligns precisely with a PCB of dimensions <strong>10 cm x 15 cm</strong>
                  featuring standard <strong>2.54 mm</strong> hole diameters. This ensures compatibility with most
                  electronic components. A specially designed casing will prevents light refraction, ensuring that LEDs
                  illuminate only the intended PCB holes for clarity and accuracy.
                </p>
              </li>
              <li data-aos="fade-up" data-aos-delay="500">
                <strong>Simplifying Soldering Challenges:</strong>
                <p>
                  By visually guiding users on the LED matrix with step-by-step illumination, this tool reduces the
                  likelihood of soldering errors. Users can confidently place and solder Components without worrying
                  about misalignment or incorrect connections, making the process easier and more efficient.
                </p>
              </li>
            </List>
          </SectionContent>
        </Section>

        <Divider data-aos="fade-in" />

        <Section>
          <SectionContent data-aos="fade-up">
            <SectionTitle data-aos="fade-right">Salient Features of Illumitrace</SectionTitle>
            <List>
              <li data-aos="fade-up" data-aos-delay="100">
                <strong>Interactive Circuit Design Tool:</strong>
                <ul>
                  <li>
                    Drag-and-drop design interface powered by SPICE for simulation ensures easy and smooth user
                    experience making it beginner friendly.
                  </li>
                  <li>
                    Component checklist to track and manage design elements to ensure no components are misplaced or
                    missed and the circuit is not compromised.
                  </li>
                </ul>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <strong>Data Mapping and Connection Protocol:</strong>
                <ul>
                  <li>Circuit designs are translated into an array format for processing.</li>
                  <li>
                    Data transmitted step by step via MQTT to ESP32 to ensure sequential updates keeping the user well
                    informed about their circuit.
                  </li>
                </ul>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <strong>Real-Time LED Matrix Visualization:</strong>
                <ul>
                  <li>LEDs light up dynamically to show connections and signal paths.</li>
                  <li>
                    Different colours represent positive (green) and negative(red) connections, aiding in quick
                    understanding and debugging.
                  </li>
                </ul>
              </li>
              <li data-aos="fade-up" data-aos-delay="400">
                <strong>Alignment and Precision with PCB:</strong>
                <ul>
                  <li>Accurate alignment with PCB ensures practical usability.</li>
                  <li>
                    A custom casing prevents light leakage, enhancing the visualization experience, also ensuring easy
                    transportation of the device.
                  </li>
                </ul>
              </li>
              <li data-aos="fade-up" data-aos-delay="500">
                <strong>Support:</strong>
                <ul>
                  <li>
                    Step-by-step illumination on the LED matrix acts as a visual guide for soldering, reducing errors
                    and ensuring precision.
                  </li>
                </ul>
              </li>
            </List>
          </SectionContent>
        </Section>
      </Container>
    </DarkLayout>
  )
}