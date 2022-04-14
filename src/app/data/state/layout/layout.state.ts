import { Property } from '../../schema/property';

export interface LayoutState {
  nodeColorBy: Property | null;
  nodeSizeBy: Property | null;
  showAllNodes: boolean;
  showOnlySharedNodes: boolean;
  booleanProperty: Property | null;
  properties: Property[];
  highlightColor: string;
}
