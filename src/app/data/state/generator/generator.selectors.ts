import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { GeneratorState } from './generator.state';
import { selectMarkedNodes } from '../nodes/nodes.selectors';
import { selectUuid } from '../network/network.selectors';
import { selectPatientA, selectPatientB } from '../patient/patient.selectors';
import { selectDefined } from '../threshold/threshold.selectors';
import { selectLayoutState } from '../layout/layout.selectors';
import { NetworkNode } from '../../schema/network-node';
import { ComponentVisibilityEnum } from '../../../core/enum/component-visibility.enum';

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
export const selectDomain = createSelector(selectState, (state: GeneratorState) => state.domain);

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
export const selectUrl = createSelector(
  selectState,
  selectLayoutState,
  selectUuid,
  selectPatientA,
  selectPatientB,
  selectDefined,
  selectMarkedNodes,
  (
    state,
    layoutState,
    uuid,
    patientA,
    patientB,
    defined,
    markedNodes,
  ) => {
    const queryParams: string[] = [];

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
    if (layoutState.nodeColorBy !== null) {
      queryParams.push(`col=${layoutState.nodeColorBy}`);
    }
    if (layoutState.nodeSizeBy !== null) {
      queryParams.push(`size=${layoutState.nodeSizeBy}`);
    }
    if (layoutState.showAllNodes !== null) {
      queryParams.push(`all=${layoutState.showAllNodes}`);
    }
    if (layoutState.showOnlySharedNodes !== null) {
      queryParams.push(`shared=${layoutState.showOnlySharedNodes}`);
    }
    if (layoutState.showMtbResults !== null) {
      queryParams.push(`mtb=${layoutState.showMtbResults}`);
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
      }
    }

    return `${state.domain}?${queryParams.join('&')}`;
  },
);
