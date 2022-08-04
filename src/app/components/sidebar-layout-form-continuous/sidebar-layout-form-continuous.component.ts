import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Property } from '../../data/schema/property';

@Component({
  selector: 'app-sidebar-layout-form-continuous',
  templateUrl: './sidebar-layout-form-continuous.component.html',
  styleUrls: ['./sidebar-layout-form-continuous.component.scss'],
})
export class SidebarLayoutFormContinuousComponent {
  @Input() type!: string;

  @Input() property!: Property | null;

  @Input() isChecked!: boolean | null;

  @Input() propertyId!: number;

  @Input() gradient!: string | null;

  @Input() minLabel!: number | null;

  @Input() maxLabel!: number | null;

  @Output() propertyClicked: EventEmitter<void> = new EventEmitter<void>();

  // getMin(): number {
  //   if (this.property === null) return 0;
  //   return Math.min(
  //     this.property.minA ?? Number.MAX_SAFE_INTEGER,
  //     this.property.minB ?? Number.MAX_SAFE_INTEGER,
  //   );
  // }
  //
  // getMax(): number {
  //   if (this.property === null) return 1;
  //   return Math.max(
  //     this.property.maxA ?? Number.MIN_SAFE_INTEGER,
  //     this.property.maxB ?? Number.MIN_SAFE_INTEGER,
  //   );
  // }
}
