import { Component, Input } from '@angular/core';
import { GraphService } from '../../services/graph.service';
import { Patient } from '../../models/patient';
import { CancerStatus, UtilService } from '../../services/util.service';
import { DataService } from '../../services/data.service';
import { PatientItem } from '../../models/patient-item';

@Component({
  selector: 'app-patient-dropdown',
  templateUrl: './patient-dropdown.component.html',
  styleUrls: ['./patient-dropdown.component.scss'],
})
export class PatientDropdownComponent {
  /**
   * This sub component's headline, which should either be 'metastatic' or 'nonmetastatic'
   */
  @Input() headline!: string;

  /**
   * List of patients coming in async
   */
  @Input() patients!: Patient[] | null;

  /**
   * Cancer status, similar to {@link headline}, but encapsulated into an enum {@link CancerStatus}
   */
  @Input() cancerStatus!: CancerStatus;

  /**
   * The via dropdown selected patient
   */
  selected!: Patient | null;

  /**
   * Constructor
   * @param graphService Needed for access to {@link graphService#visualizationConfig}
   * @param utilService Needed for access to enum {@link CancerStatus}
   * @param dataService Needed for loading patient detail data on demand
   */
  constructor(
    private graphService: GraphService,
    private utilService: UtilService,
    private dataService: DataService,
  ) {}

  /**
   * Selecting a patient via dropdown, which triggers the loading of this patient's detail.
   * Should improve performance upon loading all data on app start
   * @param patient The currently selected patient
   */
  selectPatient(patient: Patient): void {
    this.selected = patient;

    this.graphService.visualizationConfig[
      this.cancerStatus === this.utilService.cancerStatus.metastatic
        ? 'patientMetastatic'
        : 'patientNonmetastatic'
    ] = patient;

    this.updateSelectedPatients();

    this.dataService.loadPatient(patient.name).subscribe((patientDetails: PatientItem) => {
      this.graphService.visualizationConfig[
        this.cancerStatus === this.utilService.cancerStatus.metastatic
          ? 'patientDetailsMetastatic'
          : 'patientDetailsNonmetastatic'
      ] = patientDetails;
    });
  }

  /**
   * Updates the number of selected patients when the user makes selections via dropdown
   * @private
   */
  private updateSelectedPatients(): void {
    let count = 0;
    if (this.graphService.visualizationConfig.patientMetastatic !== null) {
      // eslint-disable-next-line no-plusplus
      count++;
    }
    if (this.graphService.visualizationConfig.patientNonmetastatic !== null) {
      // eslint-disable-next-line no-plusplus
      count++;
    }
    this.graphService.visualizationConfig.patientsSelected = count;
  }

  /**
   * Resets the patient selection for this dropdown
   */
  resetPatient() {
    this.selected = null;
    if (this.cancerStatus === this.utilService.cancerStatus.metastatic) {
      this.graphService.visualizationConfig.patientMetastatic = null;
      this.graphService.visualizationConfig.patientDetailsMetastatic = null;
    } else {
      this.graphService.visualizationConfig.patientNonmetastatic = null;
      this.graphService.visualizationConfig.patientDetailsNonmetastatic = null;
    }
    this.updateSelectedPatients();
  }
}
