import { VisualizationConfig } from '../../schema/visualization-config';

export interface HydratorState {
  config: VisualizationConfig | null;
  hydrationInProgress: boolean;
}
