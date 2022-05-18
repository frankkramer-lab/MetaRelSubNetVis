import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { debounceTime, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectNetwork, selectNodeAttributes } from '../network/network.selectors';
import { AppState } from '../app.state';
import { GraphService } from '../../../core/service/graph.service';

import {
  selectPatientA,
  selectPatientADetails,
  selectPatientB,
  selectPatientBDetails,
  selectPatientSelection,
} from '../patient/patient.selectors';
import { selectMarkedNodes, selectVisibleNodes } from '../nodes/nodes.selectors';
import {
  selectActiveBooleanProperty,
  selectHighlightColor,
  selectNodeColorBy,
  selectNodeSizeBy,
  selectProperties,
  selectShowAllNodes,
  selectShowOnlySharedNodes,
} from '../layout/layout.selectors';
import {
  fitGraph,
  keepNodeMarkup,
  setNodeColorBy,
  setNodeMarkup,
  setNodeSizeBy,
  toggleBooleanProperty,
  toggleShowAllNodes,
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
import { hydrateTriggerDownloadSuccess, markMultipleNodes } from '../hydrator/hydrator.actions';
import { markingNodesSuccess, renderingFailure, renderingSuccess } from './graph.actions';
import { initCoreFailure, initCoreSuccess, initializeCore } from '../network/network.actions';
import {
  setAllDefaultThresholds,
  setAllIndividualThresholds,
  setThresholdDefault,
  setThresholdIndividual,
} from '../threshold/threshold.action';

@Injectable()
export class GraphEffects {
  processGraphCore$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initializeCore),
      concatLatestFrom(() => [
        this.store.select(selectNetwork),
        this.store.select(selectProperties),
        this.store.select(selectHighlightColor),
      ]),
      map(([, network, properties, highlightColor]) => {
        if (!network) {
          return initCoreFailure();
        }
        this.graphService.initializeCore(network, properties, highlightColor);
        return initCoreSuccess();
      }),
    );
  });

  renderGraph$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        initCoreSuccess,
        setAllIndividualThresholds,
        setAllDefaultThresholds,
        setThresholdDefault,
        setThresholdIndividual,
        toggleBooleanProperty,
        setNodeColorBy,
        setNodeSizeBy,
        setNodeMarkup,
        keepNodeMarkup,
      ),
      concatLatestFrom(() => [
        this.store.select(selectPatientADetails),
        this.store.select(selectPatientBDetails),
        this.store.select(selectNetwork),
        this.store.select(selectNodeColorBy),
        this.store.select(selectNodeSizeBy),
        this.store.select(selectShowAllNodes),
        this.store.select(selectShowOnlySharedNodes),
        this.store.select(selectActiveBooleanProperty),
        this.store.select(selectVisibleNodes),
        this.store.select(selectProperties),
        this.store.select(selectNodeAttributes),
      ]),
      map(
        ([
          ,
          patientADetails,
          patientBDetails,
          network,
          nodeColorBy,
          nodeSizeBy,
          showAllNodes,
          showOnlySharedNodes,
          booleanProperty,
          visibleNodes,
          properties,
          defaultAttributes,
        ]) => {
          if (!network) return renderingFailure();
          this.graphService.layoutPatient(
            patientADetails,
            patientBDetails,
            nodeColorBy,
            nodeSizeBy,
            showAllNodes,
            showOnlySharedNodes,
            booleanProperty,
            visibleNodes,
            properties,
            defaultAttributes,
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

  markMultipleNodes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(markMultipleNodes),
      concatLatestFrom(() => this.store.select(selectMarkedNodes)),
      map(([, nodes]) => {
        this.graphService.highlightNode(nodes);
        return markingNodesSuccess();
      }),
    );
  });

  downloadTriggered$ = createEffect(() => {
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
        return hydrateTriggerDownloadSuccess();
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private graphService: GraphService,
  ) {}
}
