import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100 p-4">
      <div className="relative">
        {/* Side Buttons - Left (Volume) */}
        <div className="absolute -left-[10px] top-32 w-[3px] h-8 bg-neutral-800 rounded-l-sm"></div>
        <div className="absolute -left-[10px] top-44 w-[3px] h-14 bg-neutral-800 rounded-l-sm"></div>
        <div className="absolute -left-[10px] top-60 w-[3px] h-14 bg-neutral-800 rounded-l-sm"></div>
        
        {/* Side Button - Right (Power) */}
        <div className="absolute -right-[10px] top-48 w-[3px] h-24 bg-neutral-800 rounded-r-sm"></div>

        {/* Main Phone Body */}
        <div className="relative w-[375px] h-[812px] bg-white rounded-[54px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[10px] border-neutral-900 overflow-hidden flex flex-col ring-1 ring-neutral-800/50">
          
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[32px] bg-black rounded-[20px] z-50 flex items-center justify-between px-4">
            <div className="w-2 h-2 rounded-full bg-neutral-800"></div>
            <div className="w-1 h-1 rounded-full bg-blue-500/20"></div>
          </div>
          
        {/* Content Area */}
        <div className="flex-1 flex flex-col pt-12 overflow-y-auto">
          {children}
        </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-neutral-900/10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
