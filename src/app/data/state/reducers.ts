import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { patientReducer } from './patient/patient.reducer';
import { networkReducer } from './network/network.reducer';
import { layoutReducer } from './layout/layout.reducer';
import { thresholdReducer } from './threshold/threshold.reducer';
import { nodesReducer } from './nodes/nodes.reducer';
import { downloadReducer } from './download/download.reducer';
import { sidebarReducer } from './sidebar/sidebar.reducer';
import { hydratorReducer } from './hydrator/hydrator.reducer';
import { generatorReducer } from './generator/generator.reducer';

export const reducers: ActionReducerMap<AppState> = {
  sidebar: sidebarReducer,
  patient: patientReducer,
  network: networkReducer,
  layout: layoutReducer,
  threshold: thresholdReducer,
  nodes: nodesReducer,
  download: downloadReducer,
  hydrator: hydratorReducer,
  generator: generatorReducer,
};
