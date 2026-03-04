import React, { useState, useMemo } from 'react';
import { PhoneFrame } from './components/PhoneFrame';
import { CalendarPicker } from './components/CalendarPicker';
import { CycleCircle } from './components/CycleCircle';
import { InfoCards } from './components/InfoCards';
import { Logo } from './components/Logo';
import { PHASES, getPhaseForDay, CHRONIC_IMPACTS } from './constants';
import { ChronicCondition } from './types';
import { Settings, Info } from 'lucide-react';

export default function App() {
  const [selectedDay, setSelectedDay] = useState(4);
  const [condition, setCondition] = useState<ChronicCondition>(ChronicCondition.NONE);
  const [showSettings, setShowSettings] = useState(false);

  const currentPhase = useMemo(() => getPhaseForDay(selectedDay), [selectedDay]);
  const phaseData = useMemo(() => PHASES[currentPhase], [currentPhase]);
  
  const chronicImpact = useMemo(() => {
    if (condition === ChronicCondition.NONE) return undefined;
    return CHRONIC_IMPACTS.find(impact => 
      impact.condition === condition && impact.phase === currentPhase
    );
  }, [condition, currentPhase]);

  return (
    <PhoneFrame>
      {/* Header */}
      <div className="px-6 flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Logo />
          <h1 className="font-display font-bold text-lg">Workflow</h1>
        </div>
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 hover:bg-neutral-50 rounded-full transition-colors"
        >
          <Settings className="w-5 h-5 text-neutral-400" />
        </button>
      </div>

      {/* Settings Overlay */}
      {showSettings && (
        <div className="px-6 py-4 bg-neutral-50 border-y border-neutral-100 mb-4">
          <div className="mb-4">
            <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Info className="w-3 h-3" /> Our Mission
            </h4>
            <p className="text-[11px] text-neutral-600 leading-relaxed italic">
              "To empower professionals by aligning biological rhythms with career excellence, ensuring that reproductive health is leveraged as a unique driver of workplace performance and equity."
            </p>
          </div>
          <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">
            Chronic Condition Support
          </label>
          <div className="flex flex-wrap gap-2">
            {Object.values(ChronicCondition).map((c) => (
              <button
                key={c}
                onClick={() => setCondition(c)}
                className={`
                  px-3 py-1.5 rounded-full text-xs font-bold transition-all
                  ${condition === c 
                    ? 'pink-gradient text-white' 
                    : 'bg-white text-neutral-600 border border-neutral-200'}
                `}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Calendar Picker */}
      <CalendarPicker 
        selectedDay={selectedDay} 
        onSelectDay={setSelectedDay} 
      />

      {/* Main Visualization */}
      <CycleCircle 
        day={selectedDay} 
        phase={phaseData.phase} 
        season={phaseData.season} 
      />

      {/* Info Cards */}
      <InfoCards 
        day={selectedDay}
        data={phaseData} 
        chronicImpact={chronicImpact} 
      />

      {/* Footer Info */}
      <div className="px-6 pb-24">
        <div className="bg-indigo-50/50 rounded-2xl p-4 flex gap-3">
          <Info className="w-5 h-5 text-indigo-400 shrink-0" />
          <p className="text-[11px] text-indigo-700 leading-relaxed">
            This tool is designed to optimize professional performance by aligning biological cycles with workplace strategy. 
            Understanding these patterns is a competitive advantage that fosters both wellness and career mastery.
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}
