import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
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
  loadDataJsonSuccess,
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
import { PatientCollection } from '../../schema/patient-collection';
import { HydratorService } from '../../../core/service/hydrator.service';
import { Network } from '../../schema/network';
import { Threshold } from '../../schema/threshold';

@Injectable()
export class HydratorEffects {
  loadDataNdex$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadQueryParams),
      switchMap(() =>

        // todo move to input field
        this.apiService.loadDataNdex('a420aaee-4be9-11ec-b3be-0ac135e8bacf').pipe(
          map((data) => {
            console.log(data);

            let nodesDictionary: any = {};
            let nodesRaw: any[] = [];
            let edgesRaw: any[] = [];
            let nodeAttributes: any;
            let networkAttributes: any;
            const labels: string[] = [];

            (data as any[]).forEach((aspect) => {
              if (aspect.nodes) {
                nodesRaw = aspect.nodes;
              }
              if (aspect.networkAttributes) {
                networkAttributes = aspect.networkAttributes;
              }
              if (aspect.nodeAttributes) {
                nodeAttributes = aspect.nodeAttributes;
              }
              if (aspect.edges) {
                edgesRaw = aspect.edges;
              }
            });

            const network: Network = {
              edges: [],
              nodes: [],
              occ: {},
            };

            let patients: PatientCollection = {
              detailsA: {}, // { patient-name => PatientItem[] } , list of patients with each a list of all this patient's protein expressions
              detailsB: {},
              groupA: [], // { name: '', mfsYears: 0, subtype: '' }, basics for each patient
              groupB: [],
              labelA: '',
              labelB: '',
              geMin: Number.MAX_SAFE_INTEGER,
              geMax: Number.MIN_SAFE_INTEGER,
            };

            let subtypes: string[] = [];

            nodesDictionary = this.hydratorService.hydrateNodesMap(nodesRaw); // contains id => name map for each node

            subtypes = this.hydratorService.hydrateNetworkAttributes(
              networkAttributes,
              patients,
              labels,
            );

            patients = { ...patients, labelA: labels[0], labelB: labels[1] };

            patients = this.hydratorService.hydrateNodeAttributes(
              nodeAttributes,
              patients,
              nodesDictionary,
            );

            network.occ = this.hydratorService.hydrateOccurrences(patients);
            network.nodes = this.hydratorService.hydrateNodes(nodesRaw, patients, subtypes);
            network.edges = this.hydratorService.hydrateEdges(edgesRaw);

            console.log(network);
            console.log(patients);


            // todo
            // const patientDetails: PatientItem[][] = [];
            const thresholds: Threshold = this.hydratorService.hydrateThresholds(patients);

            return loadDataSuccess({
              network,
              patients,
              thresholds,
            });

            // todo payload
            // {
            //   network: Network, // contains nodes, edges, occurrences
            //   patients: PatientCollection, // contains patients and basic info
            //   thresholds: Threshold // min and max scores per group
            // }
          }),
          catchError(() => of(loadDataFailure())),
        ),
      ),
    );
  });

  // loadData$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(loadQueryParams),
  //     concatMap(() => {
  //       return forkJoin({
  //         network: this.apiService.loadNetwork(),
  //         patients: this.apiService.loadPatientsClassified(),
  //         thresholds: this.apiService.loadThresholds(),
  //       }).pipe(
  //         map((payload) => loadDataSuccess(payload)),
  //         catchError(() => of(loadDataFailure())),
  //       );
  //     }),
  //   );
  // });

  hydratePatientAPatientB$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDataJsonSuccess, loadDataSuccess),
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
          selection: nodes.filter((a) => config.sel?.includes(a.data.id.toString())) ?? [],
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
    private hydratorService: HydratorService,
  ) {
  }
}
