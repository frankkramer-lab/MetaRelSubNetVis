import { Property } from '../../schema/property';

export interface LayoutState {
  nodeColorBy: Property | null;
  nodeSizeBy: Property | null;
  showAllNodes: boolean;
  showOnlySharedNodes: boolean;
  showMtbResults: boolean;
  properties: Property[];
  highlightColor: string;
}
