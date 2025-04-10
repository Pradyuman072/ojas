"use client"
import { useEffect } from "react"
import styled from "styled-components"
import DarkLayout from "@/components/dark-layout"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Sun, Thermometer, Code, List, BoxSelect } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`

const BreadcrumbNav = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 0.875rem;
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
  margin-bottom: 4rem;
  text-align: center;
`

const ProjectTitle = styled.h1`
  font-size: 3.5rem;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  display: inline-block;
  
  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
`

const ProjectSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #a0a0a0;
  font-weight: 400;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`

const HeroImage = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  margin-bottom: 4rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 100%);
    pointer-events: none;
  }
`

const Section = styled.section`
  margin-bottom: 6rem;
  background-color: rgba(18, 18, 20, 0.7);
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(75, 75, 75, 0.2);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background: linear-gradient(to right, #4facfe, #00f2fe);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const SectionInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const SectionContent = styled.div`
  color: #e0e0e0;
  line-height: 1.7;
  font-size: 1.1rem;
  flex: 2;
  
  p {
    margin-bottom: 1.5rem;
  }
`

const SectionImage = styled.div`
  flex: 1;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`

const SectionTitle = styled.h3`
  font-size: 2rem;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
    color: #4facfe;
  }
  
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`

const SectionTitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`

const IconWrapper = styled.div`
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    color: #080808;
  }
  
  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
  }
`

const StyledList = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
  color: #e0e0e0;
  
  li {
    margin-bottom: 0.75rem;
    
    strong {
      color: #4facfe;
    }
    
    ul {
      margin-top: 0.5rem;
      margin-left: 1.5rem;
      
      li {
        margin-bottom: 0.5rem;
        position: relative;
        
        &::before {
          content: "→";
          position: absolute;
          left: -1.25rem;
          color: #4facfe;
        }
      }
    }
  }
`

const Card = styled.div`
  background-color: rgba(30, 30, 30, 0.7);
  border-radius: 0.75rem;
  padding: 1.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  p {
    margin-bottom: 0;
  }
`

const ElementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const ElementCard = styled.div`
  background-color: rgba(30, 30, 30, 0.7);
  border-radius: 0.75rem;
  padding: 1.25rem;
  border: 1px solid #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    border-color: #4facfe;
  }
