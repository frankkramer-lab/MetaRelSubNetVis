import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from '../app.state';
import { setPatientSelection } from '../patient/patient.actions';
import { selectPatientSelection } from '../patient/patient.selectors';
import { PatientSelectionEnum } from '../../../core/enum/patient-selection-enum';
import { selectProperties } from './layout.selectors';
import { PropertyTypeEnum } from '../../../core/enum/property-type-enum';
import { keepNodeMarkup, setNodeMarkup } from './layout.actions';
import { Property } from '../../schema/property';

@Injectable()
export class LayoutEffects {
  updateNodeStyle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setPatientSelection),
      concatLatestFrom(() => [
        this.store.select(selectPatientSelection),
        this.store.select(selectProperties),
      ]),
      map(([action, curr, properties]) => {
        const prev = action.previousSelection;
        let property: Property | null = null;

        // not a group-internal change in patient selection
        if (prev !== curr) {
          if (prev === PatientSelectionEnum.none) {
            // none => A | B
            const individualContinuous = properties.individual.map(
              (a) => a.type === PropertyTypeEnum.continuous,
            );
            if (individualContinuous.length > 0) {
              property =
                properties.individual.find((a) => a.type === PropertyTypeEnum.continuous) ?? null;
            } else {
              property =
                properties.individual.find((a) => a.type === PropertyTypeEnum.discrete) ?? null;
            }
            return setNodeMarkup({ property });
          }
          if (curr === PatientSelectionEnum.none) {
            // A | B => none
            const defaultContinuous = properties.default.map(
              (a) => a.type === PropertyTypeEnum.continuous,
            );
            if (defaultContinuous.length > 0) {
              property =
                properties.default.find((a) => a.type === PropertyTypeEnum.continuous) ?? null;
            } else {
              property =
                properties.default.find((a) => a.type === PropertyTypeEnum.discrete) ?? null;
            }
            return setNodeMarkup({ property });
          }
          return keepNodeMarkup();
        }
        return keepNodeMarkup();
      }),
    );
  });

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
