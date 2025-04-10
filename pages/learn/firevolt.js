"use client"
import { useEffect } from "react"
import styled from "styled-components"
import DarkLayout from "@/components/dark-layout"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Flame, Zap, Leaf, Check } from "lucide-react"
import AOS from "aos"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
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
  transition: color 0.2s ease;
  
  &:hover {
    color: #3b82f6;
  }
`

const ProjectHeader = styled.div`
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
`

const ProjectTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  display: inline-block;
  text-shadow: 0 2px 10px rgba(255, 126, 95, 0.2);
`

const ProjectSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #bdbdbd;
  font-weight: 400;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const MainImage = styled.div`
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
    background: linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 100%);
    pointer-events: none;
  }
`

const Section = styled.section`
  margin-bottom: 6rem;
  border-radius: 1rem;
  
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }
  
  &:nth-child(even) {
    .section-content {
      order: 2;
    }
    
    .section-image {
      order: 1;
    }
  }
`

const SectionContent = styled.div`
  color: #e0e0e0;
  line-height: 1.8;
  font-size: 1.1rem;
`

const SectionImage = styled.div`
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  height: 100%;
  min-height: 350px;
  position: relative;
  
  @media (max-width: 767px) {
    margin-top: 2rem;
    min-height: 250px;
  }
`

const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
    color: #ff7e5f;
    filter: drop-shadow(0 2px 5px rgba(255, 126, 95, 0.3));
  }
`

const List = styled.ul`
  margin-left: 0;
  margin-bottom: 1.5rem;
  padding: 0;
  list-style: none;
  
  li {
    margin-bottom: 1rem;
    padding-left: 2rem;
    position: relative;
    
    strong {
      color: #f5f5f5;
      display: block;
      margin-bottom: 0.25rem;
      font-size: 1.1rem;
    }
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.5rem;
      width: 10px;
      height: 10px;
      background: linear-gradient(to right, #ff7e5f, #feb47b);
      border-radius: 50%;
    }
  }
`

const Card = styled.div`
  background-color: rgba(20, 20, 20, 0.8);
  border-radius: 0.8rem;
  padding: 2rem;
  margin-bottom: 2rem;
 
  
  line-height: 1.8;
`

const TextHighlight = styled.span`
  color: #feb47b;
  font-weight: 500;
