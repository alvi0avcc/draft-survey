import type { Cargo } from './cargo';
import type { DraftMarks } from './draftMarks';
import type { Terminal } from './terminal';
import type { Vessel } from './vessel';
import type { WaterDensityReadings } from './waterDensity';

export interface DraftSurvey {
  order?: Order[];
  survey?: Survey[];
}

export interface Order {
  orderRef?: string;
  orderType?: 'loading' | 'unloading';
  cargo?: Cargo;
  DatePlanned?: string;
  terminal?: Terminal;
  vessel?: Vessel;
}

export interface Survey {
  dateTimeInit?: Date;
  dateTimeComplete?: Date;
  draftMarks?: DraftMarks;
  waterDensityReadings?: WaterDensityReadings;
  seaCondition?: { condition?: 'calm' | 'swell'; swell?: number };
}
