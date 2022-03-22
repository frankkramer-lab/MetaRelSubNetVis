import { ThresholdItem } from '../../schema/threshold-item';

export interface ThresholdState {
  groupA: ThresholdItem | null;
  groupB: ThresholdItem | null;
  defined: number | null;
  multiplier: number;
  isLoading: boolean;
  labelMin: string | null;
  labelMax: string | null;
}
