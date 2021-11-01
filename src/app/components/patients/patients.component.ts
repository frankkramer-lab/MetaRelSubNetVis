import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PatientCollection } from '../../models/patient-collection';
import { GraphService } from '../../services/graph.service';
import { PatientSelection } from '../../models/patient-selection';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent {
  @Input() patients!: PatientCollection | null;

  selectedMetastatic!: string;

  selectedNonmetastatic!: string;

  constructor(private graphService: GraphService, public utilService: UtilService) {}

  selectNonMetastatic(name: string) {
    this.selectedMetastatic = name;
  }

  selectMetastatic(name: string) {
    this.selectedNonmetastatic = name;
  }
}
