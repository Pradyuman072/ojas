"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, BookOpen } from "lucide-react"
import Link from "next/link"
import styled from "styled-components"

// Styled components
const Container = styled.div`
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: 1200px;
`

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`

const Description = styled.p`
  color: #6b7280;
  max-width: 42rem;
  margin: 0 auto;
  font-size: 1.125rem;
`

const ProjectImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
`

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 2rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

const CardWrapper = styled.div`
  flex: 0 0 100%;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    flex: 0 0 80%;
  }
  
  @media (min-width: 768px) {
    flex: 0 0 60%;
  }
  
  @media (min-width: 1024px) {
    flex: 0 0 40%;
  }
`

const ProjectCard = styled(motion.div)`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`

const Card = styled.div`
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
`

const CardHeader = styled.div`
  padding: 1.5rem 1.5rem 0.5rem;
`

const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  ${props => {
    switch (props.difficulty) {
      case "Beginner":
        return `background-color: #dcfce7; color: #166534;`;
      case "Intermediate":
        return `background-color: #dbeafe; color: #1e40af;`;
      case "Advanced":
        return `background-color: #f3e8ff; color: #6b21a8;`;
      default:
        return `background-color: #f3f4f6; color: #374151;`;
    }
  }}
`

const ComponentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid #e5e7eb;
  color: #374151;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`

const CardDescription = styled.p`
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 1rem;
`

const CardContent = styled.div`
  padding: 0.5rem 1.5rem;
  flex-grow: 1;
`

const ComponentsTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const ComponentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-top: 1px solid #e5e7eb;
`

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  
  ${props => props.variant === "outline" ? `
    background-color: transparent;
    border: 1px solid #e5e7eb;
    color: #374151;
    
    &:hover {
      background-color: #f9fafb;
    }
  ` : `
    background-color: #2563eb;
    color: white;
    border: none;
    
    &:hover {
      background-color: #1d4ed8;
    }
  `}
`

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.75rem;
`

const DotIndicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#2563eb' : '#d1d5db'};
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
`

// Navigation buttons
const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  z-index: 10;
  opacity: 0.8;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 1;
  }
  
  &:focus {
    outline: none;
  }
  
  ${props => props.direction === "prev" ? `
    left: 10px;
  ` : `
    right: 10px;
  `}
  
  @media (max-width: 640px) {
    display: none;
  }
