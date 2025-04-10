"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ExternalLink, BookOpen } from "lucide-react"
import Link from "next/link"
import styled from "styled-components"

// Styled components with dark theme
const Container = styled.div`
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: 1200px;
  background-color: #121212;
  color: #e0e0e0;
`

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #ffffff;
`

const Description = styled.p`
  color: #a0a0a0;
  max-width: 42rem;
  margin: 0 auto;
  font-size: 1.125rem;
`

const ProjectImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a0a0a0;
`

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 2rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

const CardWrapper = styled.div`
  min-width: 100%;
  padding: 0 1rem;
  scroll-snap-align: center;
  
  @media (min-width: 640px) {
    min-width: 80%;
  }
  
  @media (min-width: 768px) {
    min-width: 60%;
  }
  
  @media (min-width: 1024px) {
    min-width: 40%;
  }
`

const ProjectCard = styled(motion.div)`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
  }
`

const Card = styled.div`
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  border-radius: 0.5rem;
  border: 1px solid #333333;
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
  color: #ffffff;
`

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  ${(props) => {
    switch (props.difficulty) {
      case "Beginner":
        return `background-color: #1e3a2f; color: #4ade80;`
      case "Intermediate":
        return `background-color: #1e2a4a; color: #60a5fa;`
      case "Advanced":
        return `background-color: #2e1a47; color: #c084fc;`
      default:
        return `background-color: #2a2a2a; color: #d1d5db;`
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
  background-color: #2a2a2a;
  border: 1px solid #444444;
  color: #d1d5db;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`

const CardDescription = styled.p`
  margin-top: 0.5rem;
  color: #a0a0a0;
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
  color: #d1d5db;
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
  border-top: 1px solid #333333;
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
  
  ${(props) =>
    props.variant === "outline"
      ? `
    background-color: transparent;
    border: 1px solid #444444;
    color: #d1d5db;
    
    &:hover {
      background-color: #2a2a2a;
    }
  `
      : `
    background-color: #3b82f6;
    color: white;
    border: none;
    
    &:hover {
      background-color: #2563eb;
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
  background-color: ${(props) => (props.active ? "#3b82f6" : "#4b5563")};
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
`

export default function DarkIMC() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const projects = [
    {
      title: "Track Vision",
      description: "Traffic light signal detector during fog using LoRa Transmission.",
      image: "/images/trackvision.png",
      difficulty: "Beginner",
      components: ["Jumper wires", "Arduino", "Traffic lights", "LoRa Module"],
      docLink: "/projects/trackvision",
      learnMoreLink: "/projects/trackvision",
    },
    {
      title: "FIREVOLT",
      description: "In this project the electricity is generated by burning the agriculture waste.",
      image: "/images/firevolt.png",
      difficulty: "Intermediate",
      components: ["ESP32", "BOOST Converter", "Motor driver", "TEG sensors", "DC motors"],
      docLink: "/projects/firevolt",
      learnMoreLink: "/projects/firevolt",
    },
    {
      title: "SenseLink",
      description: "A Plug and Use device for all the different types of sensors.",
      image: "/images/senselink.jpg",
      difficulty: "Intermediate",
      components: ["Microcontroller", "AI Firmware", "Cloud Integration"],
      docLink: "/projects/senselink",
      learnMoreLink: "/projects/senselink",
    },
    {
      title: "Bhaskar",
      description:
        "In this project we rotate the sun tracker without electricity with the help of expansion of parafin wax.",
      image: "/images/bhaskar.png",
      difficulty: "Advanced",
      components: ["Parabolic mirror", "Parafin wax", "Solar Panel"],
      docLink: "/projects/bhaskar",
      learnMoreLink: "/projects/bhaskar",
    },
    {
      title: "Illumitrace",
      description: "A device connecting web designing and real world prototyping.",
      image: "/images/illumitrace.jpeg",
      difficulty: "Advanced",
      components: ["Microcontroller", "LED Matrix", "PCB", "Web Interface"],
      docLink: "/projects/illumitrace",
      learnMoreLink: "/projects/illumitrace",
    },
  ]

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && containerRef.current) {
        setActiveIndex((prev) => (prev + 1) % projects.length)
        const cardWidth = containerRef.current.scrollWidth / projects.length
        containerRef.current.scrollTo({
          left: ((activeIndex + 1) % projects.length) * cardWidth,
          behavior: "smooth",
        })
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, isDragging, projects.length])

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (containerRef.current) {
      const cardWidth = containerRef.current.scrollWidth / projects.length
      const newIndex = Math.round(containerRef.current.scrollLeft / cardWidth)
      setActiveIndex(newIndex)
      containerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <Container>
      <Header>
        <Title>Featured Projects</Title>
        <Description>
          Explore our collection of electronics and engineering design projects with complete documentation
        </Description>
      </Header>

      <CarouselContainer
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
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
                    <Badge difficulty={project.difficulty}>{project.difficulty}</Badge>
                  </CardTitleWrapper>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ComponentsTitle>Components:</ComponentsTitle>
                  <ComponentsWrapper>
                    {project.components.map((component, i) => (
                      <ComponentBadge key={i}>{component}</ComponentBadge>
                    ))}
                  </ComponentsWrapper>
                </CardContent>
                <CardFooter>
                  <Link href={project.docLink} passHref>
                    <Button as="a" variant="outline">
                      <ExternalLink size={16} style={{ marginRight: "4px" }} /> Documentation
                    </Button>
                  </Link>
                  <Link href={project.learnMoreLink} passHref>
                    <Button as="a">
                      <BookOpen size={16} style={{ marginRight: "4px" }} /> Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </ProjectCard>
          </CardWrapper>
        ))}
      </CarouselContainer>

      <DotsContainer>
        {projects.map((_, index) => (
          <DotIndicator
            key={index}
            active={activeIndex === index}
            onClick={() => {
              setActiveIndex(index)
              if (containerRef.current) {
                const cardWidth = containerRef.current.scrollWidth / projects.length
                containerRef.current.scrollTo({
                  left: index * cardWidth,
                  behavior: "smooth",
                })
              }
            }}
          />
        ))}
      </DotsContainer>
    </Container>
  )
}
