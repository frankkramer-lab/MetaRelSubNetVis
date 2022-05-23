import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Property } from '../../data/schema/property';

@Component({
  selector: 'app-sidebar-layout-form-boolean',
  templateUrl: './sidebar-layout-form-boolean.component.html',
  styleUrls: ['./sidebar-layout-form-boolean.component.scss'],
})
export class SidebarLayoutFormBooleanComponent {
  @Input() property!: Property | null;

  @Input() booleanProperty!: Property | null;

  @Input() propertyId!: number | null;

  @Output() propertyClicked: EventEmitter<Property | null> = new EventEmitter<Property | null>();
}
