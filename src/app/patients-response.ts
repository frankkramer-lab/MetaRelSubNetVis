import {Patient} from './patient';
import {ClassResponse} from './class-response';
import {DataLoaderService} from './data-loader.service';

export class PatientsResponse implements ClassResponse{

  metastatic: Patient[];
  nonmetastatic: Patient[];
  geMin: number;
  geMax: number;

  constructor(data: any, dataLoader: DataLoaderService) {
    this.geMin = data.geMin;
    this.geMax = data.geMax;
    // console.log('ge range init: '+this.geMin+'-'+this.geMax);
    this.metastatic = data.metastatic.map(pat => new Patient(pat, dataLoader));
    this.nonmetastatic = data.nonmetastatic.map(pat => new Patient(pat, dataLoader));
  }
}
