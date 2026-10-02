import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: 'How often should I bring my pet for a checkup?', a: 'We recommend annual wellness checkups for adult pets and bi-annual checkups for senior pets (aged 7+).' },
    { q: 'Do I need to fast my pet before surgery?', a: 'Yes, pets should usually fast for 8-12 hours prior to procedures requiring anesthesia. Our staff will provide detailed guidelines.' },
    { q: 'How do I request prescription refills?', a: 'You can request refills through our Pharmacy page or directly inside your Pet Owner Portal.' }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-extrabold text-center text-gray-900">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-sage-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left p-4 font-semibold text-gray-900 flex justify-between items-center hover:bg-cream-100 transition"
            >
              <span>{faq.q}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'transform rotate-180' : ''}`} />
            </button>
            {openIndex === i && (
              <div className="p-4 pt-0 text-sm text-gray-600 border-t border-gray-100 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}