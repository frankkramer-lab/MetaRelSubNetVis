import {PatientData} from './patient-data';
import {DataLoaderService} from './data-loader.service';

export class Patient {
  private dataLoader?: DataLoaderService;
  public name: string;
  public mfsYears: number;
  public patientData?: PatientData[];
  private minScore?: number;
  private maxScore?: number;
  private minGe?: number;
  private maxGe?: number;

  constructor(data: any, dataLoader: DataLoaderService) {
    this.name = data.name;
    this.mfsYears = data.mfsYears;
    this.dataLoader = dataLoader;
    this.loadPatientData();
  }

  getMinScore() {
    if (this.minScore === undefined) {
      this.minScore = this.patientData.reduce((previousValue, currentValue) => {
        return (previousValue.score < currentValue.score ? previousValue : currentValue);
      }).score;
    }
    return this.minScore;
  }

  getMaxScore() {
    if (this.maxScore === undefined) {
      this.maxScore = this.patientData.reduce((previousValue, currentValue) => {
        return (previousValue.score > currentValue.score ? previousValue : currentValue);
      }).score;
    }
    return this.maxScore;
  }

  getMinGe() {
    if (this.minGe === undefined) {
      this.minGe = this.patientData.reduce((previousValue, currentValue) => {
        return (previousValue.ge < currentValue.ge ? previousValue : currentValue);
      }).ge;
    }
    return this.minGe;
  }

  getMaxGe() {
    if (this.maxGe === undefined) {
      this.maxGe = this.patientData.reduce((previousValue, currentValue) => {
        return (previousValue.ge > currentValue.ge ? previousValue : currentValue);
      }).ge;
    }
    return this.maxGe;
  }


  private loadPatientData(): void {
    this.dataLoader.getPatientData(this.name).subscribe((data) => {
      this.patientData = data;
      // console.log('Patient ' + this.name + ': ' + this.patientData.length);
    });
  }
}
