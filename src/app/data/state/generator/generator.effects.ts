import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {
  copyToClipboard,
  setComponentVisibilityDownload,
  setComponentVisibilityGenerator,
  setComponentVisibilityImport,
  setComponentVisibilityImpressum,
  setComponentVisibilityLayout,
  setComponentVisibilityNodes,
  setComponentVisibilityPatients,
  setComponentVisibilityThreshold,
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
  selectGenCmpVisDownload,
  selectGenCmpVisGenerator,
  selectGenCmpVisImport,
  selectGenCmpVisImpressum,
  selectGenCmpVisLayout,
  selectGenCmpVisNodes,
  selectGenCmpVisPatients,
  selectGenCmpVisThreshold,
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
import { selectUuid } from '../network/network.selectors';
import { ComponentVisibilityEnum } from '../../../core/enum/component-visibility.enum';

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
        setComponentVisibilityImport,
        setComponentVisibilityPatients,
        setComponentVisibilityThreshold,
        setComponentVisibilityNodes,
        setComponentVisibilityLayout,
        setComponentVisibilityDownload,
        setComponentVisibilityGenerator,
        setComponentVisibilityImpressum,
      ),
      concatLatestFrom(() => [
        this.store.select(selectUuid),
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
        this.store.select(selectGenCmpVisImport),
        this.store.select(selectGenCmpVisPatients),
        this.store.select(selectGenCmpVisThreshold),
        this.store.select(selectGenCmpVisNodes),
        this.store.select(selectGenCmpVisLayout),
        this.store.select(selectGenCmpVisDownload),
        this.store.select(selectGenCmpVisGenerator),
        this.store.select(selectGenCmpVisImpressum),
      ]),
      map(
        ([
          ,
          uuid,
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
          cmpImport,
          cmpPatients,
          cmpThreshold,
          cmpNodes,
          cmpLayout,
          cmpDownload,
          cmpGenerator,
          cmpImpressum,
        ]) => {
          const queryParams: string[] = [];
          if (!uuid) {
            return setQueryParams({ queryParams: `?${queryParams.join('&')}` });
          }

          queryParams.push(`uuid=${uuid}`);

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
          if (triggerImageDownload) {
            queryParams.push(`dwn=${triggerImageDownload}`);
            if (imageDownloadConfig) {
              queryParams.push(
                `img=${imageDownloadConfig.extension},${imageDownloadConfig.scale},${imageDownloadConfig.transparent}`,
              );
            }
          }

          if (sidebarVisibility !== null) {
            queryParams.push(`sb=${sidebarVisibility}`);
            if (sidebarVisibility !== ComponentVisibilityEnum.none) {
              queryParams.push(`cIn=${cmpImport}`);
              queryParams.push(`cP=${cmpPatients}`);
              queryParams.push(`cT=${cmpThreshold}`);
              queryParams.push(`cN=${cmpNodes}`);
              queryParams.push(`cL=${cmpLayout}`);
              queryParams.push(`cD=${cmpDownload}`);
              queryParams.push(`cG=${cmpGenerator}`);
              queryParams.push(`cIm=${cmpImpressum}`);
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
