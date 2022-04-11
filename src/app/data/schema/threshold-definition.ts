import { Property } from './property';

export interface ThresholdDefinition {
  defined: number;
  property: Property | null;
}
