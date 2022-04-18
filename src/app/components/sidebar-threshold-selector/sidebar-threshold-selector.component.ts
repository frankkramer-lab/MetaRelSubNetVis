import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PatientSelectionEnum } from '../../core/enum/patient-selection-enum';
import { ThresholdDefinition } from '../../data/schema/threshold-definition';

@Component({
  selector: 'app-sidebar-threshold-selector',
  templateUrl: './sidebar-threshold-selector.component.html',
  styleUrls: ['./sidebar-threshold-selector.component.scss'],
})
export class SidebarThresholdSelectorComponent {
  @Input() patientsSelected!: PatientSelectionEnum | null;

  @Input() multiplier!: number | null;

  @Input() thresholds!: ThresholdDefinition[] | null;

  @Input() min!: number[] | null;

  @Input() max!: number[] | null;

  @Input() groupLabelA!: string | null;

  @Input() groupLabelB!: string | null;

  @Output() thresholdChangedEmitter: EventEmitter<ThresholdDefinition> =
    new EventEmitter<ThresholdDefinition>();
}
