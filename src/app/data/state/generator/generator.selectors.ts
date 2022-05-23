import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { GeneratorState } from './generator.state';
import { selectMarkedNodes } from '../nodes/nodes.selectors';
import { selectUuid } from '../network/network.selectors';
import { selectPatientA, selectPatientB } from '../patient/patient.selectors';
import { selectLayoutState } from '../layout/layout.selectors';
import { NetworkNode } from '../../schema/network-node';
import { ComponentVisibilityEnum } from '../../../core/enum/component-visibility.enum';
import { selectThresholds } from '../threshold/threshold.selectors';

const selectState = createSelector(
  (appState: AppState) => appState.generator,
  (state: GeneratorState) => state,
);

export const selectIsImageDownloadConfigValid = createSelector(
  selectState,
  (state: GeneratorState) => state.isImageDownloadConfigValid,
);
export const selectImageDownloadConfig = createSelector(
  selectState,
  (state: GeneratorState) => state.imageDownloadConfig,
);
export const selectSidebarVisibility = createSelector(
  selectState,
  (state: GeneratorState) => state.sidebarVisibility,
);
export const selectTriggerImmediateDownload = createSelector(
  selectState,
  (state: GeneratorState) => state.triggerImageDownload,
);
export const selectGenCmpVisPatients = createSelector(
  selectState,
  (state: GeneratorState) => state.componentPatientsVisibility,
);
export const selectGenCmpVisThreshold = createSelector(
  selectState,
  (state: GeneratorState) => state.componentThresholdVisibility,
);
export const selectGenCmpVisNodes = createSelector(
  selectState,
  (state: GeneratorState) => state.componentNodesVisibility,
);
export const selectGenCmpVisLayout = createSelector(
  selectState,
  (state: GeneratorState) => state.componentLayoutVisibility,
);
export const selectGenCmpVisDownload = createSelector(
  selectState,
  (state: GeneratorState) => state.componentDownloadVisibility,
);
export const selectGenCmpVisGenerator = createSelector(
  selectState,
  (state: GeneratorState) => state.componentGeneratorVisibility,
);
export const selectGenCmpVisImpressum = createSelector(
  selectState,
  (state: GeneratorState) => state.componentImpressumVisibility,
);
export const selectGenBackButtonVis = createSelector(
  selectState,
  (state: GeneratorState) => state.backButtonVisibility,
);
export const selectUrl = createSelector(
  selectState,
  selectThresholds,
  selectLayoutState,
  selectUuid,
  selectPatientA,
  selectPatientB,
  selectMarkedNodes,
  (state, thresholds, layoutState, uuid, patientA, patientB, markedNodes) => {
    const queryParams: string[] = [];

    queryParams.push(`uuid=${uuid}`);

    if (patientA) {
      queryParams.push(`pa=${patientA.name}`);
    }
    if (patientB) {
      queryParams.push(`pb=${patientB.name}`);
    }
    if (patientA || patientB) {
      thresholds.individual.forEach((threshold) => {
        const paramKey = `th_${threshold.property.name}`;
        queryParams.push(`${paramKey}=${threshold.defined}`);
      });
    } else {
      thresholds.default.forEach((threshold) => {
        const paramKey = `th_${threshold.property.name}`;
        queryParams.push(`${paramKey}=${threshold.defined}`);
      });
    }
    if (markedNodes && markedNodes.length > 0) {
      queryParams.push(`sel=${markedNodes.map((a: NetworkNode) => a.data.id).join(',')}`);
    }
    if (layoutState.nodeColorBy !== null) {
      queryParams.push(`col=${layoutState.nodeColorBy.name}`);
    }
    if (layoutState.nodeSizeBy !== null) {
      queryParams.push(`size=${layoutState.nodeSizeBy.name}`);
    }
    if (layoutState.showAllNodes !== null) {
      queryParams.push(`all=${layoutState.showAllNodes}`);
    }
    if (layoutState.showOnlySharedNodes !== null) {
      queryParams.push(`shared=${layoutState.showOnlySharedNodes}`);
    }
    if (layoutState.booleanProperty !== null) {
      queryParams.push(`bool=${layoutState.booleanProperty.name}`);
    }
    if (state.triggerImageDownload) {
      queryParams.push(`dwn=${state.triggerImageDownload}`);
      if (state.imageDownloadConfig) {
        queryParams.push(
          `img=${state.imageDownloadConfig.extension},${state.imageDownloadConfig.scale},${state.imageDownloadConfig.transparent}`,
        );
      }
    }

    if (state.sidebarVisibility !== null) {
      queryParams.push(`sb=${state.sidebarVisibility}`);
      if (state.sidebarVisibility !== ComponentVisibilityEnum.none) {
        queryParams.push(`cP=${state.componentPatientsVisibility}`);
        queryParams.push(`cT=${state.componentThresholdVisibility}`);
        queryParams.push(`cN=${state.componentNodesVisibility}`);
        queryParams.push(`cL=${state.componentLayoutVisibility}`);
        queryParams.push(`cD=${state.componentDownloadVisibility}`);
        queryParams.push(`cG=${state.componentGeneratorVisibility}`);
        queryParams.push(`cIm=${state.componentImpressumVisibility}`);
        queryParams.push(`bb=${state.backButtonVisibility}`);
      }
    }
    return `${state.domain}?${queryParams.join('&')}`;
  },
);
