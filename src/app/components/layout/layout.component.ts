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

  /**
   * Select a criterion to color the nodes.
   * @param colorBy Can either be 'relevance', 'gene expression' or 'gene expression level'. See {@link NodeColorBy}.
   */
  selectColorNodesBy(colorBy: NodeColorBy): void {
    this.graphService.visualizationConfig.nodeColorBy = colorBy;
    this.graphService.layoutPatient();
  }

  /**
   * Select a criterion to size the nodes.
   * @param nodeSizeBy Can either be 'relevance' or 'gene expression'. See {@link NodeSizeBy}.
   */
  selectNodeSizeBy(nodeSizeBy: NodeSizeBy): void {
    this.graphService.visualizationConfig.nodeSizeBy = nodeSizeBy;
    this.graphService.layoutPatient();
  }

  /**
   * Toggles showing all nodes.
   */
  toggleShowAllNodes(): void {
    this.graphService.visualizationConfig.showAllNodes =
      !this.graphService.visualizationConfig.showAllNodes;
    this.graphService.updateShownNodes();
  }

  /**
   * Toggles showing MTB results.
   */
  toggleShowMtbResults(): void {
    this.graphService.visualizationConfig.showMtbResults =
      !this.graphService.visualizationConfig.showMtbResults;
    this.graphService.updateMtbNodes();
    this.graphService.updateShownNodes();
  }

  /**
   * Toggles showing only shared nodes.
   */
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

  /**
   * Fits the graph to the current viewport.
   */
  fitGraph(): void {
    this.graphService.fitGraph();
  }
}
