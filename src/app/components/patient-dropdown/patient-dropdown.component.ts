import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GraphService } from '../../services/graph.service';
import { Patient } from '../../models/patient';
import { CancerStatus, UtilService } from '../../services/util.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-patient-dropdown',
  templateUrl: './patient-dropdown.component.html',
  styleUrls: ['./patient-dropdown.component.scss'],
})
export class PatientDropdownComponent implements OnInit, OnChanges {
  /**
   * This sub component's headline, which should either be 'metastatic' or 'nonmetastatic'
   */
  @Input() headline!: string;

  /**
   * List of available patients.
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
   * If a patient is to be loaded via routing, we read that patient's ID
   * and load the data as soon as the patient data is here.
   * @private
   */
  private loadPatientOnLoad!: string;

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
   * During initialization we fetch the current routing config.
   * There may be specific patients preselected.
   * We need to render these selection as soon as patient data has arrived.
   */
  ngOnInit(): void {
    const routingConfig = this.graphService.getRoutingConfig();
    if (
      this.cancerStatus === this.utilService.cancerStatus.metastatic &&
      routingConfig &&
      routingConfig.loadAndSelectMeta
    ) {
      this.loadPatientOnLoad = routingConfig.loadAndSelectMeta;
    } else if (
      this.cancerStatus === this.utilService.cancerStatus.nonmetastatic &&
      routingConfig &&
      routingConfig.loadAndSelectNonmeta
    ) {
      this.loadPatientOnLoad = routingConfig.loadAndSelectNonmeta;
    }
  }

  /**
   * Listening for arrival of patient data to apply preselected patients.
   * @param changes Listening for patient data
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.patients && this.loadPatientOnLoad && this.patients) {
      const patient = this.patients.find((a) => a.name === this.loadPatientOnLoad);
      this.selectPatient(patient)
        .then()
        .catch((e) => console.error(e));
    }
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

    this.graphService.visualizationConfig[
      this.cancerStatus === this.utilService.cancerStatus.metastatic
        ? 'patientMetastatic'
        : 'patientNonmetastatic'
    ] = patient;

    this.graphService.handlePatientSelection();
    this.graphService.visualizationConfig[
      this.cancerStatus === this.utilService.cancerStatus.metastatic
        ? 'patientDetailsMetastatic'
        : 'patientDetailsNonmetastatic'
    ] = await this.dataService.loadPatientDetails(patient.name);

    this.graphService.layoutPatient();
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
