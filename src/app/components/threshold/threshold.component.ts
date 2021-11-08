import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { GraphService } from '../../services/graph.service';
import { Threshold } from '../../models/threshold';

@Component({
  selector: 'app-threshold',
  templateUrl: './threshold.component.html',
  styleUrls: ['./threshold.component.scss'],
})
export class ThresholdComponent implements OnInit {

  @Input() thresholds!: Threshold;

  constructor(public graphService: GraphService, public utilService: UtilService) {}

  ngOnInit(): void {
    console.log(this.thresholds);
    setTimeout(() => {
      console.log(this.thresholds);
    }, 2000);
  }


}
