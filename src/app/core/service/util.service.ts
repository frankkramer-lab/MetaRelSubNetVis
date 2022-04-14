import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {

  sortObjectByKeys(obj: any): any {
    const keys = Object.keys(obj);
    const sorted: any = {};

    const keysSorted = keys.sort((a, b) => {
      const aNum = Number(a);
      const bNum = Number(b);

      if (Number.isNaN(aNum) || Number.isNaN(bNum)) return obj;

      return aNum > bNum ? 1 : -1;
    });
    keysSorted.forEach((key) => {
      sorted[key] = obj[key];
    });
    return sorted;
  }

}
