import { ThresholdItem } from './threshold-item';
import { Property } from './property';

export interface Threshold {
  rangeGroupA: ThresholdItem;
  rangeGroupB: ThresholdItem;
  availableProperties: Property[];
}
