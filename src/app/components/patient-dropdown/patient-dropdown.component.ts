import { Component, Input } from '@angular/core';
import { GraphService } from '../../services/graph.service';
import { Patient } from '../../models/patient';
import { CancerStatus, UtilService } from '../../services/util.service';

@Component({
  selector: 'app-patient-dropdown',
  templateUrl: './patient-dropdown.component.html',
  styleUrls: ['./patient-dropdown.component.scss'],
})
export class PatientDropdownComponent {

  @Input() headline!: string;

  @Input() patients!: Patient[] | null;

  @Input() cancerStatus!: CancerStatus;

  selected!: Patient;

  constructor(private graphService: GraphService, private utilService: UtilService) {
  }

  selectPatient(patient: Patient): void {
    this.selected = patient;
    if (this.cancerStatus === this.utilService.cancerStatus.metastatic) {
      this.graphService.visualizationConfig.patientMetastatic = patient.name;
    } else {
      this.graphService.visualizationConfig.patientNonmetastatic = patient.name;
    }
  }
}
