import { PropertyTypeEnum } from '../../core/enum/property-type-enum';
import { PropertyMapping } from './property-mapping';

export interface Property {
  name: string;
  type: PropertyTypeEnum;
  mapping: PropertyMapping;
  minA?: number;
  minB?: number;
  maxA?: number;
  maxB?: number;
}
