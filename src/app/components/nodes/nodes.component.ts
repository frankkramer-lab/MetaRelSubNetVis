import { Component, Input } from '@angular/core';
import { GraphService } from '../../services/graph.service';

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
   * Term the user filtered the unselected nodes by
   */
  filterTerm = '';

  /**
   * Constructor
   * @param graphService Necessary to access the current {@link graphService#visualizationConfig}
   */
  constructor(public graphService: GraphService) {}


  /**
   * Sort the list of nodes by subtype
   * @param subtype
   */
  sortBySubtype(subtype: string): void {
    if (this.graphService.visibleNodes) {
      this.graphService.visibleNodes.sort((a, b) => (a.occ[subtype] < b.occ[subtype] ? 1 : -1));
    }
  }

  /**
   * Sort the list of nodes by total occurrences
   */
  sortByTotal(): void {
    if (this.graphService.visibleNodes) {
      this.graphService.visibleNodes.sort((a, b) => (a.occ.all < b.occ.all ? 1 : -1));
    }
  }

}
