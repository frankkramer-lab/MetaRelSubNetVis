import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import {
  selectAvailableProperties,
  selectDefined,
  selectLabelMax,
  selectLabelMin,
  selectMax,
  selectMin,
  selectMultiplier,
  selectResponsibleProperty,
} from '../../data/state/threshold/threshold.selectors';
import {
  selectGroupLabelA,
  selectGroupLabelB,
  selectPatientSelection,
} from '../../data/state/patient/patient.selectors';
import { PatientSelectionEnum } from '../../core/enum/patient-selection-enum';
import { setDefined, setProperty } from '../../data/state/threshold/threshold.action';
import { Property } from '../../data/schema/property';
import { ThresholdDefinition } from '../../data/schema/threshold-definition';

@Component({
  selector: 'app-sidebar-threshold',
  templateUrl: './sidebar-threshold.component.html',
  styleUrls: ['./sidebar-threshold.component.scss'],
})
export class SidebarThresholdComponent implements OnInit {
  min$!: Observable<number | null>;

  max$!: Observable<number | null>;

  defined$!: Observable<number | null>;

  multiplier$!: Observable<number>;

  patientSelection$!: Observable<PatientSelectionEnum>;

  groupLabelA$!: Observable<string>;

  groupLabelB$!: Observable<string>;

  thresholdMinLabel$!: Observable<string | null>;

  thresholdMaxLabel$!: Observable<string | null>;

  thresholdProperty$!: Observable<Property | null>;

  availableProperties$!: Observable<Property[]>;

  @Output() thresholdEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.min$ = this.store.select(selectMin);
    this.max$ = this.store.select(selectMax);
    this.multiplier$ = this.store.select(selectMultiplier);
    this.defined$ = this.store.select(selectDefined);
    this.patientSelection$ = this.store.select(selectPatientSelection);
    this.groupLabelA$ = this.store.select(selectGroupLabelA);
    this.groupLabelB$ = this.store.select(selectGroupLabelB);
    this.thresholdMinLabel$ = this.store.select(selectLabelMin);
    this.thresholdMaxLabel$ = this.store.select(selectLabelMax);
    this.thresholdProperty$ = this.store.select(selectResponsibleProperty);
    this.availableProperties$ = this.store.select(selectAvailableProperties);
  }

  definedChanged(thresholdDefinition: ThresholdDefinition) {
    this.store.dispatch(setDefined({ thresholdDefinition }));
  }

  propertyChanged(responsibleProperty: Property) {
    this.store.dispatch(setProperty({ responsibleProperty }));
  }
}
