import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Patient } from '../../data/schema/patient';
import { NetworkNode } from '../../data/schema/network-node';
import { ComponentVisibilityEnum } from '../../core/enum/component-visibility.enum';
import { Property } from '../../data/schema/property';

@Component({
  selector: 'app-sidebar-generator-table',
  templateUrl: './sidebar-generator-table.component.html',
  styleUrls: ['./sidebar-generator-table.component.scss'],
})
export class SidebarGeneratorTableComponent {
  @Input() uuid!: string | null;

  @Input() groupLabelA!: string | null;

  @Input() groupLabelB!: string | null;

  @Input() patientA!: Patient | null;

  @Input() patientB!: Patient | null;

  @Input() threshold!: number | null;

  @Input() nodes!: NetworkNode[] | null;

  @Input() nodesColorBy!: Property | null;

  @Input() nodesSizeBy!: Property | null;

  @Input() showAll!: boolean | null;

  @Input() showShared!: boolean | null;

  @Input() booleanProperty!: Property | null;

  @Input() sidebarVisibility!: ComponentVisibilityEnum | null;

  @Input() triggerImmediateImageDownload!: boolean | null;

  @Output() sidebarVisibilityChanged: EventEmitter<ComponentVisibilityEnum> =
    new EventEmitter<ComponentVisibilityEnum>();

  @Output() triggerDownloadChanged: EventEmitter<void> = new EventEmitter<void>();
}
