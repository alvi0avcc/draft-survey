export interface DraftMarksPoint {
  port?: number;
  portMarkOffset?: number;
  starboard?: number;
  starboardMarkOffset?: number;
}

export interface DraftMarks {
  forward: DraftMarksPoint;
  midship: DraftMarksPoint;
  aft: DraftMarksPoint;
}
