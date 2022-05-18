import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Router } from '@angular/router';
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
  selectGroupADetails,
  selectGroupBDetails,
  selectPatientA,
  selectPatientB,
  selectPatientGroupA,
  selectPatientGroupB,
  selectPatientSelection,
} from '../patient/patient.selectors';
import { Patient } from '../../schema/patient';
import { AttributeItem } from '../../schema/attribute-item';
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
import { setUuid } from '../network/network.actions';
import { selectRelevantProperties } from '../layout/layout.selectors';
import { PropertyTypeEnum } from '../../../core/enum/property-type-enum';
import { Property } from '../../schema/property';
import { PropertyScopeEnum } from '../../../core/enum/property-scope.enum';
import { ThresholdCollection } from '../../schema/threshold-collection';
import { PatientSelectionEnum } from '../../../core/enum/patient-selection-enum';

@Injectable()
export class HydratorEffects {
  loadQueryParams$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadQueryParams),
      concatLatestFrom(() => [this.store.select(selectConfig)]),
      map(([, config]) => {
        if (!config || !config.uuid) {
          return hydrateAbort();
        }
        return setUuid({ uuid: config.uuid });
      }),
    );
  });

  loadDataNdex$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setUuid),
      mergeMap((action) => {
        if (!action.uuid || action.uuid.trim() === '') {
          return of(loadDataFailure({ uuid: '' }));
        }

        return this.apiService.loadNetwork(action.uuid).pipe(
          map((data) => {
            let nodesDictionary: any = {};
            let nodesRaw: any[] = [];
            let edgesRaw: any[] = [];
            let nodeAttributes: any;
            let networkAttributes: any;
            let metaRelSubNetVis: any;
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
              if (aspect.metaRelSubNetVis) {
                metaRelSubNetVis = aspect.metaRelSubNetVis;
              }
            });

            const network: Network = {
              edges: [],
              nodes: [],
              occ: {},
            };

            let patients: PatientCollection = {
              detailsA: {},
              detailsB: {},
              groupA: [],
              groupB: [],
              labelA: '',
              labelB: '',
            };

            let subtypes: string[] = [];

            nodesDictionary = this.hydratorService.hydrateNodesMap(nodesRaw);

            subtypes = this.hydratorService.hydrateNetworkAttributes(
              networkAttributes,
              patients,
              labels,
              action.uuid,
            );

            patients = { ...patients, labelA: labels[1], labelB: labels[2] };

            const properties = this.hydratorService.initProperties(metaRelSubNetVis);
            const highlightColor = this.hydratorService.hydrateHighlightColor(metaRelSubNetVis);

            patients = this.hydratorService.hydrateNodeAttributes(
              nodeAttributes,
              patients,
              nodesDictionary,
              properties,
            );

            if (patients.groupA.length < 1 || patients.groupB.length < 1) {
              return loadDataFailure({ uuid: action.uuid ?? '' });
            }

            const defaultAttributes = this.hydratorService.hydrateDefaultAttributes(
              nodeAttributes,
              nodesDictionary,
              properties,
            );

            network.occ = this.hydratorService.hydrateOccurrences(patients);
            network.nodes = this.hydratorService.hydrateNodes(nodesRaw, patients, subtypes);
            network.edges = this.hydratorService.hydrateEdges(edgesRaw);

            const thresholds: ThresholdCollection =
              this.hydratorService.hydrateThresholds(properties);

            return loadDataSuccess({
              network,
              patients,
              thresholds,
              headline: labels[0],
              properties,
              highlightColor,
              defaultAttributes,
            });
          }),
          catchError(() => of(loadDataFailure({ uuid: action.uuid ?? '' }))),
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
        this.store.select(selectGroupADetails),
        this.store.select(selectGroupBDetails),
      ]),
      map(([, config, patientsA, patientsB, detailsA, detailsB]) => {
        if (!config) {
          return hydrateAbort();
        }

        if (!config.pa && !config.pb) {
          return hydratePatientAPatientBFailure();
        }

        let patientA: Patient | null = null;
        let patientB: Patient | null = null;
        let patientADetails: AttributeItem[] | null = null;
        let patientBDetails: AttributeItem[] | null = null;

        if (config.pa) {
          patientA = patientsA.find((a) => a.name === config.pa) ?? null;
          patientADetails = detailsA[config.pa];
        }
        if (config.pb) {
          patientB = patientsB.find((a) => a.name === config.pb) ?? null;
          patientBDetails = detailsB[config.pb];
        }

        return hydratePatientAPatientBSuccess({
          patientA,
          patientB,
          patientADetails: patientADetails ?? [],
          patientBDetails: patientBDetails ?? [],
        });
      }),
    );
  });

  hydrateThreshold$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(hydratePatientAPatientBSuccess, hydratePatientAPatientBFailure),
      concatLatestFrom(() => [
        this.store.select(selectConfig),
        this.store.select(selectRelevantProperties),
        this.store.select(selectPatientSelection),
      ]),
      map(([, config, properties, patientSelection]) => {
        if (!config || !config.th) return hydrateThresholdFailure();

        const thresholds: ThresholdCollection = {
          default: [],
          individual: [],
        };

        Object.entries(config.th).forEach(([key, value]) => {
          const numericValue = Number(value);
          const property = properties.find(
            (a: Property) => a.name === key && a.type === PropertyTypeEnum.continuous,
          );

          if (property && !Number.isNaN(numericValue)) {
            (patientSelection === PatientSelectionEnum.none
              ? thresholds.default
              : thresholds.individual
            ).push({
              defined: numericValue,
              property,
              scope: PropertyScopeEnum.individual,
            });
          }
        });
        console.log(thresholds);
        return hydrateThresholdSuccess({ thresholds });
      }),
    );
  });

  hydrateLayout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(hydrateThresholdSuccess, hydrateThresholdFailure),
      concatLatestFrom(() => [
        this.store.select(selectConfig),
        this.store.select(selectRelevantProperties),
      ]),
      map(([, config, properties]) => {
        if (!config || (!config.shared && !config.all && !config.col && !config.size))
          return hydrateLayoutFailure();

        const booleanProperty = properties.find(
          (a: Property) => a.name === config.bool && a.type === PropertyTypeEnum.boolean,
        );

        const colProperty = properties.find(
          (a: Property) => a.name === config.col && a.type !== PropertyTypeEnum.boolean,
        );
        const sizeProperty = properties.find(
          (a: Property) => a.name === config.size && a.type !== PropertyTypeEnum.boolean,
        );

        return hydrateLayoutSuccess({
          showAll: config.all ?? false,
          showShared: config.shared ?? false,
          booleanProperty: booleanProperty ?? null,
          nodeColorBy: colProperty ?? null,
          nodeSizeBy: sizeProperty ?? null,
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

        return hydrateSidebarVisibilitySuccess({
          visibility: config.sb ?? 0,
          cmpPatientsVis: config.cP ?? 1,
          cmpThresholdVis: config.cT ?? 1,
          cmpNodesVis: config.cN ?? 1,
          cmpLayoutVis: config.cL ?? 1,
          cmpDownloadVis: config.cD ?? 1,
          cmpGeneratorVis: config.cG ?? 1,
          cmpImpressumVis: config.cIm ?? 1,
          backButtonVis: config.bb ?? true,
        });
      }),
    );
  });

  triggerRoutingSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(hydrateSidebarVisibilitySuccess, hydrateSidebarVisibilityFailure),
        map(() => {
          this.router.navigate(['/network']);
        }),
      );
    },
    { dispatch: false },
  );

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
    private router: Router,
  ) {}
}
