import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import {
  selectMax,
  selectMin,
  selectMultiplier,
  selectRelevantThresholds,
} from '../../data/state/threshold/threshold.selectors';
import {
  selectGroupLabelA,
  selectGroupLabelB,
  selectPatientSelection,
} from '../../data/state/patient/patient.selectors';
import { PatientSelectionEnum } from '../../core/enum/patient-selection-enum';
import { ThresholdDefinition } from '../../data/schema/threshold-definition';
import {
  setThresholdDefault,
  setThresholdIndividual,
} from '../../data/state/threshold/threshold.action';
import { PropertyScopeEnum } from '../../core/enum/property-scope.enum';

@Component({
  selector: 'app-sidebar-threshold',
  templateUrl: './sidebar-threshold.component.html',
  styleUrls: ['./sidebar-threshold.component.scss'],
})
export class SidebarThresholdComponent implements OnInit {
  multiplier$!: Observable<number>;

  thresholds$!: Observable<ThresholdDefinition[]>;

  patientSelection$!: Observable<PatientSelectionEnum>;

  groupLabelA$!: Observable<string>;

  groupLabelB$!: Observable<string>;

  min$!: Observable<number[]>;

  max$!: Observable<number[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.multiplier$ = this.store.select(selectMultiplier);
    this.thresholds$ = this.store.select(selectRelevantThresholds);
    this.patientSelection$ = this.store.select(selectPatientSelection);
    this.groupLabelA$ = this.store.select(selectGroupLabelA);
    this.groupLabelB$ = this.store.select(selectGroupLabelB);
    this.min$ = this.store.select(selectMin);
    this.max$ = this.store.select(selectMax);
  }

  triggerThresholdChanged(threshold: ThresholdDefinition) {
    if (threshold.scope === PropertyScopeEnum.default) {
      this.store.dispatch(setThresholdDefault({ threshold }));
    } else {
      this.store.dispatch(setThresholdIndividual({ threshold }));
    }
  }
}
