"use client"
import { motion } from 'framer-motion';

const Card = ({ title, description, link, buttonText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }} 
      className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl h-[300px]"
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <a
        href={link}
        className="bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-green-600 transition-colors duration-300"
      >
        {buttonText}
      </a>
    </motion.div>
  );
};

export default Card;