import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PatientsResponse} from './patients-response';
import {PatientData} from './patient-data';
import {Network} from './network';
import {Observable} from 'rxjs';
import {ThresholdResponse} from './threshold-response';
import {plainToClass} from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  private patientsUrl = 'assets/data/patients.json';
  private patientDataUrl = 'assets/data/patient/';
  private thresholdUrl = 'assets/data/thresholds.json';
  private networkUrl = 'assets/data/network.json';

  constructor(private httpClient: HttpClient) {}

  getPatients(): Observable<PatientsResponse> {
    return this.httpClient.get<PatientsResponse>(this.patientsUrl);
  }

  getPatientData(patientId: string): Observable<PatientData[]> {
    console.log('Called get patient data: ' + this.patientDataUrl + patientId + '.json');
    return this.httpClient.get<PatientData[]>(this.patientDataUrl + patientId + '.json');
  }

  getThresholds() {
    return this.httpClient.get<ThresholdResponse>(this.thresholdUrl);
  }
  // getThresholds(): Observable<ThresholdResponse> {
  //   return this.httpClient.get<ThresholdResponse>(this.thresholdUrl);
  // }

  getNetwork(): Observable<Network> {
    console.log('Get network: ' + this.networkUrl);
    return this.httpClient.get<Network>(this.networkUrl);
  }


}
