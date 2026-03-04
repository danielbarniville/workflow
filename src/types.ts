export enum CyclePhase {
  MENSTRUAL = 'Menstrual Phase',
  FOLLICULAR = 'Follicular Phase',
  OVULATORY = 'Ovulatory Phase',
  LUTEAL = 'Luteal Phase',
}

export enum Season {
  WINTER = 'Winter',
  SPRING = 'Spring',
  SUMMER = 'Summer',
  AUTUMN = 'Autumn',
}

export enum ChronicCondition {
  NONE = 'None',
  ENDOMETRIOSIS = 'Endometriosis',
  PCOS = 'PCOS',
  PMDD = 'PMDD',
}

export interface PhaseData {
  phase: CyclePhase;
  season: Season;
  logic: string;
  researchInsight?: string;
  dailyNuances?: Record<number, string>;
  physical: string[];
  emotional: string[];
  workImplications: {
    productivity: string;
    action?: string;
    physicalComfort?: string;
    communication?: string;
    interaction?: string;
    visibility?: string;
    performance?: string;
    teamwork?: string;
    organization?: string;
    stressManagement?: string;
  };
}

export interface ChronicImpact {
  condition: ChronicCondition;
  phase: CyclePhase;
  description: string;
  workOverlay: string;
}
