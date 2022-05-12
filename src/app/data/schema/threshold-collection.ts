import { ThresholdDefinition } from './threshold-definition';

export interface ThresholdCollection {
  default: ThresholdDefinition[];
  individual: ThresholdDefinition[];
}
