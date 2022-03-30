import { SortByEnum } from '../../../core/enum/sort-by.enum';
import { NetworkNode } from '../../schema/network-node';

export interface NodesState {
  subtypeColumnA: string | null;
  subtypeColumnB: string | null;
  numberOfColumns: number;
  sortByColumn: SortByEnum;
  filterTerm: string | null;
  markedNodes: NetworkNode[];
}
