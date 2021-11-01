/**
 * Contains all aspects users can manipulate through the sidebar
 */
export interface VisualizationConfig {
  /**
   * Selected metastatic patient
   */
  patientMetastatic: string;
  /**
   * Selected nonmetastatic patient
   */
  patientNonmetastatic: string;
  /**
   * Selected threshold
   */
  threshold: number;
  /**
   * Selected nodes
   */
  selectedNodes: string[];
  /**
   * Show all nodes
   */
  showAllNodes: boolean;
  /**
   * Show MTB results
   */
  showMtbResults: boolean;
  /**
   * Show only shared nodes
   */
  showOnlySharedNodes: boolean;
  /**
   * Color nodes by {@link ColorNodesBy}
   */
  colorNodesBy: number;
  /**
   * Node size by {@link NodeSizeBy}
   */
  nodeSizeBy: number;
}
