import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhaseData, ChronicImpact, ChronicCondition } from '../types';
import { Briefcase, Heart, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';

interface InfoCardsProps {
  day: number;
  data: PhaseData;
  chronicImpact?: ChronicImpact;
}

export const InfoCards: React.FC<InfoCardsProps> = ({ day, data, chronicImpact }) => {
  const dailyNuance = data.dailyNuances?.[day] || 
    (day > 1 ? `Continuing the ${data.season} progression. Focus remains on ${data.logic.toLowerCase()}.` : null);

  return (
    <div className="px-6 pb-10 space-y-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={day}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-6"
        >
          {/* Daily Nuance Card */}
          {dailyNuance && (
            <div className="bg-pink-50/30 rounded-3xl p-5 border border-pink-100/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">Today's Nuance</span>
              </div>
              <p className="text-neutral-800 text-sm font-medium leading-relaxed italic">
                "{dailyNuance}"
              </p>
            </div>
          )}

          {/* Focus Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-pink-50 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-pink-500" />
              </div>
              <h3 className="font-bold text-neutral-900 font-display">Focus</h3>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {data.logic}
            </p>
            {data.researchInsight && (
              <div className="mt-4 pt-4 border-t border-neutral-50">
                <p className="text-[11px] text-neutral-400 italic leading-relaxed">
                  <span className="font-bold uppercase tracking-tighter mr-1">Research Insight:</span>
                  {data.researchInsight}
                </p>
              </div>
            )}
          </div>

          {/* Work Implications Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-indigo-500" />
              </div>
              <h3 className="font-bold text-neutral-900 font-display">Work Implications</h3>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Productivity</span>
                <p className="text-neutral-700 text-sm">{data.workImplications.productivity}</p>
              </div>
              
              {data.workImplications.action && (
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Action</span>
                  <p className="text-neutral-700 text-sm">{data.workImplications.action}</p>
                </div>
              )}

              {data.workImplications.interaction && (
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Interaction</span>
                  <p className="text-neutral-700 text-sm">{data.workImplications.interaction}</p>
                </div>
              )}

              {data.workImplications.physicalComfort && (
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Physical Comfort</span>
                  <p className="text-neutral-700 text-sm">{data.workImplications.physicalComfort}</p>
                </div>
              )}
            </div>
          </div>

          {/* Chronic Alert Card */}
          {chronicImpact && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-red-50 rounded-3xl p-6 border border-red-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-bold text-red-900 font-display">Chronic Impact: {chronicImpact.condition}</h3>
              </div>
              <p className="text-red-800 text-sm leading-relaxed mb-4">
                {chronicImpact.description}
              </p>
              <div className="bg-white/50 rounded-2xl p-4">
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block mb-1">Overlay Recommendation</span>
                <p className="text-red-900 text-sm font-medium italic">
                  "{chronicImpact.workOverlay}"
                </p>
              </div>
            </motion.div>
          )}

          {/* Physical & Emotional Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-50 rounded-3xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-4 h-4 text-pink-400" />
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Physical</span>
              </div>
              <ul className="space-y-2">
                {data.physical.map((item, i) => (
                  <li key={i} className="text-xs text-neutral-600 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-pink-200" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-50 rounded-3xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Emotional</span>
              </div>
              <ul className="space-y-2">
                {data.emotional.map((item, i) => (
                  <li key={i} className="text-xs text-neutral-600 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-indigo-200" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
