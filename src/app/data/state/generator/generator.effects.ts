import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {
  copyToClipboard,
  setGeneratorImageExtension,
  setGeneratorImageScale,
  setGeneratorSidebarVisibility,
  setQueryParams,
  toggleGeneratorImageBackground,
  toggleGeneratorTriggerImmediateDownload,
} from './generator.actions';
import { AppState } from '../app.state';
import {
  selectDomain,
  selectImageDownloadConfig,
  selectQueryParams,
  selectSidebarVisibility,
  selectTriggerImmediateDownload,
} from './generator.selectors';
import { selectPatientA, selectPatientB } from '../patient/patient.selectors';
import { selectMarkedNodes } from '../nodes/nodes.selectors';
import {
  selectNodeColorBy,
  selectNodeSizeBy,
  selectShowAllNodes,
  selectShowMtbResults,
  selectShowOnlySharedNodes,
} from '../layout/layout.selectors';
import { markNode } from '../nodes/nodes.actions';
import {
  setNodeColorBy,
  setNodeSizeBy,
  toggleShowAllNodes,
  toggleShowMtbResults,
  toggleShowOnlySharedNodes,
} from '../layout/layout.actions';
import { hydrateAbort, hydrationEnded } from '../hydrator/hydrator.actions';
import { selectDefined } from '../threshold/threshold.selectors';
import { NetworkNode } from '../../schema/network-node';

@Injectable()
export class GeneratorEffects {
  buildUrl$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        setGeneratorImageScale,
        setGeneratorImageExtension,
        toggleGeneratorImageBackground,
        toggleGeneratorTriggerImmediateDownload,
        setGeneratorSidebarVisibility,
        markNode,
        setNodeColorBy,
        setNodeSizeBy,
        toggleShowAllNodes,
        toggleShowOnlySharedNodes,
        toggleShowMtbResults,
        hydrateAbort,
        hydrationEnded,
      ),
      concatLatestFrom(() => [
        this.store.select(selectImageDownloadConfig),
        this.store.select(selectTriggerImmediateDownload),
        this.store.select(selectSidebarVisibility),
        this.store.select(selectPatientA),
        this.store.select(selectPatientB),
        this.store.select(selectDefined),
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
          imageDownloadConfig,
          triggerImageDownload,
          sidebarVisibility,
          patientA,
          patientB,
          defined,
          markedNodes,
          nodeColorBy,
          nodeSizeBy,
          showAll,
          showShared,
          showMtb,
        ]) => {
          const queryParams: string[] = [];
          if (patientA) {
            queryParams.push(`pa=${patientA.name}`);
          }
          if (patientB) {
            queryParams.push(`pb=${patientB.name}`);
          }
          if (defined) {
            queryParams.push(`th=${defined}`);
          }
          if (markedNodes && markedNodes.length > 0) {
            queryParams.push(`sel=${markedNodes.map((a: NetworkNode) => a.data.id).join(',')}`);
          }
          if (nodeColorBy !== null) {
            queryParams.push(`col=${nodeColorBy}`);
          }
          if (nodeSizeBy !== null) {
            queryParams.push(`size=${nodeSizeBy}`);
          }
          if (showAll !== null) {
            queryParams.push(`all=${showAll}`);
          }
          if (showShared !== null) {
            queryParams.push(`shared=${showShared}`);
          }
          if (showMtb !== null) {
            queryParams.push(`mtb=${showMtb}`);
          }
          if (sidebarVisibility !== null) {
            queryParams.push(`sb=${sidebarVisibility}`);
          }
          if (triggerImageDownload) {
            queryParams.push(`dwn=${triggerImageDownload}`);
            if (imageDownloadConfig) {
              queryParams.push(
                `img=${imageDownloadConfig.extension},${imageDownloadConfig.scale},${imageDownloadConfig.transparent}`,
              );
            }
          }
          return setQueryParams({ queryParams: `?${queryParams.join('&')}` });
        },
      ),
    );
  });

  copyToClipboard$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(copyToClipboard),
        concatLatestFrom(() => [
          this.store.select(selectQueryParams),
          this.store.select(selectDomain),
        ]),
        map(([, queryParams, domain]) => {
          navigator.clipboard.writeText(`${domain}${queryParams}`);
        }),
      );
    },
    { dispatch: false },
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
