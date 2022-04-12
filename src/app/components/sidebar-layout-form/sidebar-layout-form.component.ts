import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PatientSelectionEnum } from '../../core/enum/patient-selection-enum';
import { Property } from '../../data/schema/property';

@Component({
  selector: 'app-sidebar-layout-form',
  templateUrl: './sidebar-layout-form.component.html',
  styleUrls: ['./sidebar-layout-form.component.scss'],
})
export class SidebarLayoutFormComponent {
  @Input() patientSelection!: PatientSelectionEnum | null;

  @Input() nodeColorBy!: Property | null;

  @Input() nodeSizeBy!: Property | null;

  @Input() showAllNodes!: boolean | null;

  @Input() showMtbResults!: boolean | null;

  @Input() showOnlySharedNodes!: boolean | null;

  @Input() geMin!: number | null;

  @Input() geMidRange!: number | null;

  @Input() geMax!: number | null;

  @Input() scoreMin!: number | null;

  @Input() scoreMidRange!: number | null;

  @Input() scoreMax!: number | null;

  @Output() nodeColorByChanged: EventEmitter<Property | null> = new EventEmitter<Property | null>();

  @Output() nodeSizeByChanged: EventEmitter<Property | null> = new EventEmitter<Property | null>();

  @Output() showAllNodesChanged: EventEmitter<void> = new EventEmitter<void>();

  @Output() showMtbResultsChanged: EventEmitter<void> = new EventEmitter<void>();

  @Output() showOnlySharedNodesChanged: EventEmitter<void> = new EventEmitter<void>();

  @Output() fitGraphPressed: EventEmitter<void> = new EventEmitter<void>();
}
