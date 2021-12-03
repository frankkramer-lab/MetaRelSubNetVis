import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { debounceTime, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectNetwork } from '../network/network.selectors';
import { AppState } from '../app.state';
import { ApiService } from '../../service/api.service';
import { GraphService } from '../../../core/service/graph.service';

import {
  selectGeMax,
  selectGeMin,
  selectPatientA,
  selectPatientADetails,
  selectPatientB,
  selectPatientBDetails,
  selectPatientGroupA,
  selectPatientGroupB,
  selectPatientSelection,
} from '../patient/patient.selectors';
import {
  selectDefined,
  selectMaxA,
  selectMaxB,
  selectMinA,
  selectMinB,
} from '../threshold/threshold.selectors';
import { selectMarkedNodes } from '../nodes/nodes.selectors';
import {
  selectNodeColorBy,
  selectNodeSizeBy,
  selectShowAllNodes,
  selectShowMtbResults,
  selectShowOnlySharedNodes,
} from '../layout/layout.selectors';
import { setDefined } from '../threshold/threshold.action';
import {
  fitGraph,
  setNodeColorBy,
  setNodeSizeBy,
  toggleShowAllNodes,
  toggleShowMtbResults,
  toggleShowOnlySharedNodes,
} from '../layout/layout.actions';
import { clearMarkedNodes, markNode } from '../nodes/nodes.actions';
import { triggerImageDownload } from '../download/download.actions';
import {
  selectExtension,
  selectScale,
  selectTransparentBackground,
} from '../download/download.selectors';
import { ImageDownloadConfig } from '../../schema/image-download-config';
import {
  hydrateDownloadConfigFailure,
  hydrateSidebarVisibilitySuccess,
  loadDataSuccess,
} from '../hydrator/hydrator.actions';
import { renderingFailure, renderingSuccess } from './graph.actions';

@Injectable()
export class GraphEffects {
  processGraphCore$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadDataSuccess),
        concatLatestFrom(() => this.store.select(selectNetwork)),
        map(([, network]) => {
          if (!network) {
            return;
          }
          this.graphService.initializeCore(network);
        }),
      );
    },
    { dispatch: false },
  );

  // is also called during hydration
  patientSelectionChanged$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        setDefined,
        toggleShowMtbResults,
        setNodeColorBy,
        setNodeSizeBy,
        hydrateSidebarVisibilitySuccess,
        hydrateDownloadConfigFailure,
      ),
      concatLatestFrom(() => [
        this.store.select(selectPatientADetails),
        this.store.select(selectPatientBDetails),
        this.store.select(selectPatientGroupA),
        this.store.select(selectPatientGroupB),
        this.store.select(selectGeMin),
        this.store.select(selectGeMax),
        this.store.select(selectNetwork),
        this.store.select(selectDefined),
        this.store.select(selectMinA),
        this.store.select(selectMaxA),
        this.store.select(selectMinB),
        this.store.select(selectMaxB),
        this.store.select(selectMarkedNodes),
        this.store.select(selectNodeColorBy),
        this.store.select(selectNodeSizeBy),
        this.store.select(selectShowAllNodes),
        this.store.select(selectShowOnlySharedNodes),
        this.store.select(selectShowMtbResults),
      ]),
      map(
        ([
          ,
          patientADetails,
          patientBDetails,
          patientGroupA,
          patientGroupB,
          geMin,
          geMax,
          network,
          defined,
          minA,
          maxA,
          minB,
          maxB,
          markedNodes,
          nodeColorBy,
          nodeSizeBy,
          showAllNodes,
          showOnlySharedNodes,
          showMtbResults,
        ]) => {
          if (!network) return renderingFailure();
          this.graphService.layoutPatient(
            patientADetails,
            patientBDetails,
            patientGroupA,
            patientGroupB,
            geMin,
            geMax,
            network,
            defined,
            minA,
            maxA,
            minB,
            maxB,
            markedNodes,
            nodeColorBy,
            nodeSizeBy,
            showAllNodes,
            showOnlySharedNodes,
            showMtbResults,
          );
          return renderingSuccess();
        },
      ),
      debounceTime(1000),
    );
  });

  showAllOrSharedNodesToggled$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(toggleShowAllNodes, toggleShowOnlySharedNodes),
        concatLatestFrom(() => [
          this.store.select(selectShowAllNodes),
          this.store.select(selectShowOnlySharedNodes),
        ]),
        map(([, showAllNodes, showOnlySharedNodes]) =>
          this.graphService.updateShownNodes(showAllNodes, showOnlySharedNodes),
        ),
      );
    },
    { dispatch: false },
  );

  fitGraphTriggered$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(fitGraph),
        map(() => this.graphService.fitGraph()),
      );
    },
    { dispatch: false },
  );

  markNodesChanged$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(markNode, clearMarkedNodes),
        concatLatestFrom(() => [this.store.select(selectMarkedNodes)]),
        map(([, markedNodes]) => this.graphService.highlightNode(markedNodes)),
      );
    },
    { dispatch: false },
  );

  downloadTriggered$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(triggerImageDownload),
        concatLatestFrom(() => [
          this.store.select(selectExtension),
          this.store.select(selectScale),
          this.store.select(selectTransparentBackground),
          this.store.select(selectPatientA),
          this.store.select(selectPatientB),
          this.store.select(selectPatientSelection),
        ]),
        map(([, extension, scale, transparent, patientA, patientB, patientSelection]) => {
          const config: ImageDownloadConfig = {
            extension,
            scale,
            transparent,
          };
          this.graphService.downloadImage(config, patientA, patientB, patientSelection);
        }),
      );
    },
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private apiService: ApiService,
    private graphService: GraphService,
  ) {}
}
