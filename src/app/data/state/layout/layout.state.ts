import { Property } from '../../schema/property';
import { PropertyCollection } from '../../schema/property-collection';

export interface LayoutState {
  nodeColorBy: Property | null;
  nodeSizeBy: Property | null;
  showAllNodes: boolean;
  showOnlySharedNodes: boolean;
  booleanProperty: Property | null;
  properties: PropertyCollection;
  highlightColor: string;
}
