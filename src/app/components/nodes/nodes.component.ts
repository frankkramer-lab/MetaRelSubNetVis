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
   * List of nodes within this network
   */
  @Input() nodes!: Node[];

  @Input() occ!: any;

  /**
   * List of nodes which were selected by the user
   */
  selectedNodes: Node[] = [];

  /**
   * Term the user filtered the unselected nodes by
   */
  filterTerm = '';

  constructor(public graphService: GraphService) {
  }

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
  }

  sortBySubtypeNonmeta(subtype: string): void {
    // todo
    console.log('sorting nonmeta: ' + subtype);
  }

  sortBySubtypeMeta(subtype: string): void {
    // todo
    console.log('sorting meta: ' + subtype);
  }

  sortByTotal(): void {
    // todo
    console.log('sorting total');
  }
}
