"use client"
import { useEffect } from "react"
import styled from "styled-components"
import DarkLayout from "@/components/dark-layout"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Cpu, Cloud, BarChart, Shield, Zap, Server } from "lucide-react"
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
  background: linear-gradient(to right, #6a11cb, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  display: inline-block;
  text-shadow: 0 2px 10px rgba(106, 17, 203, 0.3);
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
  border: 1px solid #333;
  
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
  background: linear-gradient(to right, #6a11cb, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
    color: #6a11cb;
    filter: drop-shadow(0 2px 5px rgba(106, 17, 203, 0.3));
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
      background: linear-gradient(to right, #6a11cb, #2575fc);
      border-radius: 50%;
    }
    
    ul, ol {
      margin-top: 0.5rem;
      margin-left: 1rem;
      
      li {
        padding-left: 1rem;
        margin-bottom: 0.5rem;
        
        &:before {
          width: 6px;
          height: 6px;
          top: 0.5rem;
        }
      }
    }
  }
`

const OrderedList = styled.ol`
  margin-left: 0;
  margin-bottom: 1.5rem;
  padding: 0;
  list-style: none;
  counter-reset: item;
  
  li {
    margin-bottom: 1rem;
    padding-left: 2.5rem;
    position: relative;
    
    strong {
      color: #f5f5f5;
      display: block;
      margin-bottom: 0.25rem;
      font-size: 1.1rem;
    }
    
    &:before {
      content: counter(item) "";
      counter-increment: item;
      position: absolute;
      left: 0;
      top: 0.2rem;
      width: 24px;
      height: 24px;
      background: linear-gradient(to right, #6a11cb, #2575fc);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: 700;
      color: white;
    }
  }
`

const Card = styled.div`
 
  border-radius: 0.8rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #333;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  line-height: 1.8;
`

const TextHighlight = styled.span`
  color: #a78bfa;
  font-weight: 500;
`

const CardTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  color: #e0e0e0;
  margin-bottom: 1.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(106, 17, 203, 0.3);
`

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const FeatureCard = styled.div`
  background: rgba(25, 25, 25, 0.7);
  border-radius: 0.8rem;
  padding: 1.5rem;
  border: 1px solid #333;
  height: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  
  h4 {
    font-size: 1.2rem;
    color: #f5f5f5;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 0.5rem;
      color: #8b5cf6;
    }
  }
  
  p {
    margin-bottom: 0;
    color: #d4d4d4;
  }
`

export default function SenseLinkPage() {
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
          <ProjectTitle>SenseLink</ProjectTitle>
          <ProjectSubtitle>Smart Sensor Detection and Data Transmission System</ProjectSubtitle>
          <MainImage>
            <Image
              src="/images/senslink.jpg"
              alt="SenseLink Project"
              width={700}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </MainImage>
        </ProjectHeader>

        <Section data-aos="fade-up">
          <SectionContent className="section-content">
            <SectionTitle>
              <Cpu size={28} /> Project Overview
            </SectionTitle>
            <Card>
              <p>
                <TextHighlight>SenseLink</TextHighlight> is an intelligent IoT solution designed to automate sensor detection and ensure seamless data
                transmission. The system streamlines IoT device integration by eliminating manual configuration and
                enabling real-time monitoring and analytics.
              </p>
              <p>
                Built with scalability, security, and customization in mind, SenseLink is ideal for diverse industrial 
                and commercial environments requiring efficient and reliable sensor networks.
              </p>
            </Card>
            
            <div data-aos="fade-up" data-aos-delay="200">
              <SectionTitle>
                <BarChart size={28} /> Key Features
              </SectionTitle>
              <FeatureGrid>
                <FeatureCard data-aos="fade-up" data-aos-delay="300">
                  <h4><Zap size={20} /> Intelligent Detection</h4>
                  <p>Automatically identifies and configures connected sensors, ensuring optimal data collection without user intervention.</p>
                </FeatureCard>
                <FeatureCard data-aos="fade-up" data-aos-delay="350">
                  <h4><Server size={20} /> Seamless Transmission</h4>
                  <p>Real-time data transmission to a web-based platform supports live monitoring, instant analytics, and rapid decision-making.</p>
                </FeatureCard>
                <FeatureCard data-aos="fade-up" data-aos-delay="400">
                  <h4><Cloud size={20} /> AI-Driven Firmware</h4>
                  <p>Machine learning algorithms analyze sensor specifications and auto-generate optimized firmware for maximum efficiency.</p>
                </FeatureCard>
                <FeatureCard data-aos="fade-up" data-aos-delay="450">
                  <h4><Shield size={20} /> Enhanced Security</h4>
                  <p>Encrypted data transmission and robust access control ensure your sensor data remains protected.</p>
                </FeatureCard>
              </FeatureGrid>
            </div>
          </SectionContent>
       
        </Section>

        <Section data-aos="fade-up">
          <SectionContent className="section-content">
            <SectionTitle>
              <Server size={28} /> System Workflow
            </SectionTitle>
            <OrderedList>
              <li data-aos="fade-up" data-aos-delay="100">
                <strong>Device Initialization</strong>
                <p>Loads base firmware and sets up the device for sensor detection.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="150">
                <strong>Sensor Detection</strong>
                <p>Automatically identifies the type and parameters of the connected sensor.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <strong>Data Transmission</strong>
                <p>Streams live data to the cloud/server infrastructure for processing and storage.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="250">
                <strong>Website Interaction</strong>
                <p>A web dashboard allows data requests, visualization, and analysis.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <strong>Firmware Flashing</strong>
                <p>Device firmware is updated remotely using MQTT protocol.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="350">
                <strong>Continuous Operation</strong>
                <p>The device continues operation until a reset or sensor removal.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="400">
                <strong>Sensor Disconnect</strong>
                <p>On sensor removal, the device reverts to default firmware and awaits new sensor input.</p>
              </li>
            </OrderedList>
          </SectionContent>
        
        </Section>

        <Section data-aos="fade-up">
          <SectionContent className="section-content">
            <SectionTitle>
              <Cloud size={28} /> Applications & Use Cases
            </SectionTitle>
            <Card>
              <CardTitle>Industrial IoT Applications</CardTitle>
              <List>
                <li data-aos="fade-up" data-aos-delay="100">
                  <strong>Smart Manufacturing</strong>
                  <p>Monitor equipment health, optimize production lines, and implement predictive maintenance.</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="150">
                  <strong>Environmental Monitoring</strong>
                  <p>Track air quality, water levels, pollution metrics, and other environmental parameters.</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <strong>Agricultural Management</strong>
                  <p>Monitor soil conditions, implement precision irrigation, and optimize crop yields.</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="250">
                  <strong>Smart Buildings</strong>
                  <p>Manage energy consumption, occupancy rates, and building system health.</p>
                </li>
              </List>
            </Card>
            
            <Card data-aos="fade-up" data-aos-delay="300">
              <CardTitle>Scalability Features</CardTitle>
              <List>
                <li data-aos="fade-up" data-aos-delay="350">
                  <strong>Multi-Device Support</strong>
                  <p>Manage multiple SenseLink devices concurrently. Ideal for large-scale operations.</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  <strong>Cloud Integration</strong>
                  <p>Secure storage and access to sensor data. Enables remote management and real-time analytics.</p>
                </li>
              </List>
            </Card>
          </SectionContent>
        
        </Section>

        <FeatureGrid data-aos="fade-up">
          <div>
            <SectionTitle>
              <Shield size={28} /> Challenges & Solutions
            </SectionTitle>
            <List>
              <li data-aos="fade-up" data-aos-delay="100">
                <strong>Connectivity Issues</strong>
                <p>Implemented MQTT with redundancy for stable communication, ensuring data reliability even in unstable network conditions.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="150">
                <strong>AI Model Accuracy</strong>
                <p>Continuously train and update the AI firmware generator using real-world sensor data to improve detection accuracy.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <strong>Security Concerns</strong>
                <p>Employ encrypted data transmission and robust access control to protect sensitive sensor information.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="250">
                <strong>Scale Management</strong>
                <p>Distributed architecture design allowing the system to scale horizontally as sensor networks grow.</p>
              </li>
            </List>
          </div>
          <div>
            <SectionTitle>
              <BarChart size={28} /> Revenue Model
            </SectionTitle>
            <List>
              <li data-aos="fade-up" data-aos-delay="100">
                <strong>Subscription-Based Model</strong>
                <p>Tiered subscription plans for AI firmware updates and platform access.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="150">
                <strong>Customized Solutions</strong>
                <p>Industry-specific integrations and customizations for enterprise clients.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <strong>Advanced Cloud Services</strong>
                <p>Premium analytics, long-term data storage, and advanced reporting capabilities.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="250">
                <strong>Hardware Partnerships</strong>
                <p>Revenue sharing with compatible hardware manufacturers through certified integration program.</p>
              </li>
            </List>
          </div>
        </FeatureGrid>
        
        <Section data-aos="fade-up">
          <SectionContent className="section-content">
            <SectionTitle>
              <Zap size={28} /> Future Enhancements
            </SectionTitle>
            <Card>
              <p>
                The SenseLink platform is continuously evolving to meet the growing demands of IoT environments. Our roadmap includes significant improvements to both hardware and software components:
              </p>
              <List>
                <li data-aos="fade-up" data-aos-delay="100">
                  <strong>Predictive Maintenance</strong>
                  <p>Integration of advanced predictive analytics to forecast sensor and equipment failures before they occur.</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="150">
                  <strong>Advanced Data Analytics</strong>
                  <p>Enhanced historical data processing for deeper insights and trend analysis.</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <strong>Edge Computing Capabilities</strong>
                  <p>Moving critical processing to the edge for reduced latency and bandwidth requirements.</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="250">
                  <strong>Expanded Sensor Compatibility</strong>
                  <p>Support for a wider range of industrial and specialized sensors across multiple industries.</p>
                </li>
              </List>
            </Card>
          </SectionContent>
         
        </Section>
      </Container>
    </DarkLayout>
  )
}