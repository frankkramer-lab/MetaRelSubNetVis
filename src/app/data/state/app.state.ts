import { PatientState } from './patient/patient.state';
import { NetworkState } from './network/network.state';
import { LayoutState } from './layout/layout.state';
import { ThresholdState } from './threshold/threshold.state';
import { NodesState } from './nodes/nodes.state';
import { DownloadState } from './download/download.state';

export interface AppState {
  patient: PatientState;
  network: NetworkState;
  layout: LayoutState;
  threshold: ThresholdState;
  nodes: NodesState;
  download: DownloadState;
}
