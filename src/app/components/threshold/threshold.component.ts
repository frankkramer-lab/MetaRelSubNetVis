import { Component, OnInit } from '@angular/core';
import { GraphService } from '../../services/graph.service';
import { Threshold } from '../../models/threshold';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-threshold',
  templateUrl: './threshold.component.html',
  styleUrls: ['./threshold.component.scss'],
})
export class ThresholdComponent implements OnInit {
  /**
   * Local copy of the loaded thresholds
   */
  thresholds!: Threshold;

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
   * @param storeService Needed to access the loaded thresholds
   */
  constructor(public graphService: GraphService, private storeService: StoreService) {}

  /**
   * As soon as threshold data is available, we initialize the threshold's upper and lower bounds.
   */
  ngOnInit(): void {
    this.storeService.thresholdData.subscribe((data) => {
      this.thresholds = data;
      this.initThresholds(data);
    });
  }

  /**
   * Initializes local threshold variables
   */
  private initThresholds = (data: Threshold): void => {
    this.graphService.setThresholds(data);
    this.thresholdMin = Math.min(data.metastatic.threshold, data.nonmetastatic.threshold);
    this.thresholdMax = Math.max(data.metastatic.max, data.nonmetastatic.max);
    this.thresholdSet = this.thresholdMin * data.multiplier;
    this.graphService.visualizationConfig.thresholdDefined = this.thresholdSet / data.multiplier;
    this.thresholdsInitialized = true;
  };
}
