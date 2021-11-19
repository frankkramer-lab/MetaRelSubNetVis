import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientCollection } from '../schema/patient-collection';
import { PatientItem } from '../schema/patient-item';
import { Network } from '../schema/network';
import { Threshold } from '../schema/threshold';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /**
   * Path to network.ts
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
   * @param http Loading network.ts and patient data via HTTP
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Loading the initially rendered network.ts
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
   * Loading specific patients with protein details necessary for updating the network.ts visualization
   * @param id Name of the specified patient
   */
  loadPatientDetails(id: string): Observable<PatientItem[]> {
    return this.http.get<PatientItem[]>(`${this.urlPatientPrefix}${id}.json`);
  }
}
