import { PatientEffects } from './patient/patient.effects';
import { GraphEffects } from './graph/graph.effects';
import { ThresholdEffects } from './threshold/threshold.effects';
import { NodesEffects } from './nodes/nodes.effects';
import { HydratorEffects } from './hydrator/hydrator.effects';

export const effects: any[] = [
  PatientEffects,
  GraphEffects,
  ThresholdEffects,
  NodesEffects,
  HydratorEffects,
];
