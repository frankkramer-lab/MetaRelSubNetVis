import { Component, Input, OnInit } from '@angular/core';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-threshold-slider',
  templateUrl: './threshold-slider.component.html',
  styleUrls: ['./threshold-slider.component.scss'],
})
export class ThresholdSliderComponent {
  @Input() min!: number;

  @Input() max!: number;

  @Input() set!: number;

  @Input() multiplier!: number;

  constructor(public graphService: GraphService) {}
}
