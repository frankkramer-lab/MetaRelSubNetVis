import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'norm' })
export class NormPipe implements PipeTransform {
  transform(value: number | null, decimals: number): string {
    if (value === null) return '';
    return value.toExponential(decimals);
  }
}
