import React from "react";
import { useState } from "react";


const faqData = [
    {
        question: "How long does a project or custom artwork take?",
        answer:
            "Timelines vary based on complexity; we’ll provide an estimated completion time once we understand your needs."
    },
    {
        question: "How much do you charge for murals or sculptures?",
        answer:
            "Our pricing depends on the size, design complexity, materials used, finishing requirements, and project location. Each artwork is custom-designed, so we provide a detailed quotation after understanding your specific requirements."
    },
    {
        question: "What materials do you provide for workshops, and what do I need to bring?",
        answer:
            "We provide all core materials for workshops; any special requests can be discussed in advance."
    },
    {
        question: "Can I commission a custom artwork?",
        answer:
            "Absolutely! We specialize in custom pieces—reach out to discuss your vision, and we’ll create something unique."
    },
    {
        question: "How do I sign up for a workshop or class?",
        answer:
            "You can register directly on our website or contact us via email or phone for assistance."
    },
    {
        question: "What age groups are your workshops suitable for?",
        answer:
            "We offer sessions for both children and adults—check the schedule for specific timings."

    },
    {
        question: "Do you offer private sessions or group bookings?",
        answer:
            "We offer sessions for both children and adults—check the schedule for specific timings."

    },
    {
        question: "What age groups are your workshops suitable for?",
        answer:
            "Yes, we offer private sessions and group bookings—please contact us to tailor the experience to your needs."

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
                            className="flex justify-between items-center cursor-pointer  py-5"
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
