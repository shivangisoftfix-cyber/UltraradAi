import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // icons

const faqs = [
  {
    question: "What is Ultracad AI and how does it help radiologists?",
    answer:
      "Ultrarad AI is an intelligent radiology assistant designed to automate Doppler interpretation and generate structured ultrasound reports. It helps reduce reporting time, eliminates typist dependency, and brings consistency and standardization to your workflow..."
  },
  {
    question: "What kinds of studies or scans does Ultracad AI support?",
    answer: "Currently, Ultrarad AI supports: Obstetric Doppler Studies (e.g., UA, MCA, CPR, DV), Normal Ultrasound Reports (e.g., liver, kidneys, uterus, etc.), Differential Diagnosis Generator (via TAARA engine). sNew modules like vascular Doppler, thyroid, breast, and MSK ultrasound are in development...."
  },
  {
    question: "Do I need to install any software?",
    answer: "Currently, Ultrarad AI supports: Obstetric Doppler Studies (e.g., UA, MCA, CPR, DV), Normal Ultrasound Reports (e.g., liver, kidneys, uterus, etc.), Differential Diagnosis Generator (via TAARA engine). New modules like vascular Doppler, thyroid, breast, and MSK ultrasound are in development...."
  },
  {
    question: "Is Ultracad AI compliant with medical regulations?",
    answer: "Yes, Ultrarad AI is built with PCPNDT guidelines, HIPAA-inspired data safety, and clinical reporting standards in mind. Your data is encrypted and securely handled...."
  }
];

const Frequnce = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-400">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4 px-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 cursor-pointer transition-all"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold flex justify-between items-center">
              {faq.question}
              <span className="text-blue-500 text-xl">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </h3>

            {activeIndex === index && (
              <p className="text-gray-600 mt-2 transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Frequnce;
