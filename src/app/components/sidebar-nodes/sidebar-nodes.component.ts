import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import { selectOccurrences } from '../../data/state/network/network.selectors';
import { NetworkNode } from '../../data/schema/network-node';
import { NetworkOccurrences } from '../../data/schema/network-occurrences';
import { SortByEnum } from '../../core/enum/sort-by.enum';
import {
  clearMarkedNodes,
  markNode,
  setFilterTerm,
  sortBy,
} from '../../data/state/nodes/nodes.actions';
import {
  selectMarkedNodes,
  selectNumberOfColumns,
  selectSubtypeColumnA,
  selectSubtypeColumnB,
  selectVisibleNodes,
} from '../../data/state/nodes/nodes.selectors';

@Component({
  selector: 'app-sidebar-nodes',
  templateUrl: './sidebar-nodes.component.html',
  styleUrls: ['./sidebar-nodes.component.scss'],
})
export class SidebarNodesComponent implements OnInit {
  occurrences$!: Observable<NetworkOccurrences>;

  nodes$!: Observable<NetworkNode[]>;

  markedNodes$!: Observable<NetworkNode[]>;

  numberOfColumns$!: Observable<number>;

  subtypeColumnA$!: Observable<string | null>;

  subtypeColumnB$!: Observable<string | null>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.occurrences$ = this.store.select(selectOccurrences);
    this.nodes$ = this.store.select(selectVisibleNodes);
    this.markedNodes$ = this.store.select(selectMarkedNodes);
    this.numberOfColumns$ = this.store.select(selectNumberOfColumns);
    this.subtypeColumnA$ = this.store.select(selectSubtypeColumnA);
    this.subtypeColumnB$ = this.store.select(selectSubtypeColumnB);
  }

  triggerSorting(sortByColumn: SortByEnum) {
    this.store.dispatch(sortBy({ sortByColumn }));
  }

  triggerMarkNode(node: NetworkNode) {
    this.store.dispatch(markNode({ node }));
  }

  triggerFilterTermChanged(filterTerm: string) {
    this.store.dispatch(setFilterTerm({ filterTerm }));
  }

  triggerUnmarkAllNodes() {
    this.store.dispatch(clearMarkedNodes());
  }
}
