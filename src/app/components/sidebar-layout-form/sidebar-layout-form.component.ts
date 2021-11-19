import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NodeColorByEnum } from '../../core/enum/node-color-by.enum';
import { NodeSizeByEnum } from '../../core/enum/node-size-by.enum';
import { PatientSelectionEnum } from '../../core/enum/patient-selection-enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar-layout-form',
  templateUrl: './sidebar-layout-form.component.html',
  styleUrls: ['./sidebar-layout-form.component.scss'],
})
export class SidebarLayoutFormComponent {

  @Input() patientSelection!: PatientSelectionEnum | null;

  @Input() nodeColorBy!: NodeColorByEnum | null;

  @Input() nodeSizeBy!: NodeSizeByEnum | null;

  @Input() showAllNodes!: boolean | null;

  @Input() showMtbResults!: boolean | null;

  @Input() showOnlySharedNodes!: boolean | null;

  @Output() nodeColorByChanged: EventEmitter<NodeColorByEnum> = new EventEmitter<NodeColorByEnum>();

  @Output() nodeSizeByChanged: EventEmitter<NodeSizeByEnum> = new EventEmitter<NodeSizeByEnum>();

  @Output() showAllNodesChanged: EventEmitter<void> = new EventEmitter<void>();

  @Output() showMtbResultsChanged: EventEmitter<void> = new EventEmitter<void>();

  @Output() showOnlySharedNodesChanged: EventEmitter<void> = new EventEmitter<void>();

  @Output() fitGraphPressed: EventEmitter<void> = new EventEmitter<void>();

}