`

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [clickStartTime, setClickStartTime] = useState(0);
  const [clickStartX, setClickStartX] = useState(0);
  const autoScrollTimerRef = useRef(null);
  
  const projects = [
    {
      title: "Track Vision",
      description: "Traffic light signal detector during fog using LoRa Transmission.",
      image: "/images/trackvision.png",
      difficulty: "Beginner",
      components: ["Jumper wires", "Arduino", "Traffic lights"],
      docLink: "/docs/led-flasher",
      learnMoreLink: "/learn/trackvision"
    },
    {
      title: "FIREVOLT",
      description: "In this project the electricity is generated by burning the agriculture waste.",
      image: "/images/firevolt.png",
      difficulty: "Intermediate",
      components: ["ESP32", "BOOST Converter", "Motor driver", "TEG sensors", "DC motors"],
      docLink: "/docs/audio-amplifier",
      learnMoreLink: "/learn/firevolt"
    },
    {
      title: "SenseLink",
      description: "A Plug and Use device for all the different types of sensors.",
      image: "/images/senslink.jpg",
      difficulty: "Intermediate",
      components: ["Retracted - Intellectual Property"],
      docLink: "/docs/power-supply",
      learnMoreLink: "/learn/senslink"
    },
    {
      title: "Bhaskar",
      description: "In this project we rotate the sun tracker without electricity with the help of expansion of parafin wax.",
      image: "/images/bhaskar.png",
      difficulty: "Advanced",
      components: ["Parabolic mirror", "Parafin wax"],
      docLink: "/docs/weather-station",
      learnMoreLink: "/learn/bhaskar"
    },
    {
      title: "Illumitrace",
      description: "A device connecting web designing and real world prototyping.",
      image: "/images/illumitrace.jpeg",
      difficulty: "Advanced",
      components: ["Microcontroller", "Led Materix"],
      docLink: "/docs/digital-clock",
      learnMoreLink: "/learn/illumitrace"
    },
  ];

  // Helper function to get the current card elements
  const getCardElements = () => {
    if (!containerRef.current) return [];
    return Array.from(containerRef.current.querySelectorAll(CardWrapper));
  };
  
  // Scroll to a specific card index with proper centering
  const scrollToCard = (index) => {
    if (!containerRef.current) return;
    
    const cardElements = getCardElements();
    if (index < 0 || index >= cardElements.length) return;
    
    const card = cardElements[index];
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    
    // Calculate offset to center the card in the viewport
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    const offset = cardLeft - (containerWidth / 2) + (cardWidth / 2);
    
    // Apply scroll with smooth behavior
    container.scrollTo({
      left: offset,
      behavior: 'smooth'
    });
  };
  
  // Navigate to next card
  const nextCard = () => {
    const nextIndex = (activeIndex + 1) % projects.length;
    setActiveIndex(nextIndex);
    scrollToCard(nextIndex);
  };
  
  // Navigate to previous card
  const prevCard = () => {
    const prevIndex = (activeIndex - 1 + projects.length) % projects.length;
    setActiveIndex(prevIndex);
    scrollToCard(prevIndex);
  };
  
  // Start auto-scroll
  const startAutoScroll = () => {
    // Clear any existing timer first
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }
    
    // Set up a new auto-scroll timer
    autoScrollTimerRef.current = setInterval(() => {
      nextCard();
    }, 5000); // Auto-scroll every 5 seconds
  };
  
  // Initialize auto-scroll on component mount and handle cleanup
  useEffect(() => {
    // Start auto-scrolling when component mounts
    startAutoScroll();
    
    // Cleanup interval on unmount
    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, []); // Empty dependency array to run only on mount/unmount
  
  // Update active index when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isDragging || !containerRef.current) return;
      
      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      const scrollPosition = container.scrollLeft + (containerWidth / 2);
      
      const cardElements = getCardElements();
      
      // Find which card is closest to the center
      let closestCardIndex = 0;
      let closestDistance = Infinity;
      
      cardElements.forEach((card, index) => {
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const cardCenter = cardLeft + (cardWidth / 2);
        const distance = Math.abs(scrollPosition - cardCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestCardIndex = index;
        }
      });
      
      if (closestCardIndex !== activeIndex) {
        setActiveIndex(closestCardIndex);
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex, isDragging]);
  
  // Handle mouse drag start
  const handleMouseDown = (e) => {
    if (!containerRef.current) return;
    
    // Stop auto-scrolling when user interacts
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }
    
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(containerRef.current.scrollLeft);
    setClickStartTime(Date.now());
    setClickStartX(e.pageX);
    
    // Prevent text selection
    e.preventDefault();
  };
  
  // Handle mouse movement while dragging
  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const x = e.pageX;
    const walk = (startX - x) * 2; // Speed multiplier
    containerRef.current.scrollLeft = scrollLeft + walk;
  };
  
  // Handle mouse release after dragging
  const handleMouseUp = (e) => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Check if it was a click or a drag
    const clickDuration = Date.now() - clickStartTime;
    const clickDistance = Math.abs(e.pageX - clickStartX);
    const isClick = clickDuration < 200 && clickDistance < 10;
    
    if (isClick) {
      // It was a click, navigate to learn more
      window.location.href = projects[activeIndex].learnMoreLink;
    } else {
      // It was a drag, snap to nearest card
      scrollToCard(activeIndex);
    }
    
    // Restart auto-scrolling after user interaction
    startAutoScroll();
  };
  
  // Handle mouse leaving the component
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      scrollToCard(activeIndex);
      
      // Restart auto-scrolling
      startAutoScroll();
    }
  };
  
  // Handle card click

  // Handle dot indicator click
  const handleDotClick = (index) => {
    // Stop auto-scrolling temporarily
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }
    
    setActiveIndex(index);
    scrollToCard(index);
    
    // Restart auto-scrolling after user interaction
    startAutoScroll();
  };

  // Handle navigation button clicks
  const handleNavButtonClick = (direction) => {
    // Stop auto-scrolling temporarily
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }
    
    if (direction === "next") {
      nextCard();
    } else {
      prevCard();
    }
    
    // Restart auto-scrolling after user interaction
    startAutoScroll();
  };

  return (
    <Container>
      <Header>
        <Title>Featured Projects</Title>
        <Description>
          Explore our collection of electronics and engineering design projects with complete documentation
        </Description>
      </Header>

      <CarouselWrapper>
        <NavButton 
          direction="prev" 
          onClick={() => handleNavButtonClick("prev")}
          aria-label="Previous project"
        >
          ←
        </NavButton>
        
        <CarouselContainer
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {projects.map((project, index) => (
            <CardWrapper key={index}>
              <ProjectCard
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{
                  scale: activeIndex === index ? 1 : 0.9,
                  opacity: activeIndex === index ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
              
              >
                <Card>
                  <ProjectImage style={{ backgroundImage: `url(${project.image})` }}>
                    {!project.image && <span>Project Image</span>}
                  </ProjectImage>
                  <CardHeader>
                    <CardTitleWrapper>
                      <CardTitle>{project.title}</CardTitle>
                    
                    </CardTitleWrapper>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ComponentsTitle>Components:</ComponentsTitle>
                    <ComponentsWrapper>
                      {project.components.map((component, i) => (
                        <ComponentBadge key={i}>
                          {component}
                        </ComponentBadge>
                      ))}
                    </ComponentsWrapper>
                  </CardContent>
                  <CardFooter>
                    <Button as="div">
                      <BookOpen size={16} style={{ marginRight: '4px' }} /> Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </ProjectCard>
            </CardWrapper>
          ))}
        </CarouselContainer>
        
        <NavButton 
          direction="next" 
          onClick={() => handleNavButtonClick("next")}
          aria-label="Next project"
        >
          →
        </NavButton>
      </CarouselWrapper>

      <DotsContainer>
        {projects.map((_, index) => (
          <DotIndicator
            key={index}
            active={activeIndex === index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </DotsContainer>
    </Container>
  );
}