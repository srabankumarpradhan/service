'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const faqs = [
  {
    question: 'What will be my maintenance fee per month?',
    answer: `It depends on your project type. On average, basic hosting + updates range from ₹399 to ₹899 per month. This covers server cost, security patches, updates, and emergency fixes — all managed by us, so you can chill.`
  },
  {
    question: 'Is maintenance service available at you (affordable and best)?',
    answer: `Yes, 100%. We provide one of the most affordable and personal maintenance services out there. You won't deal with ticket systems or bots — it's direct support with actual response time. Startup-friendly and scalable.`
  },
  {
    question: 'Why different plans for startups and other fields?',
    answer: `Startups often need flexibility and a budget-friendly roadmap. So we minimize upfront cost, stretch support longer, and focus more on product-market fit. Other businesses may require advanced tools and integrations from Day 1, so the strategy and resources differ.`
  }
];

export default function BasicUnderstanding() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="basic" className="bg-white py-20 px-6 md:px-20 text-gray-800">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full rounded-xl border-4 border-dashed border-blue-400 overflow-hidden"
        >
          <Image
            src="/company.jpg" // 👈 9:16 image here
            alt="Understanding Visual"
            width={1000}
            height={1066}
            className="rounded-xl w-full h-auto object-cover aspect-[16/16]"
          />
        </motion.div>

        {/* Right: Content */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            How will it work?
          </h2>
          <ol className="list-decimal ml-5 text-base leading-relaxed text-gray-700 space-y-4">
            <li>
              We start with a free consultation to understand your goals, market, and current situation.
            </li>
            <li>
              We prepare a custom roadmap: design, development, deployment — all tailored.
            </li>
            <li>
              You pay a one-time development fee (build cost), which depends on the complexity of the app/site.
            </li>
            <li>
              After launch, your monthly cost is just for server + maintenance — we don’t charge random service fees.
            </li>
            <li>
              You get full transparency, documentation, and long-term support options.
            </li>
          </ol>

          <div className="mt-6 text-sm text-blue-600 italic">
            We focus on startup comfort: build fast, stay lean, scale smart.
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-blue-700 mb-6">Common Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-5 py-4 bg-gray-100 hover:bg-blue-50 transition text-sm font-medium text-gray-800 flex justify-between items-center"
              >
                {faq.question}
                <span className="text-blue-600 text-xl">{openFAQ === idx ? '-' : '+'}</span>
              </button>

              <AnimatePresence>
                {openFAQ === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 py-4 text-sm text-gray-600 bg-white"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
