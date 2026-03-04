import React from 'react';
import { motion } from 'motion/react';

export const Logo: React.FC = () => {
  return (
    <div className="w-10 h-10 flex items-center justify-center">
      <svg
        viewBox="0 0 40 40"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hollow Circle */}
        <circle
          cx="20"
          cy="20"
          r="15"
          stroke="#FF69B4"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Pink Tie - Hanging from the top edge (y=5) */}
        <motion.g
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "20px 5px" }}
        >
          {/* Knot - Thicker */}
          <path
            d="M15 5H25L23 10H17L15 5Z"
            fill="#FF69B4"
          />
          {/* Tie Body - Thicker and Longer */}
          <path
            d="M17 10H23L25.5 23L20 29L14.5 23L17 10Z"
            fill="#FF69B4"
          />
        </motion.g>
      </svg>
    </div>
  );
};
