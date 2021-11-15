import { Injectable } from '@angular/core';
import { PatientCollection } from '../models/patient-collection';
import { Network } from '../models/network';
import { DataService } from './data.service';
import { SidebarVisibility } from './util.service';
import { from, Observable, of, pipe } from 'rxjs';
import { Threshold } from '../models/threshold';

@Injectable({
  providedIn: 'root',
})
export class StoreService {

  showSidebar: SidebarVisibility = SidebarVisibility.full;

  /**
   * Globally accessible patient data
   */
  patientData!: Observable<PatientCollection>;

  networkData!: Observable<Network>;

  thresholdData!: Observable<Threshold>;

  constructor(private dataService: DataService) {
    this.patientData = dataService.loadPatientsClassified();
    this.networkData = dataService.loadNetwork();
    this.thresholdData = dataService.loadThresholds();
  }


}
