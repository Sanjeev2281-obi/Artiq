import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "How long does a project or custom artwork take?",
    answer: "Timelines vary based on complexity; we'll provide an estimated completion time once we understand your needs."
  },
  {
    question: "How much do you charge for murals or sculptures?",
    answer: "Our pricing depends on the size, design complexity, materials used, finishing requirements, and project location. Each artwork is custom-designed, so we provide a detailed quotation after understanding your specific requirements."
  },
  {
    question: "What materials do you provide for workshops, and what do I need to bring?",
    answer: "We provide all core materials for workshops; any special requests can be discussed in advance."
  },
  {
    question: "Can I commission a custom artwork?",
    answer: "Absolutely! We specialize in custom pieces—reach out to discuss your vision, and we'll create something unique."
  },
  {
    question: "How do I sign up for a workshop or class?",
    answer: "You can register directly on our website or contact us via email or phone for assistance."
  },
  {
    question: "What age groups are your workshops suitable for?",
    answer: "We offer sessions for both children and adults—check the schedule for specific timings."
  },
  {
    question: "Do you offer private sessions or group bookings?",
    answer: "We offer sessions for both children and adults—check the schedule for specific timings."
  },
  {
    question: "What age groups are your workshops suitable for?",
    answer: "Yes, we offer private sessions and group bookings—please contact us to tailor the experience to your needs."
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" px-6 md:px-16 py-24 font-[Outfit]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
            Got Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 leading-relaxed mt-4 max-w-xl">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-start gap-6 py-6 text-left cursor-pointer group bg-transparent border-none"
              >
                <div className="flex items-start gap-4">
                  <span className="text-sm text-gray-300 font-light mt-0.5 flex-shrink-0 w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base md:text-lg font-medium text-gray-800 leading-snug group-hover:text-gray-500 transition-colors duration-300">
                    {item.question}
                  </span>
                </div>

                {/* Icon */}
                <motion.span
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="mt-1 flex-shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <line x1="8" y1="0" x2="8" y2="16" stroke="#374151" strokeWidth="1.5" />
                    <line x1="0" y1="8" x2="16" y2="8" stroke="#374151" strokeWidth="1.5" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 leading-relaxed pb-6 pl-10 max-w-2xl">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;