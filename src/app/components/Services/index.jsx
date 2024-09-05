"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/app/components/Card';

const servicesData = [
  {
    title: "Lihat Trend",
    description: "Dapatkan wawasan terbaru tentang tren industri dan pasar yang relevan dengan kebutuhan Anda.",
    link: "#trend",
    buttonText: "Learn More",
  },
  {
    title: "Rekomendasi Kursus",
    description: "Temukan kursus dan pelatihan yang sesuai untuk meningkatkan keterampilan dan pengetahuan Anda.",
    link: "/course",
    buttonText: "Learn More",
  },
  {
    title: "Konsultasi Gratis",
    description: "Jadwalkan sesi konsultasi gratis untuk membahas bagaimana kami dapat membantu bisnis Anda berkembang.",
    link: "/contact",
    buttonText: "Learn More",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white" id="services">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-sm"
            >
              <Card
                title={service.title}
                description={service.description}
                link={service.link}
                buttonText={service.buttonText}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
