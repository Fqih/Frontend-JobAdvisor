"use client"
const Button = ({ text, isActive, onClick, className, type = 'primary' }) => {
  const baseClasses = `px-6 py-3 rounded-full font-semibold transition-transform duration-300 ease-in-out transform focus:outline-none focus:ring-2 ${
    isActive ? 'scale-105 shadow-lg' : ''
  }`;

  const typeClasses = type === 'primary'
    ? 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500'
    : 'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white focus:ring-green-500';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${typeClasses} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;