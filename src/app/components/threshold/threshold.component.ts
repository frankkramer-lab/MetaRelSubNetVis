import { Component } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-threshold',
  templateUrl: './threshold.component.html',
  styleUrls: ['./threshold.component.scss'],
})
export class ThresholdComponent {
  constructor(public graphService: GraphService, public utilService: UtilService) {}
}
