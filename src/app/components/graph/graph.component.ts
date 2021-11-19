import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GraphService } from '../../core/service/graph.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements AfterViewInit {
  /**
   * Cytoscape container used for rendering the network
   */
  @ViewChild('cy') cyContainer!: ElementRef;

  constructor(private graphService: GraphService) {}

  ngAfterViewInit(): void {
    this.graphService.cyContainer = this.cyContainer.nativeElement;
  }
}
