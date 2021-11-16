import { Component, Input, OnInit } from '@angular/core';
import { GraphService } from '../../services/graph.service';
import { Patient } from '../../models/patient';
import { CancerStatus, UtilService } from '../../services/util.service';
import { DataService } from '../../services/data.service';
import { PatientCollection } from '../../models/patient-collection';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-patient-dropdown',
  templateUrl: './patient-dropdown.component.html',
  styleUrls: ['./patient-dropdown.component.scss'],
})
export class PatientDropdownComponent implements OnInit {
  /**
   * This sub component's headline, which should either be 'metastatic' or 'nonmetastatic'
   */
  @Input() headline!: string;

  patients!: Patient[] | null;

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
   * @param storeService Needed for access to patient data
   * @param utilService Needed for access to enum {@link CancerStatus}
   * @param dataService Needed for loading patient detail data on demand
   */
  constructor(
    private graphService: GraphService,
    private storeService: StoreService,
    public utilService: UtilService,
    public dataService: DataService,
  ) {}

  /**
   * During initialization we fetch the current routing config.
   * There may be specific patients preselected.
   * We need to render these selection as soon as patient data has arrived.
   */
  ngOnInit(): void {
    this.storeService.patientData.subscribe((data) => {
      const key = this.utilService.getCancerStatusLiteral(this.cancerStatus);
      this.patients = data[key as keyof PatientCollection] as Patient[];
    });
  }

  /**
   * Selecting a patient via dropdown, which triggers the loading of this patient's detail.
   * Should improve performance upon loading all data on app start
   * @param patient The currently selected patient
   */
  async selectPatient(patient: Patient | undefined): Promise<void> {
    if (!patient) {
      return;
    }

    this.selected = patient;
    await this.graphService.selectPatient(patient.name, this.cancerStatus);
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
    this.graphService.handlePatientSelection();
    this.graphService.layoutPatient();
  }
}
