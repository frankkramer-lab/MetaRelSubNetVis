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
  hydrationEnded,
  loadDataFailure,
  loadDataSuccess,
  loadQueryParams,
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
import { renderingSuccess } from '../graph/graph.actions';
import { triggerImageDownload } from '../download/download.actions';
import {
  selectExtension,
  selectScale,
  selectTransparentBackground,
} from '../download/download.selectors';

@Injectable()
export class HydratorEffects {
  // hydrate$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(setupVisualizationConfigByRoute),
  //     mergeMap((action) => {
  //       const visualizationConfig: VisualizationConfig = {};
  //
  //       // loop action.params
  //       Object.keys(action.params).forEach((key) => {
  //         switch (key) {
  //           case 'sb':
  //             visualizationConfig.sb = action.params[key];
  //             break;
  //           case 'dwn':
  //             visualizationConfig.dwn = action.params[key] === 'true';
  //             break;
  //           case 'img':
  //             // todo
  //             // visualizationConfig.img = action.params[key];
  //             break;
  //           case 'col':
  //             visualizationConfig.col = action.params[key];
  //             break;
  //           case 'size':
  //             visualizationConfig.size = action.params[key];
  //             break;
  //           case 'pa':
  //             visualizationConfig.pa = action.params[key];
  //             break;
  //           case 'pb':
  //             visualizationConfig.pb = action.params[key];
  //             break;
  //           case 'sel':
  //             // todo
  //             visualizationConfig.sel = action.params[key];
  //             break;
  //           case 'all':
  //             visualizationConfig.all = action.params[key] === 'true';
  //             break;
  //           case 'mtb':
  //             visualizationConfig.mtb = action.params[key] === 'true';
  //             break;
  //           case 'shared':
  //             visualizationConfig.shared = action.params[key] === 'true';
  //             break;
  //           case 'th':
  //             if (!Number.isNaN(action.params[key])) {
  //               visualizationConfig.th = Number(action.params[key]);
  //             }
  //             break;
  //           default:
  //             console.log('Unknown key ...');
  //             break;
  //         }
  //       });
  //
  //       // todo concatMap? assure that image config is set before download
  //       const actions = [];
  //       if (visualizationConfig.sb) {
  //         actions.push(setSidebarVisibility({ visibility: visualizationConfig.sb }));
  //       }
  //
  //       return actions;
  //     }),
  //   );
  // });

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

  // 3.1: hydratePatientA
  // 3.2: hydratePatientB
  // 3.3: hydrateThreshold
  // 3.4: hydrateSelectedNodes
  // 3.5: hydrateNodesColorBy
  // 3.6: hydrateNodesSizeBy
  // 3.7: hydrateShowAllNodes
  // 3.8: hydrateShowOnlySharedNodes
  // 3.9: hydrateShowMtbResults
  // 3.10: hydrateSidebarVisibility
  // 3.11: hydrateImageDownloadConfig
  // 3.12: hydrateTriggerImageDownload

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

  // todo testing: http://localhost:4200?pa=GSM615195&th=0.0003

  // skip this, if patient hydration failed
  hydrateThreshold$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(hydratePatientAPatientBSuccess),
      concatLatestFrom(() => this.store.select(selectConfig)),
      map(([, config]) => {
        if (!config || !config.th || Number.isNaN(config.th)) return hydrateThresholdFailure();
        return hydrateThresholdSuccess({ defined: config.th });
      }),
    );
  });

  hydrateLayout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(hydrateThresholdSuccess, hydratePatientAPatientBFailure),
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
      ofType(hydrateLayoutSuccess, hydrateThresholdFailure),
      concatLatestFrom(() => [
        this.store.select(selectConfig),
        this.store.select(selectNodes),
        this.store.select(selectPatientA),
        this.store.select(selectPatientB),
      ]),
      map(([, config, nodes, patientA, patientB]) => {
        if (!config) return hydrateNodesFailure();

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
      ofType(hydrateNodesSuccess, hydrateLayoutFailure),
      concatLatestFrom(() => this.store.select(selectConfig)),
      map(([, config]) => {
        if (!config || !config.img) return hydrateDownloadConfigFailure();
        return hydrateDownloadConfigSuccess({ downloadConfig: config.img });
      }),
    );
  });

  hydrateSidebarVisibility$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(hydrateDownloadConfigSuccess, hydrateNodesFailure),
      concatLatestFrom(() => this.store.select(selectConfig)),
      map(([, config]) => {
        if (!config || !config.sb) return hydrateSidebarVisibilityFailure();
        return hydrateSidebarVisibilitySuccess({ visibility: config.sb });
      }),
    );
  });

  triggerImageDownload$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(renderingSuccess),
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
    },
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private apiService: ApiService,
  ) {}
}
