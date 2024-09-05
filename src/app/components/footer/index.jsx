"use client"
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Links */}
        <div className="mb-4 md:mb-0">
          <ul className="flex flex-wrap space-x-4">
            <li>
              <Link href="/" className="hover:text-green-400">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-400">About</Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-green-400">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2 text-center">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://github.com/lutfiardi26/AIC-KLM" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-400 text-center py-4 mt-7 rounded-lg">
        <p>&copy; {new Date().getFullYear()} Job Adviser. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
