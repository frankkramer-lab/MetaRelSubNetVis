import { Component, Input } from '@angular/core';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-threshold-slider',
  templateUrl: './threshold-slider.component.html',
  styleUrls: ['./threshold-slider.component.scss'],
})
export class ThresholdSliderComponent {
  /**
   * Lower border
   */
  @Input() min!: number;

  /**
   * Upper border
   */
  @Input() max!: number;

  /**
   * Defined value
   */
  @Input() set!: number;

  /**
   * Utility value for range scaling
   */
  @Input() multiplier!: number;

  /**
   * Constructor
   * @param graphService Needed to update the rendered network
   */
  constructor(public graphService: GraphService) {}
}
