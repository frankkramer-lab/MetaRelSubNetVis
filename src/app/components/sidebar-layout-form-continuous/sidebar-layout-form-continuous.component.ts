import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Property } from '../../data/schema/property';

@Component({
  selector: 'app-sidebar-layout-form-continuous',
  templateUrl: './sidebar-layout-form-continuous.component.html',
  styleUrls: ['./sidebar-layout-form-continuous.component.scss'],
})
export class SidebarLayoutFormContinuousComponent {

  @Input() property!: Property | null;

  @Input() isChecked!: boolean | null;

  @Input() propertyId!: number;

  @Output() propertyClicked: EventEmitter<void> = new EventEmitter<void>();
}
