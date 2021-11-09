import { Component } from '@angular/core';
import { NodeColorBy, NodeSizeBy, UtilService } from '../../services/util.service';
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

  selectColorNodesBy(colorBy: NodeColorBy): void {
    this.graphService.visualizationConfig.nodeColorBy = colorBy;
    this.graphService.layoutPatient();
  }

  selectNodeSizeBy(nodeSizeBy: NodeSizeBy): void {
    this.graphService.visualizationConfig.nodeSizeBy = nodeSizeBy;
    this.graphService.layoutPatient();
  }

  toggleShowAllNodes(): void {
    this.graphService.visualizationConfig.showAllNodes =
      !this.graphService.visualizationConfig.showAllNodes;
    this.graphService.updateShownNodes();
  }

  toggleShowMtbResults(): void {
    this.graphService.visualizationConfig.showMtbResults =
      !this.graphService.visualizationConfig.showMtbResults;
    this.graphService.updateMtbNodes();
    this.graphService.updateShownNodes();
  }

  toggleShowOnlySharedNodes(): void {
    if (
      this.graphService.visualizationConfig.showAllNodes &&
      !this.graphService.visualizationConfig.showOnlySharedNodes
    ) {
      this.toggleShowAllNodes();
    }

    this.graphService.visualizationConfig.showOnlySharedNodes =
      !this.graphService.visualizationConfig.showOnlySharedNodes;
    this.graphService.updateShownNodes();
  }

  fitGraph(): void {
    this.graphService.fitGraph();
  }
}
