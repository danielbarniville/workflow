import { CyclePhase, Season, PhaseData, ChronicCondition, ChronicImpact } from './types';

export const PHASES: Record<CyclePhase, PhaseData> = {
  [CyclePhase.MENSTRUAL]: {
    phase: CyclePhase.MENSTRUAL,
    season: Season.WINTER,
    logic: 'Strategic Reflection & Insight',
    researchInsight: 'Studies show that leveraging the "Winter" phase for strategic review can lead to more robust long-term planning and reduced burnout.',
    dailyNuances: {
      1: 'A day for deep focus. While physical energy is lower, your ability to see the big picture is heightened.',
      2: 'Prioritize comfort to maximize your cognitive output. A great day for remote, deep-work sessions.',
      3: 'Energy begins to stabilize. Excellent for reviewing complex data or strategic planning.',
      4: 'Mental clarity is rising. Use this for high-level decision making and solo projects.',
      5: 'Transitioning into a more active state. A perfect time to start outlining new goals.'
    },
    physical: ['Systemic inflammation peak', 'Uterine contractions', 'Lowered basal temperature', 'Iron depletion risk'],
    emotional: ['Reflective state', 'Lowered social threshold', 'Heightened intuitive processing'],
    workImplications: {
      productivity: 'Leverage your heightened intuitive and analytical skills. Ideal for strategic planning, auditing, and high-level reviews.',
      physicalComfort: 'Optimizing your environment (heat, hydration, comfort) allows you to maintain high-level cognitive performance.',
      communication: 'A great time for solo deep-work. Focus on quality over quantity in interactions to protect your focus.',
    },
  },
  [CyclePhase.FOLLICULAR]: {
    phase: CyclePhase.FOLLICULAR,
    season: Season.SPRING,
    logic: 'Innovation & Creative Momentum',
    researchInsight: 'Rising estrogen levels are linked to enhanced verbal memory and social cognition, making this a peak learning window.',
    dailyNuances: {
      6: 'Mental fog clears completely. You are primed for new challenges and learning.',
      8: 'Your verbal fluency is peaking. Excellent for high-impact meetings and presentations.',
      10: 'Drive and focus are at an all-time high. Tackle your most ambitious projects today.',
      12: 'Peak creativity. Your brain is a sponge for new information and complex logic.'
    },
    physical: ['Rising Estrogen', 'Increased insulin sensitivity', 'Enhanced neuroplasticity'],
    emotional: ['High motivation', 'Verbal fluency peak', 'Risk-taking readiness'],
    workImplications: {
      productivity: 'Your most adaptable and fast-learning phase. Perfect for intensive sprints and mastering new systems.',
      action: "Go after the 'Big Rock' projects. Your cognitive endurance is exceptional right now.",
      interaction: 'You are a natural collaborator. Use this energy for brainstorming and networking.',
    },
  },
  [CyclePhase.OVULATORY]: {
    phase: CyclePhase.OVULATORY,
    season: Season.SUMMER,
    logic: 'Peak Influence & Leadership',
    researchInsight: 'Hormonal peaks during ovulation correlate with maximum social confidence and persuasive ability.',
    dailyNuances: {
      14: 'Maximum charisma and social energy. The ultimate day for high-stakes visibility.',
      15: 'Your confidence is infectious. A powerful time for leading teams and closing deals.',
      16: 'High energy persists. Use this to maintain momentum on collaborative efforts.'
    },
    physical: ['Testosterone & Estrogen peak', 'Maximum physical strength', 'High metabolic rate'],
    emotional: ['Peak confidence', 'Extroverted energy', 'High empathy & social reading'],
    workImplications: {
      productivity: 'You are at your most persuasive. Ideal for leadership, public speaking, and high-stakes negotiations.',
      interaction: 'Your ability to read a room is unmatched. Perfect for pitches, sales, and board meetings.',
      performance: 'A high-visibility window. Lead workshops, give presentations, and step into the spotlight.',
      teamwork: 'Ideal for facilitating workshops and leading collective efforts.',
    },
  },
  [CyclePhase.LUTEAL]: {
    phase: CyclePhase.LUTEAL,
    season: Season.AUTUMN,
    logic: 'Precision, Quality & Mastery',
    researchInsight: 'The shift to progesterone increases attention to detail, making this the "Quality Control" phase of the cycle.',
    dailyNuances: {
      17: 'Energy shifts inward, sharpening your focus on detail and execution.',
      20: 'The "Window of Mastery." Your attention to detail is a superpower for deep, focused work.',
      23: 'Metabolic needs rise; fueling your body well supports your continued high performance.',
      25: 'Focus on clear boundaries to protect your high-quality output. Avoid unnecessary noise.',
      28: 'The "Completion Day." Excellent for tying up loose ends and preparing for a fresh start.'
    },
    physical: ['Progesterone rise', 'Increased cortisol sensitivity', 'Metabolic shift', 'Water retention'],
    emotional: ['Detail-oriented focus', 'Lowered stress resilience', 'Need for environmental control'],
    workImplications: {
      productivity: 'The ultimate "Finishing" phase. You are biologically primed for quality control, proofreading, and finalizing complex contracts.',
      organization: 'Your need for structure is an asset. Use it to organize workflows and administrative close-outs.',
      communication: 'Clear, direct communication is your strength. Set boundaries to ensure your best work is delivered.',
      stressManagement: 'Heightened sensitivity to workplace stressors. Prioritize task lists and delegate where possible.',
    },
  },
};

export const CHRONIC_IMPACTS: ChronicImpact[] = [
  {
    condition: ChronicCondition.ENDOMETRIOSIS,
    phase: CyclePhase.MENSTRUAL,
    description: "Research shows that managing pain effectively allows for continued high-level contribution. Understanding these systemic shifts is key to sustained performance.",
    workOverlay: "Strategic flexibility: Remote work and asynchronous tasks are powerful tools for maintaining your high standards while managing physical comfort.",
  },
  {
    condition: ChronicCondition.PMDD,
    phase: CyclePhase.LUTEAL,
    description: "PMDD is a neurobiological shift that can be managed through strategic task-loading. Your precision and detail-oriented skills remain a major asset.",
    workOverlay: "Focused output: Prioritizing 'Quiet Zone' work ensures your high-quality execution continues without unnecessary external stressors.",
  },
  {
    condition: ChronicCondition.PCOS,
    phase: CyclePhase.FOLLICULAR,
    description: "Energy flexibility is your advantage. While patterns may vary, your capacity for high-impact work remains constant.",
    workOverlay: "Adaptive workflow: A task-based approach allows you to capitalize on your peak energy windows for maximum professional impact.",
  },
];

export const getPhaseForDay = (day: number): CyclePhase => {
  if (day >= 1 && day <= 5) return CyclePhase.MENSTRUAL;
  if (day >= 6 && day <= 13) return CyclePhase.FOLLICULAR;
  if (day >= 14 && day <= 16) return CyclePhase.OVULATORY;
  return CyclePhase.LUTEAL;
};
