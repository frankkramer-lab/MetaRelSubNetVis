import { NodeColorByEnum } from '../../../core/enum/node-color-by.enum';
import { NodeSizeByEnum } from '../../../core/enum/node-size-by.enum';

export interface LayoutState {
  nodeColorBy: NodeColorByEnum;
  nodeSizeBy: NodeSizeByEnum;
  showAllNodes: boolean;
  showOnlySharedNodes: boolean;
  showMtbResults: boolean;
}
