import { NodeColorByEnum } from '../../../core/enum/node-color-by.enum';
import { NodeSizeByEnum } from '../../../core/enum/node-size-by.enum';
import { Property } from '../../schema/property';

export interface LayoutState {
  nodeColorBy: Property | null;
  nodeSizeBy: NodeSizeByEnum;
  showAllNodes: boolean;
  showOnlySharedNodes: boolean;
  showMtbResults: boolean;
  properties: Property[];
  highlightColor: string;
}
