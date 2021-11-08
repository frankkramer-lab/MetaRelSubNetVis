import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Network } from '../models/network';
import { Patient } from '../models/patient';
import { PatientCollection } from '../models/patient-collection';
import { Threshold } from '../models/threshold';
import { PatientItem } from '../models/patient-item';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  /**
   * Path to network
   * @private
   */
  private readonly urlNetwork = 'assets/data/network.json';

  /**
   * Path to thresholds
   * @private
   */
  private readonly urlThresholds = 'assets/data/thresholds.json';

  /**
   * Path to patients
   * @private
   */
  private readonly urlPatients = 'assets/data/patients.json';

  /**
   * Path prefix to patients directory
   * @private
   */
  private readonly urlPatientPrefix = 'assets/data/patient/';

  /**
   * Constructor
   * @param http Loading network and patient data via HTTP
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Loading the initially rendered network
   */
  loadNetwork(): Observable<Network> {
    return this.http.get<Network>(this.urlNetwork);
  }

  /**
   * Loading thresholds
   */
  loadThresholds(): Observable<Threshold> {
    return this.http.get<Threshold>(this.urlThresholds);
  }

  /**
   * Loading patients subsumed as classes of metastatic and nonmetastatic patients
   */
  loadPatientsClassified(): Observable<PatientCollection> {
    return this.http.get<PatientCollection>(this.urlPatients);
  }

  /**
   * Loading specific patients with protein details necessary for updating the network visualization
   * @param id Name of the specified patient
   */
  loadPatient(id: string): Observable<PatientItem[]> {
    return this.http.get<PatientItem[]>(`${this.urlPatientPrefix}${id}.json`);
  }

}
