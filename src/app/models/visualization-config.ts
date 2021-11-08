import { Patient } from './patient';
import { PatientItem } from './patient-item';

/**
 * Contains all aspects users can manipulate through the sidebar
 */
export interface VisualizationConfig {
  /**
   * Selected metastatic patient details
   */
  patientDetailsMetastatic: PatientItem[] | null;
  /**
   * Selected nonmetastatic patient details
   */
  patientDetailsNonmetastatic: PatientItem[] | null;
  /**
   * Selected metastatic patient
   */
  patientMetastatic: Patient | null;
  /**
   * Selected nonmetastatic patient
   */
  patientNonmetastatic: Patient | null;

  /**
   * Indicates how many patients are selected. Can either be 0, 1 or 2.
   * Used for determining the width of the nodes table
   */
  patientsSelected: number;
  /**
   * Minimum threshold
   */
  thresholdMin: number;
  /**
   * Maximum threshold
   */
  thresholdMax: number;
  /**
   * User defined threshold. Defaults to lower border {@link thresholdMin}
   */
  thresholdDefined: number;
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
