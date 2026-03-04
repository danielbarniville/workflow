import React from 'react';
import { motion } from 'motion/react';

interface CalendarPickerProps {
  selectedDay: number;
  onSelectDay: (day: number) => void;
}

export const CalendarPicker: React.FC<CalendarPickerProps> = ({ selectedDay, onSelectDay }) => {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      const selectedElement = scrollRef.current.querySelector(`[data-day="${selectedDay}"]`);
      if (selectedElement) {
        selectedElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [selectedDay]);

  const getDayName = (day: number) => {
    const names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return names[(day - 1) % 7];
  };

  return (
    <div className="py-4 border-b border-neutral-100">
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 px-6 touch-pan-x"
      >
        {days.map((day) => (
          <button
            key={day}
            data-day={day}
            onClick={() => onSelectDay(day)}
            className="flex flex-col items-center min-w-[40px] transition-all"
          >
            <span className="text-[10px] uppercase font-semibold text-neutral-400 mb-1">
              {getDayName(day)}
            </span>
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
              ${selectedDay === day 
                ? 'pink-gradient text-white shadow-lg shadow-pink-200' 
                : 'text-neutral-900 hover:bg-neutral-50'}
            `}>
              {day}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
