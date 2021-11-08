import { Component } from '@angular/core';
import { ColorNodesBy, NodeSizeBy, UtilService } from '../../services/util.service';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  /**
   * Constructor
   * @param utilService Needed for access to essential enums
   * @param graphService Needed to change graph visualization on demand
   */
  constructor(public utilService: UtilService, public graphService: GraphService) {}

  selectColorNodesBy(colorBy: ColorNodesBy): void {
    this.graphService.visualizationConfig.colorNodesBy = colorBy;
    this.graphService.layoutPatient();
  }

  selectNodeSizeBy(nodeSizeBy: NodeSizeBy): void {
    this.graphService.visualizationConfig.nodeSizeBy = nodeSizeBy;
    this.graphService.layoutPatient();
  }

  toggleShowAllNodes(): void {
    this.graphService.visualizationConfig.showAllNodes =
      !this.graphService.visualizationConfig.showAllNodes;
    this.graphService.updataShownNodes();
  }

  toggleShowMtbResults(): void {
    this.graphService.visualizationConfig.showMtbResults =
      !this.graphService.visualizationConfig.showMtbResults;
    this.graphService.updataShownNodes();
  }

  toggleShowOnlySharedNodes(): void {
    this.graphService.visualizationConfig.showOnlySharedNodes =
      !this.graphService.visualizationConfig.showOnlySharedNodes;
    this.graphService.updataShownNodes();
  }

  fitGraph(): void {
    this.graphService.fitGraph();
  }
}
