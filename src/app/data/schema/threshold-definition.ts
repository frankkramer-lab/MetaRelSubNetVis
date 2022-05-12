import { Property } from './property';
import { PropertyScopeEnum } from '../../core/enum/property-scope.enum';

export interface ThresholdDefinition {
  defined: number;
  property: Property;
  scope: PropertyScopeEnum;
}
