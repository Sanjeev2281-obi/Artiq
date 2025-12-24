import React from "react";
import { useState } from "react";


const faqData = [
    {
        question: "How long will it take to complete a project?",
        answer:
            "Project timelines depend on the size and complexity. Small projects usually take 3–5 days, while larger projects may take 1–2 weeks."
    },
    {
        question: "How much do you charge, and is it inclusive of materials?",
        answer:
            "Our pricing starts at ₹150 per sq. ft. Prices may vary depending on the design. This includes materials, artist wages, and travel expenses."
    },
    {
        question: "How many artists will work on a project?",
        answer:
            "The number of artists depends on the project size. Usually 1–3 artists are assigned."
    },
    {
        question: "How long will it take to complete a project?",
        answer:
            "Project timelines depend on the size and complexity. Small projects usually take 3–5 days, while larger projects may take 1–2 weeks."
    },
    {
        question: "How long will it take to complete a project?",
        answer:
            "Project timelines depend on the size and complexity. Small projects usually take 3–5 days, while larger projects may take 1–2 weeks."
    },
    {
        question: "How long will it take to complete a project?",
        answer:
            "Project timelines depend on the size and complexity. Small projects usually take 3–5 days, while larger projects may take 1–2 weeks."
    },
];
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-xl mx-auto ">

            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-gray-600">
                Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-400 mt-2 mb-8">
                Find answers to common questions about our services and process
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-blue-50 rounded-2xl  p-3 shadow-md"
                    >
                        {/* Question */}
                        <div
                            className="flex justify-between items-center cursor-pointer  py-[20px]"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="font-semibold text-gray-700 mt-2">
                                {item.question}
                            </h3>

                            <span
                                className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                    }`}
                            >
                                
                            </span>
                        </div>

                        {/* Answer */}
                        {activeIndex === index && (
                            <p className="text-gray-500 mt-3 leading-relaxed">
                                {item.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FAQ;
