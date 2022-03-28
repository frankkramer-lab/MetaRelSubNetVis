import { createAction, props } from '@ngrx/store';
import { NetworkSearchItem } from '../../schema/network-search-item';
import { NetworkSearch } from '../../schema/network-search';

export const loadSampleSummaries = createAction('[Home Component] load sample summaries');

export const loadSampleSummariesSuccess = createAction(
  '[Home Effects] load sample summaries success',
  props<{ sampleNetworks: NetworkSearchItem[] }>(),
);
export const loadSampleSummariesFailure = createAction(
  '[Home Effects] load sample summaries failure',
);

export const loadNetworkSummaries = createAction(
  '[Home Component] load network summaries',
  props<{ searchTerm: string }>(),
);

export const loadNetworkSummariesSuccess = createAction(
  '[Home Effects] load network summaries success',
  props<{ search: NetworkSearch }>(),
);

export const loadNetworkSummariesFailure = createAction(
  '[Home Effects] load network summaries failure',
);
