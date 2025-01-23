import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'; // Importing icons from Heroicons

const FaqCard = ({ number, question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`bg-purple-600 rounded-lg shadow-md p-4 mb-6 transition-all duration-300 ${isExpanded ? 'bg-purple-700' : ''}`}>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="flex items-center">
                    <span className="font-bold text-white text-2xl mr-4">{number}</span>
                    <h2 className="text-white text-lg">{question}</h2>
                </div>
                <button
                    className="text-white focus:outline-none"
                    aria-expanded={isExpanded}
                    aria-controls="faq-content"
                >
                    {isExpanded ? (
                        <ChevronUpIcon className="h-6 w-6" />
                    ) : (
                        <ChevronDownIcon className="h-6 w-6" />
                    )}
                </button>
            </div>
            {isExpanded && (
                <div id="faq-content" className="mt-4 text-white">
                    <p>{answer}</p>
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
            answer: (
                <>
                    You can contact us via Email at <a href="mailto:ojas.nit@nith.ac.in" className="text-blue-300 underline" target="_blank" rel="noopener noreferrer">Clicking Here</a> or follow us on our Instagram page <a href="https://www.instagram.com/ojas_nit" className="text-blue-300 underline" target="_blank" rel="noopener noreferrer">Clicking Here</a>.
                </>
            )
        }
    ];

    return (
        <div className="container mx-auto p-6 mt-10">
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-8 rounded-lg shadow-lg">
                <div className='text-center mb-6'>
                    <h2 className="text-3xl text-white font-bold">Frequently Asked Questions</h2>
                </div>
                {faqData.map((faq) => (
                    <FaqCard
                        key={faq.number}
                        number={faq.number}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQSection;