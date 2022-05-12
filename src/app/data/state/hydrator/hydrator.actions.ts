import { createAction, props } from '@ngrx/store';
import { Network } from '../../schema/network';
import { PatientCollection } from '../../schema/patient-collection';
import { Patient } from '../../schema/patient';
import { AttributeItem } from '../../schema/attribute-item';
import { NetworkNode } from '../../schema/network-node';
import { ImageDownloadConfig } from '../../schema/image-download-config';
import { ComponentVisibilityEnum } from '../../../core/enum/component-visibility.enum';
import { Property } from '../../schema/property';
import { PropertyCollection } from '../../schema/property-collection';
import { ThresholdCollection } from '../../schema/threshold-collection';

export const loadQueryParams = createAction(
  '[Layout Component] load query params',
  props<{ params: any }>(),
);

export const loadDataFailure = createAction(
  '[Hydrator Effects] load data failure',
  props<{ uuid: string }>(),
);
export const loadDataSuccess = createAction(
  '[Hydrator Effects] load data success',
  props<{
    network: Network;
    patients: PatientCollection;
    thresholds: ThresholdCollection;
    headline: string;
    properties: PropertyCollection;
    defaultAttributes: AttributeItem[];
    highlightColor: string;
  }>(),
);

export const hydrateAbort = createAction('[Hydrator Effects] hydrate abort');

export const hydratePatientAPatientBSuccess = createAction(
  '[Hydrator Effects] hydrate patient A patient B success',
  props<{
    patientA: Patient | null;
    patientB: Patient | null;
    patientADetails: AttributeItem[];
    patientBDetails: AttributeItem[];
  }>(),
);
export const hydratePatientAPatientBFailure = createAction(
  '[Hydrator Effects] hydrate patient A patient B failure',
);

export const hydrateThresholdSuccess = createAction(
  '[Hydrator Effects] hydrate threshold success',
  props<{ thresholds: ThresholdCollection }>(),
);
export const hydrateThresholdFailure = createAction('[Hydrator Effects] hydrate threshold failure');

export const hydrateLayoutSuccess = createAction(
  '[Hydrator Effects] hydrate layout success',
  props<{
    showAll: boolean;
    showShared: boolean;
    booleanProperty: Property | null;
    nodeColorBy: Property | null;
    nodeSizeBy: Property | null;
  }>(),
);
export const hydrateLayoutFailure = createAction('[Hydrator Effects] hydrate layout failure');

export const hydrateNodesSuccess = createAction(
  '[Hydrator Effects] hydrate nodes selection success',
  props<{
    selection: NetworkNode[];
    subtypeColumnA: string | null;
    subtypeColumnB: string | null;
  }>(),
);
export const hydrateNodesFailure = createAction(
  '[Hydrator Effects] hydrate nodes selection failure',
);

export const hydrateDownloadConfigSuccess = createAction(
  '[Hydrator Effects] hydrate download config success',
  props<{ downloadConfig: ImageDownloadConfig }>(),
);
export const hydrateDownloadConfigFailure = createAction(
  '[Hydrator Effects] hydrate download config failure',
);

export const hydrateSidebarVisibilitySuccess = createAction(
  '[Hydrator Effects] hydrate sidebar visibility success',
  props<{
    visibility: ComponentVisibilityEnum;
    cmpPatientsVis: ComponentVisibilityEnum;
    cmpThresholdVis: ComponentVisibilityEnum;
    cmpNodesVis: ComponentVisibilityEnum;
    cmpLayoutVis: ComponentVisibilityEnum;
    cmpDownloadVis: ComponentVisibilityEnum;
    cmpGeneratorVis: ComponentVisibilityEnum;
    cmpImpressumVis: ComponentVisibilityEnum;
    backButtonVis: boolean;
  }>(),
);
export const hydrateSidebarVisibilityFailure = createAction(
  '[Hydrator Effects] hydrate sidebar visibility failure',
);

export const hydrateTriggerDownloadSuccess = createAction(
  '[Hydrator Effects] hydrate trigger download success',
);

export const hydrationEnded = createAction('[Hydrator Effects] hydration ended');
export const markMultipleNodes = createAction(
  '[Hydrator Effects] mark multiple nodes',
  props<{ nodes: NetworkNode[] }>(),
);
