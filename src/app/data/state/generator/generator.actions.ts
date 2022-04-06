import { createAction, props } from '@ngrx/store';
import { ComponentVisibilityEnum } from '../../../core/enum/component-visibility.enum';

export const setGeneratorSidebarVisibility = createAction(
  '[Generator Component] set generator sidebar visibility',
  props<{ sidebarVisibility: ComponentVisibilityEnum }>(),
);

export const setGeneratorImageScale = createAction(
  '[Generator Component] set generator image scale',
  props<{ scale: number }>(),
);
export const setGeneratorImageExtension = createAction(
  '[Generator Component] set generator image extension',
  props<{ extension: string }>(),
);
export const toggleGeneratorImageBackground = createAction(
  '[Generator Component] toggle generator image background',
);

export const toggleGeneratorTriggerImmediateDownload = createAction(
  '[Generator Component] toggle generator trigger immediate download',
);
export const copyToClipboard = createAction('[Generator Component] copy to clipboard');

export const setComponentVisibilityImport = createAction(
  "[Generator Component] set sidebar's component import visibility",
  props<{ visibility: ComponentVisibilityEnum }>(),
);
export const setComponentVisibilityPatients = createAction(
  "[Generator Component] set sidebar's component patients visibility",
  props<{ visibility: ComponentVisibilityEnum }>(),
);
export const setComponentVisibilityThreshold = createAction(
  "[Generator Component] set sidebar's component threshold visibility",
  props<{ visibility: ComponentVisibilityEnum }>(),
);
export const setComponentVisibilityNodes = createAction(
  "[Generator Component] set sidebar's component nodes visibility",
  props<{ visibility: ComponentVisibilityEnum }>(),
);
export const setComponentVisibilityLayout = createAction(
  "[Generator Component] set sidebar's component layout visibility",
  props<{ visibility: ComponentVisibilityEnum }>(),
);
export const setComponentVisibilityDownload = createAction(
  "[Generator Component] set sidebar's component download visibility",
  props<{ visibility: ComponentVisibilityEnum }>(),
);
export const setComponentVisibilityGenerator = createAction(
  "[Generator Component] set sidebar's component generator visibility",
  props<{ visibility: ComponentVisibilityEnum }>(),
);
export const setComponentVisibilityImpressum = createAction(
  "[Generator Component] set sidebar's component impressum visibility",
  props<{ visibility: ComponentVisibilityEnum }>(),
);
export const setBackButtonVisibility = createAction(
  '[Generator Component] set back button visibility',
  props<{ backButtonVisibility: boolean }>(),
);
