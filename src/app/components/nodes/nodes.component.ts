import { Component, Input, OnInit } from '@angular/core';
import { GraphService } from '../../services/graph.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss'],
})
export class NodesComponent implements OnInit {
  /**
   * Term the user filtered the unselected nodes by
   */
  filterTerm = '';

  /**
   * Occurrences stored for this network. Accessible via store service
   */
  occ: any;

  /**
   * Constructor
   * @param graphService Needed for access to the current {@link graphService#visualizationConfig}
   * @param storeService Needed for access to the stored data
   */
  constructor(public graphService: GraphService, private storeService: StoreService) {}

  /**
   * Sets the network's occurrences
   */
  ngOnInit(): void {
    this.storeService.networkData.subscribe((data) => {
      this.occ = data.occ;
    });
  }

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
