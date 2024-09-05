"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-green-400">
            Job Advisor
          </Link>
        </div>
          {/* Tampilan Dekstop */}
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`relative text-white hover:text-green-400 ${router.pathname === '/' ? 'text-green-400' : ''} after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-green-400 after:scale-x-0 after:rounded-full after:transition-transform after:duration-300 after:transform after:origin-left hover:after:scale-x-100`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`relative text-white hover:text-green-400 ${router.pathname === '/about' ? 'text-green-400' : ''} after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-green-400 after:scale-x-0 after:rounded-full after:transition-transform after:duration-300 after:transform after:origin-left hover:after:scale-x-100`}
          >
            About
          </Link>
          <Link 
            href="/#services" 
            className={`relative text-white hover:text-green-400 ${router.pathname === '/#services' ? 'text-green-400' : ''} after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-green-400 after:scale-x-0 after:rounded-full after:transition-transform after:duration-300 after:transform after:origin-left hover:after:scale-x-100`}
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            className={`relative text-white hover:text-green-400 ${router.pathname === '/contact' ? 'text-green-400' : ''} after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-green-400 after:scale-x-0 after:rounded-full after:transition-transform after:duration-300 after:transform after:origin-left hover:after:scale-x-100`}
          >
            Contact
          </Link>
        </div>
          {/* Untuk Tampilan Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          <div className={`w-6 h-0.5 bg-white my-1 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-white my-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <div className={`w-6 h-0.5 bg-white my-1 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
        <Link 
          href="/" 
          className={`block p-4 hover:bg-gray-700 ${router.pathname === '/' ? 'bg-gray-700' : ''}`}
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className={`block p-4 hover:bg-gray-700 ${router.pathname === '/about' ? 'bg-gray-700' : ''}`}
        >
          About
        </Link>
        <Link 
          href="/#services" 
          className={`block p-4 hover:bg-gray-700`}
        >
          Services
        </Link>
        <Link 
          href="/contact" 
          className={`block p-4 hover:bg-gray-700`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
