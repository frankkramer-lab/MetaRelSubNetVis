import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UtilService } from '../../services/util.service';
import { GraphService } from '../../services/graph.service';
import { Threshold } from '../../models/threshold';

@Component({
  selector: 'app-threshold',
  templateUrl: './threshold.component.html',
  styleUrls: ['./threshold.component.scss'],
})
export class ThresholdComponent implements OnChanges {
  @Input() thresholds!: Threshold;

  thresholdMin!: number;

  thresholdMax!: number;

  thresholdSet!: number;

  thresholdsInitialized = false;

  constructor(public graphService: GraphService, public utilService: UtilService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.thresholdsInitialized) {
      if (changes.thresholds && changes.thresholds.currentValue) {
        this.initThreshold();
      }
    }
  }

  private initThreshold = (): void => {
    this.thresholdMin = Math.min(
      this.thresholds.metastatic.threshold,
      this.thresholds.nonmetastatic.threshold,
    );
    this.thresholdMax = Math.max(this.thresholds.metastatic.max, this.thresholds.nonmetastatic.max);
    this.thresholdSet = this.thresholdMin * this.thresholds.multiplier;

    console.log(this.thresholdMin);
    console.log(this.thresholdMax);
    console.log(this.thresholdSet);
    this.thresholdsInitialized = true;
  };
}
