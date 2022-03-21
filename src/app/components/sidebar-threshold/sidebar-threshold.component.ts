import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import {
  selectDefined,
  selectMax,
  selectMin,
  selectMultiplier,
} from '../../data/state/threshold/threshold.selectors';
import {
  selectGroupLabelA,
  selectGroupLabelB,
  selectPatientSelection,
} from '../../data/state/patient/patient.selectors';
import { PatientSelectionEnum } from '../../core/enum/patient-selection-enum';
import { setDefined } from '../../data/state/threshold/threshold.action';

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
  }

  definedChanged(defined: number) {
    this.store.dispatch(setDefined({ defined }));
  }
}
