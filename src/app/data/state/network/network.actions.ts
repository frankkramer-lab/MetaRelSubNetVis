import { createAction, props } from '@ngrx/store';
import { Network } from '../../schema/network';

export const loadNetworkDataSuccess = createAction(
  '[API] load network data success',
  props<{ network: Network }>(),
);
export const loadNetworkDataFailure = createAction('[API] load network data failure');
