export interface DraftMarksPoint {
  Port?: number;
  Starboard?: number;
  markOffset?: number;
}

export interface DraftMarks {
  forward?: DraftMarksPoint;
  midship?: DraftMarksPoint;
  aft?: DraftMarksPoint;
}