`

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default function FireVoltPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <DarkLayout>
      <Container className="circuit-background">
        <BreadcrumbNav data-aos="fade-right">
          <BackLink href="/projects">
            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
            Back to Projects
          </BackLink>
        </BreadcrumbNav>

        <ProjectHeader data-aos="fade-up">
          <ProjectTitle>FireVolt Green</ProjectTitle>
          <ProjectSubtitle>Harnessing Energy from Agricultural Waste Combustion</ProjectSubtitle>
          <MainImage>
            <Image
              src="/images/firevolt.png"
              alt="FireVolt Green Project"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </MainImage>
        </ProjectHeader>

        <Section data-aos="fade-up">
          <SectionContent className="section-content">
            <SectionTitle>
              <Flame size={28} /> Abstract
            </SectionTitle>
            <Card>
              <p>
                <TextHighlight>FireVolt Green</TextHighlight> is an innovative project designed to convert energy from the combustion of agricultural
                waste into electricity while ensuring minimal environmental pollution. The system is integrated into a
                vehicle that features a combustion chamber, which can be lowered onto piles of agricultural waste and
                lifted once combustion is complete.
              </p>
              <p>
                The heat generated from combustion is utilized to create a
                temperature differential across ThermoElectric Generators (TEGs), which then generate electricity. The
                smoke produced is filtered using HEPA and Carbon filters before being released, significantly reducing
                air pollution. This project offers a sustainable solution by efficiently harnessing wasted thermal
                energy and mitigating the harmful effects of open-field burning.
              </p>
            </Card>
          </SectionContent>
        
        </Section>

        <Section data-aos="fade-up">
          <SectionContent className="section-content">
            <SectionTitle>
              <Zap size={28} /> Technology Used
            </SectionTitle>
            <List>
              <li data-aos="fade-up" data-aos-delay="100">
                <strong>Combustion Chamber</strong>
                Designed to be mobile and adjustable, allowing efficient burning of
                agricultural waste.
              </li>
              <li data-aos="fade-up" data-aos-delay="150">
                <strong>ThermoElectric Generators (TEGs)</strong>
                Convert the heat from combustion into electrical
                energy using temperature differentials.
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <strong>Cooling System</strong>
                Heat sinks and cooling fans are employed to maintain an optimal
                temperature differential across TEGs.
              </li>
              <li data-aos="fade-up" data-aos-delay="250">
                <strong>Boost Converters & MPPT Modules</strong>
                Used to step up and stabilize the voltage output from
                the TEGs before storing it in batteries.
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <strong>Battery Storage System</strong>
                Stores the generated electricity for further utilization.
              </li>
              <li data-aos="fade-up" data-aos-delay="350">
                <strong>Exhaust System with Filtration</strong>
                HEPA filters remove particulate matter, while Carbon
                filters capture poisonous gases, ensuring cleaner emissions.
              </li>
              <li data-aos="fade-up" data-aos-delay="400">
                <strong>Sensor-Based Optimization</strong>
                Sensors are used to measure the temperature difference
                across TEGs, optimizing combustion and power generation.
              </li>
            </List>
          </SectionContent>
        
        </Section>

        <SectionGrid data-aos="fade-up">
          <div>
            <SectionTitle>
              <Leaf size={28} /> Future Scope
            </SectionTitle>
            <List>
              <li data-aos="fade-up" data-aos-delay="100">
                <strong>Increased Energy Efficiency</strong>
                Enhancements in TEG technology and heat management could
                improve overall efficiency.
              </li>
              <li data-aos="fade-up" data-aos-delay="150">
                <strong>Integration with Other Renewable Systems</strong>
                Could be combined with solar or wind energy
                to create hybrid sustainable solutions.
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <strong>Automation and IoT Integration</strong>
                Sensors and real-time monitoring systems can be used to
                measure the temperature difference across TEGs to optimize combustion and power generation.
              </li>
              <li data-aos="fade-up" data-aos-delay="250">
                <strong>Scaling for Industrial Use</strong>
                The technology can be adapted for large-scale agricultural
                or industrial waste-to-energy conversion.
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <strong>Air Quality Monitoring</strong>
                Real-time pollution tracking can be integrated for better
                regulatory compliance and environmental benefits.
              </li>
            </List>
          </div>
          <div>
            <SectionTitle>
              <Check size={28} /> Project Outcomes
            </SectionTitle>
            <List>
              <li data-aos="fade-up" data-aos-delay="100">
                <strong>Conversion of Waste into Energy</strong>
                Utilizes agricultural waste to generate usable
                electricity, reducing energy dependency.
              </li>
              <li data-aos="fade-up" data-aos-delay="150">
                <strong>Reduction in Air Pollution</strong>
                The use of advanced filtration systems significantly cuts
                down emissions from open-field burning.
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <strong>Sustainable Agriculture Practices</strong>
                Promotes an eco-friendly alternative to traditional
                biomass burning.
              </li>
              <li data-aos="fade-up" data-aos-delay="250">
                <strong>Potential for Commercial Applications</strong>
                The system can be adapted for broader
                applications, such as waste-to-energy plants.
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <strong>Utilization of Byproducts</strong>
                Soot and ash are repurposed for industrial and agricultural
                benefits, ensuring minimal waste generation.
              </li>
            </List>
          </div>
        </SectionGrid>
        
        <Section data-aos="fade-up">
          <SectionContent className="section-content">
            <SectionTitle>
              <Flame size={28} /> Impact & Benefits
            </SectionTitle>
            <Card>
              <p>
                FireVolt Green transforms the problem of agricultural waste disposal into an opportunity for clean energy generation. By addressing the issue of open-field burning, our solution helps reduce the environmental impact of traditional agricultural practices while creating a sustainable energy source.
              </p>
              <p>
                The modular and mobile design allows for deployment in various agricultural settings, making it accessible to farmers of different scales. The technology not only reduces carbon emissions but also provides an economic incentive for proper waste management through energy generation.
              </p>
            </Card>
          </SectionContent>
        
        </Section>
      </Container>
    </DarkLayout>
  )
}