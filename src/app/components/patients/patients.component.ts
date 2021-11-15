import { Component, Input } from '@angular/core';
import { PatientCollection } from '../../models/patient-collection';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent {
  @Input() patients!: PatientCollection | null;

  constructor(public utilService: UtilService) {}

}
