import { ThresholdItem } from '../../schema/threshold-item';
import { Property } from '../../schema/property';

export interface ThresholdState {
  rangeGroupA: ThresholdItem | null;
  rangeGroupB: ThresholdItem | null;
  defined: number | null;
  responsibleProperty: Property | null;
  availableProperties: Property[];
  multiplier: number;
  isLoading: boolean;
  labelMin: string | null;
  labelMax: string | null;
}
