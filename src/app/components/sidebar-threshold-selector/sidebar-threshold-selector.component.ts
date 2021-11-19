import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PatientSelectionEnum } from '../../core/enum/patient-selection-enum';

@Component({
  selector: 'app-sidebar-threshold-selector',
  templateUrl: './sidebar-threshold-selector.component.html',
  styleUrls: ['./sidebar-threshold-selector.component.scss'],
})
export class SidebarThresholdSelectorComponent {

  @Input() min!: number | null;

  @Input() max!: number | null;

  @Input() patientsSelected!: PatientSelectionEnum | null;

  @Input() defined!: number | null;

  @Input() multiplier!: number | null;

  @Output() definedChangedEmitter: EventEmitter<number> = new EventEmitter<number>();

}
