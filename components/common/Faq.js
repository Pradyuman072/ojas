import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Custom Chevron Icons
const ChevronDownIcon = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        className={className}
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
        />
    </svg>
);

const ChevronUpIcon = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        className={className}
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 15l7-7 7 7" 
        />
    </svg>
);

const FaqCard = ({ number, question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div 
            style={{
                background: 'linear-gradient(to right, #9333ce, #7e22de)',
                borderRadius: '0.75rem', // Updated for rounded edges
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                marginBottom: '1rem',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
            }}
            data-aos="fade-up" // Add AOS attribute here
        >
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                }}
                onClick={toggleExpand}
                role="button"
                aria-expanded={isExpanded}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span 
                        style={{
                            backgroundColor: 'white',
                            color: '#7e22ce',
                            borderRadius: '9999px',
                            width: '2.5rem',
                            height: '2.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold'
                        }}
                    >
                        {number}
                    </span>
                    <h3 style={{ color: 'white', fontSize: '1.125rem', fontWeight: '600' }}>{question}</h3>
                </div>
            </div>

            {isExpanded && (
                <div 
                    style={{
                        padding: '1rem',
                        color: 'white',
                        backgroundColor: 'rgba(126, 34, 206, 0.5)'
                    }}
                    aria-labelledby="faq-content"
                >
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should happen only once
        });
    }, []);

    const faqData = [
        {
            number: "01",
            question: "What is Ojas?",
            answer: "Ojas is the electrical engineering team at NIT Hamirpur , dedicated to fostering innovation and collaboration among students interested in electrical  engineering."
        },
        {
            number: "02",
            question: "What activities do we conduct?",
            answer: "We organize workshops, seminars, and hands-on projects related to electrical engineering, including circuit design, robotics."
        },
        {
            number: "03",
            question: "Who can join Ojas?",
            answer: "Any student from NIT Hamirpur with an interest in electrical engineering and a desire to learn and collaborate can join Ojas."
        },
        {
            number: "04",
            question: "How can I contact Ojas?",
            answer: "You can reach us via email at ojas.nimbus@nith.ac.in or follow us on Instagram @team_ojas_nith."
        }
    ];

    return (
        <section style={{ 
            maxWidth: '56rem', 
            margin: '0 auto', 
            padding: '3rem 1rem' 
        }}>
            <div 
                style={{
                    width: '100%',
                   
                    backgroundSize: '400% 400%',
                    animation: 'gradientAnimation 15s ease infinite', // Add animation for gradient
                    borderRadius: '0.75rem',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    padding: '1.5rem'
                }}
                data-aos="fade-up" // Add AOS attribute here for the entire section
            >
                <h2 
                    style={{
                        fontSize: '2.25rem',
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        marginBottom: '2rem',
                        letterSpacing: '-0.025em'
                    }}
                >
                    Frequently Asked Questions
                </h2>
                {faqData.map((faq) => (
                    <FaqCard
                        key={faq.number}
                        number={faq.number}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
           
        </section>
    );
};

export default FAQSection;