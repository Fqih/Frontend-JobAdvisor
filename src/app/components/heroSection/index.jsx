"use client";
import { motion } from 'framer-motion';
import Button from "@/app/components/button";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white py-24 sm:py-32 lg:py-48 h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}></div>
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Bingung mau mulai dari mana?",
              2000, 
              "Temukan tren terbaru.",
              2000, 
              "Kembangkan bakat Anda." 
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity} 
          />
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl mb-8 mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Cari tahu lebih lanjut tentang tren pekerjaan terkini dan solusi untuk mengembangkan karir Anda.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link href="/about">
            <Button text="Learn More" type="primary" />
          </Link>
          <Link href="/course">
            <Button text="Get in Touch" type="secondary" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
