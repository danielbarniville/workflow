import React from 'react';
import { motion } from 'motion/react';
import { CyclePhase, Season } from '../types';

interface CycleCircleProps {
  day: number;
  phase: CyclePhase;
  season: Season;
}

export const CycleCircle: React.FC<CycleCircleProps> = ({ day, phase, season }) => {
  const progress = (day / 28) * 100;
  const radius = 110;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const getPhaseRange = (p: CyclePhase) => {
    switch (p) {
      case CyclePhase.MENSTRUAL: return 'Days 1-5';
      case CyclePhase.FOLLICULAR: return 'Days 6-13';
      case CyclePhase.OVULATORY: return 'Days 14-16';
      case CyclePhase.LUTEAL: return 'Days 17-28';
      default: return '';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 relative">
      <div className="relative w-72 h-72 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="144"
            cy="144"
            r={radius}
            fill="transparent"
            stroke="#F3F4F6"
            strokeWidth="12"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="144"
            cy="144"
            r={radius}
            fill="transparent"
            stroke="url(#pink-gradient)"
            strokeWidth="12"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: "easeOut" }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB6C1" />
              <stop offset="100%" stopColor="#FF69B4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Content */}
        <div className="text-center z-10">
          <motion.div
            key={day}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <span className="text-4xl font-black text-neutral-900 font-display">DAY {day}</span>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">
              {getPhaseRange(phase)}
            </span>
            <span className="text-xs font-bold text-neutral-600 uppercase tracking-tighter mt-1">
              {phase}
            </span>
            <div className="mt-4 px-4 py-1 rounded-full pink-gradient text-white text-[10px] font-bold uppercase tracking-tighter inline-block mx-auto">
              {season}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
