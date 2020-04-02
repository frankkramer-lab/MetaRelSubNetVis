import {Patient} from './patient';
import {ClassResponse} from './class-response';
import {DataLoaderService} from './data-loader.service';

export class PatientsResponse implements ClassResponse{

  metastatic: Patient[];
  nonmetastatic: Patient[];

  constructor(data: any, dataLoader: DataLoaderService) {
    this.metastatic = data.metastatic.map(pat => new Patient(pat, dataLoader));
    this.nonmetastatic = data.nonmetastatic.map(pat => new Patient(pat, dataLoader));
  }
}
