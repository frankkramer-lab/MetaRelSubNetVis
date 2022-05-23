import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Property } from '../../data/schema/property';

@Component({
  selector: 'app-sidebar-layout-form-discrete',
  templateUrl: './sidebar-layout-form-discrete.component.html',
  styleUrls: ['./sidebar-layout-form-discrete.component.scss'],
})
export class SidebarLayoutFormDiscreteComponent {
  @Input() property!: Property | null;

  @Input() propertyId!: number;

  @Input() isChecked!: boolean | null;

  @Output() propertyClicked: EventEmitter<void> = new EventEmitter<void>();
}
