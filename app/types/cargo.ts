export interface Cargo {
  name?: string;
  weightReported?: number;
  volumeReported?: number;
  stowageFactorReported?: number;
  type?: TypeCargo;
}

export type TypeCargo = 'bulk' | 'bags' | 'bigBags' | 'liquid' | 'pieces' | 'boxes';
