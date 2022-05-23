import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ApiService } from '../../service/api.service';
import { AppState } from '../app.state';
import { setPatientSelection } from '../patient/patient.actions';
import { selectIsAnyPatientSelected, selectPatientSelection } from '../patient/patient.selectors';
import { selectRelevantThresholds } from './threshold.selectors';
import { PatientSelectionEnum } from '../../../core/enum/patient-selection-enum';
import { ThresholdDefinition } from '../../schema/threshold-definition';
import {
  keepAllThresholds,
  setAllDefaultThresholds,
  setAllIndividualThresholds,
} from './threshold.action';

@Injectable()
export class ThresholdEffects {
  resetDefined$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setPatientSelection),
      concatLatestFrom(() => [
        this.store.select(selectPatientSelection),
        this.store.select(selectRelevantThresholds),
        this.store.select(selectIsAnyPatientSelected),
      ]),
      map(([action, patientSelection, thresholds, isAnyPatientSelected]) => {
        // was there a change in patient selection?
        if (action.previousSelection !== patientSelection) {
          // update the all thresholds with the valid defined settings

          const newThresholds: ThresholdDefinition[] = [];

          thresholds.forEach((th: ThresholdDefinition) => {
            switch (patientSelection) {
              case PatientSelectionEnum.groupA:
                newThresholds.push({ ...th, defined: th.property.minA ?? Number.MIN_SAFE_INTEGER });
                break;
              case PatientSelectionEnum.groupB:
                newThresholds.push({ ...th, defined: th.property.minB ?? Number.MIN_SAFE_INTEGER });
                break;
              case PatientSelectionEnum.both:
                newThresholds.push({
                  ...th,
                  defined: Math.min(
                    th.property.minB ?? Number.MAX_SAFE_INTEGER,
                    th.property.minA ?? Number.MAX_SAFE_INTEGER,
                  ),
                });
                break;
              case PatientSelectionEnum.none:
              default:
                newThresholds.push({
                  ...th,
                  defined: th.property.min ?? Number.MIN_SAFE_INTEGER,
                });
                break;
            }
          });

          if (isAnyPatientSelected)
            return setAllIndividualThresholds({ individual: newThresholds });
          return setAllDefaultThresholds({ defaults: newThresholds });
        }
        return keepAllThresholds();
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store<AppState>,
  ) {}
}
