"use client"
import React from 'react';
import Button from '@/app/components/button';

const YearSelector = ({ selectedYear, onYearChange, years }) => {
  return (
    <div className="mb-6 flex justify-center space-x-2 sm:space-x-4 flex-wrap">
      {years.map(y => (
        <Button
          key={y}
          text={y}
          isActive={selectedYear === y}
          onClick={() => onYearChange(y)}
          className="text-xs sm:text-sm py-2 px-3 sm:py-2 sm:px-4"
        />
      ))}
    </div>
  );
};

export default YearSelector;
