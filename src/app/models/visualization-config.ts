import { Patient } from './patient';
import { PatientItem } from './patient-item';

/**
 * Contains all aspects users can manipulate through the sidebar
 */
export interface VisualizationConfig {
  /**
   * Selected metastatic patient details
   */
  patientDetailsMetastatic: PatientItem | null;
  /**
   * Selected nonmetastatic patient details
   */
  patientDetailsNonmetastatic: PatientItem | null;
  /**
   * Selected metastatic patient
   */
  patientMetastatic: Patient | null;
  /**
   * Selected nonmetastatic patient
   */
  patientNonmetastatic: Patient | null;
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
