import { Component } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent {

  constructor(public utilService: UtilService) {}

}