`

export default function BhaskarPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    })
  }, [])
  
  return (
    <DarkLayout>
      <Container className="circuit-background">
        <BreadcrumbNav>
          <BackLink href="/projects">
            <ArrowLeft size={16} />
            <span className="ml-2">Back to Projects</span>
          </BackLink>
        </BreadcrumbNav>

        <ProjectHeader data-aos="fade-up">
          <ProjectTitle>Bhaskara</ProjectTitle>
          <ProjectSubtitle>
            Non-Electrical Sun Tracker for Solar Panel Using Paraffin Wax and Parabolic Mirror
          </ProjectSubtitle>
        </ProjectHeader>
        
        <HeroImage data-aos="zoom-in">
          <Image
            src="/images/bhaskar.png"
            alt="Bhaskara Project Hero Image"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </HeroImage>

        <Section data-aos="fade-up">
          <SectionTitleWithIcon>
            <IconWrapper>
              <Sun size={24} />
            </IconWrapper>
            <SectionTitle>Problem Statement</SectionTitle>
          </SectionTitleWithIcon>
          
          <SectionInner>
            <SectionContent>
              <Card data-aos="fade-right" data-aos-delay="100">
                <p>
                  Traditional solar trackers use electrical motors and sensors to follow the sun's path across the sky,
                  increasing the solar panel's efficiency. However, these systems require electrical power and are costly,
                  making them less suitable for rural or low-income areas. There is a need for a cost-effective,
                  self-sustaining, and non-electrical tracking system to improve solar energy utilization.
                </p>
              </Card>
              
              <p data-aos="fade-up" data-aos-delay="200">
                Our project addresses this challenge by developing an innovative solution that maximizes solar efficiency 
                without relying on electrical components, making renewable energy more accessible to underserved communities.
              </p>
            </SectionContent>
            
            <SectionImage data-aos="fade-left" data-aos-delay="300">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Solar Tracking Problem"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </SectionImage>
          </SectionInner>
        </Section>

        <Section data-aos="fade-up">
          <SectionTitleWithIcon>
            <IconWrapper>
              <Thermometer size={24} />
            </IconWrapper>
            <SectionTitle>Proposed Solution</SectionTitle>
          </SectionTitleWithIcon>
          
          <SectionInner>
            <SectionContent>
              <p data-aos="fade-right" data-aos-delay="100">
                We propose a non-electrical sun tracking system using the thermal expansion properties of paraffin wax
                combined with a parabolic mirror. The system uses solar heat to melt and expand paraffin wax within two
                containers on either side of a panel. The difference in wax expansion due to directional heating creates a
                pressure imbalance, causing the panel to tilt towards the sun. The parabolic mirror focuses sunlight more
                efficiently onto the wax containers to enhance the responsiveness of the system.
              </p>
              
              <Card data-aos="fade-up" data-aos-delay="200">
                <p>
                  <strong>Key Benefits:</strong> Our solution eliminates the need for electricity, reduces maintenance costs, 
                  and provides a sustainable approach to solar tracking that can function reliably in remote locations.
                </p>
              </Card>
            </SectionContent>
          </SectionInner>
        </Section>

        <Section data-aos="fade-up">
          <SectionTitleWithIcon>
            <IconWrapper>
              <Code size={24} />
            </IconWrapper>
            <SectionTitle>Procedure</SectionTitle>
          </SectionTitleWithIcon>
          
          <SectionInner>
            <SectionContent>
              <StyledList data-aos="fade-up" data-aos-delay="100">
                <li>
                  <strong>Design the Solar Panel Mount:</strong>
                  <ul>
                    <li>Create a pivoting structure to hold the solar panel.</li>
                    <li>Attach wax chambers on both sides of the structure symmetrically.</li>
                  </ul>
                </li>
                <li>
                  <strong>Wax Chamber Setup:</strong>
                  <ul>
                    <li>Fill two identical cylindrical containers with paraffin wax.</li>
                    <li>Seal each container with a flexible diaphragm or piston.</li>
                    <li>Connect the diaphragms to a lever or rod that helps tilt the panel.</li>
                  </ul>
                </li>
                <li>
                  <strong>Parabolic Mirror Integration:</strong>
                  <ul>
                    <li>Position parabolic mirrors to focus sunlight directly onto the wax chambers.</li>
                    <li>As the sun moves, one side receives more heat, causing the wax to expand more on that side.</li>
                  </ul>
                </li>
                <li>
                  <strong>Sun Tracking Mechanism:</strong>
                  <ul>
                    <li>As wax expands unevenly due to focused sunlight, the system becomes imbalanced.</li>
                    <li>
                      This imbalance causes the solar panel to tilt toward the side with less expansion, following the
                      sun.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Reset Mechanism (Optional):</strong>
                  <ul>
                    <li>
                      At sunset, the wax cools and contracts, allowing the panel to reset back to the east by gravity or
                      spring mechanism for the next day.
                    </li>
                  </ul>
                </li>
              </StyledList>
            </SectionContent>
            
            <SectionImage data-aos="fade-left" data-aos-delay="300">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Bhaskara Implementation Process"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </SectionImage>
          </SectionInner>
        </Section>

        <Section data-aos="fade-up">
          <SectionTitleWithIcon>
            <IconWrapper>
              <BoxSelect size={24} />
            </IconWrapper>
            <SectionTitle>Elements Required</SectionTitle>
          </SectionTitleWithIcon>
          
          <SectionContent>
            <ElementsGrid>
              <ElementCard data-aos="zoom-in" data-aos-delay="100">
                <p><strong>Paraffin Wax</strong> – Heat-sensitive material for thermal expansion.</p>
              </ElementCard>
              
              <ElementCard data-aos="zoom-in" data-aos-delay="150">
                <p><strong>Two Cylindrical Chambers</strong> – To contain the paraffin wax.</p>
              </ElementCard>
              
              <ElementCard data-aos="zoom-in" data-aos-delay="200">
                <p><strong>Flexible Diaphragms</strong> – For transferring pressure changes.</p>
              </ElementCard>
              
              <ElementCard data-aos="zoom-in" data-aos-delay="250">
                <p><strong>Pivoting Panel Stand</strong> – To allow panel movement based on pressure shift.</p>
              </ElementCard>
              
              <ElementCard data-aos="zoom-in" data-aos-delay="300">
                <p><strong>Parabolic Mirrors</strong> – For focusing sunlight onto wax chambers.</p>
              </ElementCard>
              
              <ElementCard data-aos="zoom-in" data-aos-delay="350">
                <p><strong>Metal Rods and Joints</strong> – For mechanical linkage and structure.</p>
              </ElementCard>
              
              <ElementCard data-aos="zoom-in" data-aos-delay="400">
                <p><strong>Solar Panel</strong> – To collect solar energy.</p>
              </ElementCard>
              
              <ElementCard data-aos="zoom-in" data-aos-delay="450">
                <p><strong>Insulation Material</strong> – To ensure thermal efficiency.</p>
              </ElementCard>
              
              <ElementCard data-aos="zoom-in" data-aos-delay="500">
                <p><strong>Springs or Counterweights</strong> – For reset mechanism (optional).</p>
              </ElementCard>
              
              <ElementCard data-aos="zoom-in" data-aos-delay="550">
                <p><strong>Frame/Base Platform</strong> – To support the full assembly.</p>
              </ElementCard>
            </ElementsGrid>
          </SectionContent>
        </Section>
      </Container>
    </DarkLayout>
  )
}