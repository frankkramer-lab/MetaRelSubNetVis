import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PatientSelectionEnum } from '../../core/enum/patient-selection-enum';
import { Property } from '../../data/schema/property';
import { ThresholdDefinition } from '../../data/schema/threshold-definition';

@Component({
  selector: 'app-sidebar-threshold-selector',
  templateUrl: './sidebar-threshold-selector.component.html',
  styleUrls: ['./sidebar-threshold-selector.component.scss'],
})
export class SidebarThresholdSelectorComponent {
  @Input() min!: number | null;

  @Input() max!: number | null;

  @Input() groupLabelA!: string | null;

  @Input() groupLabelB!: string | null;

  @Input() patientsSelected!: PatientSelectionEnum | null;

  @Input() defined!: number | null;

  @Input() multiplier!: number | null;

  @Input() labelMin!: string | null;

  @Input() labelMax!: string | null;

  @Input() responsibleProperty!: Property | null;

  @Input() availableProperties!: Property[] | null;

  @Output() definedChangedEmitter: EventEmitter<ThresholdDefinition> =
    new EventEmitter<ThresholdDefinition>();

  @Output() propertyChangedEmitter: EventEmitter<Property> = new EventEmitter<Property>();
}
