import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { patientReducer } from './patient/patient.reducer';
import { networkReducer } from './network/network.reducer';
import { layoutReducer } from './layout/layout.reducer';
import { thresholdReducer } from './threshold/threshold.reducer';
import { nodesReducer } from './nodes/nodes.reducer';
import { downloadReducer } from './download/download.reducer';

export const reducers: ActionReducerMap<AppState> = {
  patient: patientReducer,
  network: networkReducer,
  layout: layoutReducer,
  threshold: thresholdReducer,
  nodes: nodesReducer,
  download: downloadReducer,
};
