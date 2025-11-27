import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-4 border-[#f3d1bf] w-full max-w-2xl mx-auto rounded-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 px-4 sm:px-6 md:px-8 lg:px-10"
      >
        <span className="text-base sm:text-lg md:text-xl text-[#391400] font-bold text-left">
          {question}
        </span>
        {isOpen ? (
          <ChevronDown className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#ef6d58] text-white p-2 ml-4" />
        ) : (
          <ChevronUp className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#ef6d58] text-white p-2 ml-4" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <p className="text-[#80695c] text-sm sm:text-base md:text-lg font-semibold px-4 sm:px-6 md:px-8 lg:px-10 pb-4">
          {answer}
        </p>
      </div>
    </div>
  );
}

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar