import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GraphService } from '../../services/graph.service';
import { Threshold } from '../../models/threshold';

@Component({
  selector: 'app-threshold',
  templateUrl: './threshold.component.html',
  styleUrls: ['./threshold.component.scss'],
})
export class ThresholdComponent implements OnChanges {
  /**
   * List of thresholds
   */
  @Input() thresholds!: Threshold;

  /**
   * Minimal threshold
   */
  thresholdMin!: number;

  /**
   * Maximal threshold
   */
  thresholdMax!: number;

  /**
   * Defined threshold
   */
  thresholdSet!: number;

  /**
   * True, as soon as thresholds are initially defined
   */
  thresholdsInitialized = false;

  /**
   * Constructor
   * @param graphService Needed to update the rendered network based on defined threshold
   */
  constructor(public graphService: GraphService) {}

  /**
   * Setting local thresholds variables as soon as data arrives
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.thresholdsInitialized) {
      if (changes.thresholds && changes.thresholds.currentValue) {
        this.initThreshold();
      }
    }
  }

  /**
   * Initializes local threshold variables
   */
  private initThreshold = (): void => {
    this.thresholdMin = Math.min(
      this.thresholds.metastatic.threshold,
      this.thresholds.nonmetastatic.threshold,
    );
    this.thresholdMax = Math.max(this.thresholds.metastatic.max, this.thresholds.nonmetastatic.max);
    this.thresholdSet = this.thresholdMin * this.thresholds.multiplier;

    this.thresholdsInitialized = true;
  };
}
