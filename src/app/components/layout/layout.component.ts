import { Component, OnInit } from '@angular/core';
import { ColorNodesBy, NodeSizeBy, UtilService } from '../../services/util.service';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  /**
   * Constructor
   * @param utilService Needed for access to essential enums
   * @param graphService Needed to change graph visualization on demand
   */
  constructor(
    public utilService: UtilService,
    public graphService: GraphService
  ) { }

  selectColorNodesBy(colorBy: ColorNodesBy): void {
    this.graphService.visualizationConfig.colorNodesBy = colorBy;
  }

  selectNodeSizeBy(nodeSizeBy: NodeSizeBy): void {
    // todo
  }

  toggleShowAllNodes(b: boolean): void {
    this.graphService.visualizationConfig.showAllNodes = b;
  }

  toggleShowMtbResults(b: boolean): void {
    this.graphService.visualizationConfig.showMtbResults = b;
  }

  toggleShowOnlySharedNodes(b: boolean): void {
    this.graphService.visualizationConfig.showOnlySharedNodes = b;
  }

  fitGraph(): void {
    this.graphService.fitGraph();
  }
}
