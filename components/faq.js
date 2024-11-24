'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How secure is my financial data?',
    answer:
      'We take security very seriously. All your data is encrypted and stored securely. We use bank-level security measures to protect your information.',
  },
  {
    question: 'Can I integrate my email for transaction tracking?',
    answer:
      'Yes, you can securely connect your email accounts to automatically import and categorize transactions from your inbox, keeping your finances up-to-date with minimal effort.',
  },
  {
    question: 'Is there a mobile app available?',
    answer:
      'Yes, we have mobile apps for both iOS and Android devices, allowing you to manage your finances on the go.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer:
      "You can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your account until the end of your current billing period.",
  },
];

export default function FAQ() {
  // const [activeIndex, setActiveIndex] = (useState < number) | (null > null);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#10B981]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#10B981]" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white px-4 pb-4 rounded-b-lg"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
