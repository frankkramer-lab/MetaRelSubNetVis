import { Injectable } from '@angular/core';
import { PropertyTypeEnum } from '../enum/property-type-enum';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  /**
   * Returns the property type for a given string literal. Defaults to boolean.
   * @param property Name of the property
   */
  getPropertyTypeByString = (property: string): PropertyTypeEnum => {
    switch (property) {
      case 'continuous':
        return PropertyTypeEnum.continuous;
      case 'discrete':
        return PropertyTypeEnum.discrete;
      case 'boolean':
      default:
        return PropertyTypeEnum.boolean;
    }
  };

}
