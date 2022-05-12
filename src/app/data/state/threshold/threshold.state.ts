import { ThresholdCollection } from '../../schema/threshold-collection';

export interface ThresholdState {
  thresholds: ThresholdCollection;
  multiplier: number;
  isLoading: boolean;
}
