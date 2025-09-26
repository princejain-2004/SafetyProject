import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is SafetyFirst?",
    answer: "SafetyFirst is an emergency preparedness platform designed to help students, teachers, and administrators stay safe and informed during disasters."
  },
  {
    question: "How do I participate in virtual drills?",
    answer: "Simply log in, navigate to the Drills tab, and select the drill you want to practice."
  },
  {
    question: "Who can access the Admin Dashboard?",
    answer: "Only users with the 'admin' role can access the Admin Dashboard to manage alerts, contacts, and educational modules."
  },
  {
    question: "What happens if I get logged out automatically?",
    answer: "For security reasons, inactive sessions are signed out automatically. You can sign back in to continue."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-700 font-medium hover:bg-gray-50"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 border-t border-gray-200 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
