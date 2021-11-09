import { Component, Input } from '@angular/core';
import { GraphService } from '../../services/graph.service';
import { Node } from '../../models/node';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss'],
})
export class NodesComponent {
  /**
   * List of occurrences
   */
  @Input() occ!: any;

  /**
   * List of nodes which were selected by the user
   */
  selectedNodes: Node[] = [];

  /**
   * Term the user filtered the unselected nodes by
   */
  filterTerm = '';

  /**
   * Constructor
   * @param graphService Necessary to access the current {@link graphService#visualizationConfig}
   */
  constructor(public graphService: GraphService) {}

  /**
   * Selects or unselects nodes
   * @param node Node to be added or removed from the list of {@link selectedNodes}
   */
  selectNode(node: Node): void {
    if (!this.selectedNodes.includes(node)) {
      this.selectedNodes.push(node);
    } else {
      const index = this.selectedNodes.indexOf(node);
      this.selectedNodes.splice(index, 1);
    }
    this.graphService.highlightNode(this.selectedNodes.map((a) => a.data.id));
  }

  /**
   * Sort the list of nodes by subtype
   * @param subtype
   */
  sortBySubtype(subtype: string): void {
    if (this.graphService.visibleNodes) {
      this.graphService.visibleNodes
        .sort((a, b) => (a.occ[subtype] < b.occ[subtype] ? 1 : -1));
    }
  }

  /**
   * Sort the list of nodes by total occurrences
   */
  sortByTotal(): void {
    if (this.graphService.visibleNodes) {
      this.graphService.visibleNodes
        .sort((a, b) => (a.occ.all < b.occ.all ? 1 : -1));
    }
  }

  /**
   * Clears the list of currently selected nodes and re-renders the network
   */
  clearSelectedNodes() {
    this.selectedNodes = [];
    this.graphService.highlightNode(this.selectedNodes.map((a) => a.data.id));
  }
}
