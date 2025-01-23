import React, { useState } from 'react';

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
            className={`
                bg-gradient-to-r from-purple-600 to-purple-700 
                rounded-lg 
                shadow-lg 
                mb-4 
                overflow-hidden 
                transition-all 
                duration-300 
                ease-in-out
            `}
        >
            <div 
                className="
                    flex 
                    justify-between 
                    items-center 
                    p-4 
                    cursor-pointer 
                    hover:bg-purple-800 
                    transition 
                    duration-200
                "
                onClick={toggleExpand}
                role="button"
                aria-expanded={isExpanded}
            >
                <div className="flex items-center space-x-4">
                    <span className="
                        bg-white 
                        text-purple-700 
                        rounded-full 
                        w-10 
                        h-10 
                        flex 
                        items-center 
                        justify-center 
                        font-bold
                    ">
                        {number}
                    </span>
                    <h3 className="text-white text-lg font-semibold">{question}</h3>
                </div>
                {isExpanded ? (
                    <ChevronUpIcon className="text-white w-6 h-6" />
                ) : (
                    <ChevronDownIcon className="text-white w-6 h-6" />
                )}
            </div>

            {isExpanded && (
                <div 
                    className="
                        px-4 
                        pb-4 
                        text-white 
                        bg-purple-800 
                        bg-opacity-50
                    "
                    aria-labelledby="faq-content"
                >
                    <p className="text-white/90">{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQSection = () => {
    const faqData = [
        {
            number: "01",
            question: "What is Ojas?",
            answer: "Ojas is the electrical engineering club at NIT, dedicated to fostering innovation and collaboration among students interested in electrical and electronics engineering."
        },
        {
            number: "02",
            question: "What activities do we conduct?",
            answer: "We organize workshops, seminars, and hands-on projects related to electrical engineering, including circuit design, robotics, and renewable energy solutions."
        },
        {
            number: "03",
            question: "Who can join Ojas?",
            answer: "Any student from NIT with an interest in electrical engineering and a desire to learn and collaborate can join Ojas."
        },
        {
            number: "04",
            question: "How can I contact Ojas?",
            answer: "You can reach us via email at ojas.nit@nith.ac.in or follow us on Instagram @ojas_nit."
        }
    ];

    return (
        <section className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl shadow-2xl p-6 md:p-10">
                <h2 className="
                    text-3xl 
                    md:text-4xl 
                    text-center 
                    text-white 
                    font-bold 
                    mb-8 
                    tracking-tight
                ">
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