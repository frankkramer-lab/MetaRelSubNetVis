import { ThresholdDefinition } from '../../schema/threshold-definition';

export interface ThresholdState {
  thresholds: ThresholdDefinition[];
  multiplier: number;
  isLoading: boolean;
}
