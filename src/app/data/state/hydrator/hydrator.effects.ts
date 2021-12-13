import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { forkJoin, Observable, of } from 'rxjs';
import { AppState } from '../app.state';
import {
  hydrateAbort,
  hydrateDownloadConfigFailure,
  hydrateDownloadConfigSuccess,
  hydrateLayoutFailure,
  hydrateLayoutSuccess,
  hydrateNodesFailure,
  hydrateNodesSuccess,
  hydratePatientAPatientBFailure,
  hydratePatientAPatientBSuccess,
  hydrateSidebarVisibilityFailure,
  hydrateSidebarVisibilitySuccess,
  hydrateThresholdFailure,
  hydrateThresholdSuccess,
  hydrateTriggerDownloadSuccess,
  hydrationEnded,
  loadDataFailure,
  loadDataSuccess,
  loadQueryParams,
  markMultipleNodes,
} from './hydrator.actions';
import { ApiService } from '../../service/api.service';
import { selectConfig } from './hydrator.selectors';
import {
  selectPatientA,
  selectPatientB,
  selectPatientGroupA,
  selectPatientGroupB,
} from '../patient/patient.selectors';
import { Patient } from '../../schema/patient';
import { PatientItem } from '../../schema/patient-item';
import { NodeColorByEnum } from '../../../core/enum/node-color-by.enum';
import { NodeSizeByEnum } from '../../../core/enum/node-size-by.enum';
import { selectNodes } from '../network/network.selectors';
import { markingNodesSuccess, renderingSuccess } from '../graph/graph.actions';
import { triggerImageDownload } from '../download/download.actions';
import {
  selectExtension,
  selectScale,
  selectTransparentBackground,
} from '../download/download.selectors';
import { selectMarkedNodes } from '../nodes/nodes.selectors';

@Injectable()
export class HydratorEffects {
  loadData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadQueryParams),
      concatMap(() => {
        return forkJoin({
          network: this.apiService.loadNetwork(),
          patients: this.apiService.loadPatientsClassified(),
          thresholds: this.apiService.loadThresholds(),
        }).pipe(
          map((payload) => loadDataSuccess(payload)),
          catchError(() => of(loadDataFailure())),
        );
      }),
    );
  });

  hydratePatientAPatientB$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDataSuccess),
      concatLatestFrom(() => [
        this.store.select(selectConfig),
        this.store.select(selectPatientGroupA),
        this.store.select(selectPatientGroupB),
      ]),
      switchMap(([, config, patientsA, patientsB]) => {
        if (!config) {
          return [hydrateAbort()];
        }

        if (!config.pa && !config.pb) {
          return [hydratePatientAPatientBFailure()];
        }

        let patientA: Patient | null = null;
        let patientB: Patient | null = null;
        const observables: {
          patientADetails?: Observable<PatientItem[]>;
          patientBDetails?: Observable<PatientItem[]>;
        } = {};

        if (config.pa) {
          patientA = patientsA.find((a) => a.name === config.pa) ?? null;
          observables.patientADetails = this.apiService.loadPatientDetails(config.pa);
        }
        if (config.pb) {
          patientB = patientsB.find((a) => a.name === config.pb) ?? null;
          observables.patientADetails = this.apiService.loadPatientDetails(config.pb);
        }

        return forkJoin(observables).pipe(
          map((payload: { patientADetails: PatientItem[]; patientBDetails: PatientItem[] }) => {
            return hydratePatientAPatientBSuccess({
              patientADetails: payload.patientADetails ?? [],
              patientBDetails: payload.patientBDetails ?? [],
              patientA,
              patientB,
            });
          }),
          catchError(() => {
            return of(hydratePatientAPatientBFailure());
          }),
        );
      }),
    );
  });

  hydrateThreshold$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(hydratePatientAPatientBSuccess, hydratePatientAPatientBFailure),
      concatLatestFrom(() => this.store.select(selectConfig)),
      map(([, config]) => {
        if (!config || !config.th || Number.isNaN(config.th)) return hydrateThresholdFailure();
        return hydrateThresholdSuccess({ defined: config.th });
      }),
    );
  });

  hydrateLayout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(hydrateThresholdSuccess, hydrateThresholdFailure),
      concatLatestFrom(() => this.store.select(selectConfig)),
      map(([, config]) => {
        if (
          !config ||
          (!config.shared && !config.all && !config.mtb && !config.col && !config.size)
        )
          return hydrateLayoutFailure();

        return hydrateLayoutSuccess({
          showAll: config.all ?? false,
          showShared: config.shared ?? false,
          showMtb: config.mtb ?? true,
          nodeColorBy: (config.col as NodeColorByEnum) ?? NodeColorByEnum.geneExpressionLevel,
          nodeSizeBy: (config.size as NodeSizeByEnum) ?? NodeSizeByEnum.geneExpression,
        });
      }),
    );
  });

  hydrateNodes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(hydrateLayoutSuccess, hydrateLayoutFailure),
      concatLatestFrom(() => [
        this.store.select(selectConfig),
        this.store.select(selectNodes),
        this.store.select(selectPatientA),
        this.store.select(selectPatientB),
      ]),
      map(([, config, nodes, patientA, patientB]) => {
        if (!config || (!config.sel && !config.pa && !config.pb)) return hydrateNodesFailure();

        return hydrateNodesSuccess({
          selection: nodes.filter((a) => config.sel?.includes(a.data.id)) ?? [],
          subtypeColumnA: patientA?.subtype ?? null,
          subtypeColumnB: patientB?.subtype ?? null,
        });
      }),
    );
  });

  hydrateDownload$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(hydrateNodesSuccess, hydrateNodesFailure),
      concatLatestFrom(() => this.store.select(selectConfig)),
      map(([, config]) => {
        if (!config || !config.img) return hydrateDownloadConfigFailure();
        return hydrateDownloadConfigSuccess({ downloadConfig: config.img });
      }),
    );
  });

  hydrateSidebarVisibility$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(hydrateDownloadConfigSuccess, hydrateDownloadConfigFailure),
      concatLatestFrom(() => this.store.select(selectConfig)),
      map(([, config]) => {
        if (!config || config.sb === null) return hydrateSidebarVisibilityFailure();
        return hydrateSidebarVisibilitySuccess({ visibility: config.sb ?? 0 });
      }),
    );
  });

  markNodes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(renderingSuccess),
      concatLatestFrom(() => this.store.select(selectMarkedNodes)),
      map(([, nodes]) => {
        console.log(nodes);
        return markMultipleNodes({ nodes });
      }),
    );
  });

  triggerImageDownload$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(markingNodesSuccess),
      concatLatestFrom(() => [
        this.store.select(selectConfig),
        this.store.select(selectExtension),
        this.store.select(selectScale),
        this.store.select(selectTransparentBackground),
      ]),
      map(([, config, extension, scale, transparent]) => {
        if (!config || !config.dwn) return hydrationEnded();

        return triggerImageDownload({ imageDownloadConfig: { extension, scale, transparent } });
      }),
    );
  });

  imageDownloaded$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(hydrateTriggerDownloadSuccess),
      map(() => hydrationEnded()),
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private apiService: ApiService,
  ) {
  }
}
