"use client";
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Apa itu rekomendasi kursus?",
      answer: "Rekomendasi kursus adalah saran yang diberikan berdasarkan role atau pekerjaan Anda untuk membantu meningkatkan keterampilan yang relevan.",
    },
    {
      question: "Bagaimana cara mendapatkan rekomendasi kursus?",
      answer: "Masukkan nama Anda, jabatan pekerjaan saat ini, dan role Anda ke dalam form, lalu klik tombol 'Get Recommendation'.",
    },
    {
      question: "Apakah perlu membayar untuk mendapatkan rekomendasi?",
      answer: "Tidak, rekomendasi kursus yang diberikan bersifat gratis.",
    },
    {
      question: "Bisakah saya mendapatkan lebih dari satu rekomendasi?",
      answer: "Ya, Anda dapat mengisi form kembali untuk mendapatkan rekomendasi tambahan.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-8 px-4">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-600 pb-4">
              <button
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
                className="w-full text-left text-lg font-semibold mb-2 flex justify-between items-center"
              >
                {item.question}
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
                style={{ maxHeight: openIndex === index ? '200px' : '0' }}
              >
                <p className="text-gray-300 mt-2">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;