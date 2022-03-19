import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Patient } from '../../data/schema/patient';
import { AppState } from '../../data/state/app.state';
import {
  selectGroupLabelA,
  selectGroupLabelB,
  selectPatientA,
  selectPatientB,
  selectPatientGroupA,
  selectPatientGroupB,
} from '../../data/state/patient/patient.selectors';
import {
  resetPatientA,
  resetPatientB,
  setPatientA,
  setPatientB,
} from '../../data/state/patient/patient.actions';

@Component({
  selector: 'app-sidebar-patients',
  templateUrl: './sidebar-patients.component.html',
  styleUrls: ['./sidebar-patients.component.scss'],
})
export class SidebarPatientsComponent implements OnInit {
  patientsGroupA$!: Observable<Patient[]>;

  patientsGroupB$!: Observable<Patient[]>;

  groupLabelA$!: Observable<string>;

  groupLabelB$!: Observable<string>;

  patientA$!: Observable<Patient | null>;

  patientB$!: Observable<Patient | null>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.patientsGroupA$ = this.store.select(selectPatientGroupA);
    this.patientsGroupB$ = this.store.select(selectPatientGroupB);
    this.groupLabelA$ = this.store.select(selectGroupLabelA);
    this.groupLabelB$ = this.store.select(selectGroupLabelB);
    this.patientA$ = this.store.select(selectPatientA);
    this.patientB$ = this.store.select(selectPatientB);
  }

  patientASelected(patientA: Patient) {
    this.store.dispatch(setPatientA({ patientA }));
  }

  patientBSelected(patientB: Patient) {
    this.store.dispatch(setPatientB({ patientB }));
  }

  patientAReset() {
    this.store.dispatch(resetPatientA());
  }

  patientBReset() {
    this.store.dispatch(resetPatientB());
  }
}
