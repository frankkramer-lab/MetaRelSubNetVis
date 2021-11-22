import { PatientEffects } from './patient/patient.effects';
import { NetworkEffects } from './network/network.effects';
import { GraphEffects } from './graph/graph.effects';
import { ThresholdEffects } from './threshold/threshold.effects';
import { NodesEffects } from './nodes/nodes.effects';

export const effects: any[] = [
  PatientEffects,
  NetworkEffects,
  GraphEffects,
  ThresholdEffects,
  NodesEffects,
];
