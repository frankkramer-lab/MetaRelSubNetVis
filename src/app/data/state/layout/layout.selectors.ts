import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { LayoutState } from './layout.state';
import { selectIsAnyPatientSelected, selectPatientSelection } from '../patient/patient.selectors';
import { Property } from '../../schema/property';

const selectState = createSelector(
  (appState: AppState) => appState.layout,
  (state: LayoutState) => state,
);

export const selectLayoutState = createSelector(selectState, (state: LayoutState) => state);

export const selectNodeColorBy = createSelector(
  selectState,
  (state: LayoutState) => state.nodeColorBy,
);
export const selectNodeSizeBy = createSelector(
  selectState,
  (state: LayoutState) => state.nodeSizeBy,
);
export const selectShowAllNodes = createSelector(
  selectState,
  (state: LayoutState) => state.showAllNodes,
);
export const selectShowOnlySharedNodes = createSelector(
  selectState,
  (state: LayoutState) => state.showOnlySharedNodes,
);
export const selectActiveBooleanProperty = createSelector(
  selectState,
  (state: LayoutState) => state.booleanProperty,
);
export const selectProperties = createSelector(
  selectState,
  (state: LayoutState) => state.properties,
);
export const selectPropertiesIndividual = createSelector(
  selectState,
  (state: LayoutState) => state.properties.individual,
);
export const selectPropertiesDefault = createSelector(
  selectState,
  (state: LayoutState) => state.properties.individual,
);
export const selectRelevantProperties = createSelector(
  selectState,
  selectIsAnyPatientSelected,
  (state: LayoutState, isAnyPatientSelected: boolean) => {
    return isAnyPatientSelected ? state.properties.individual : state.properties.default;
  },
);

export const selectHighlightColor = createSelector(
  selectState,
  (state: LayoutState) => state.highlightColor,
);
export const selectMinLabelGradient = createSelector(
  selectState,
  selectNodeColorBy,
  (state: LayoutState, colorBy: Property | null) => {
    if (!colorBy) return 0;
    if (colorBy.min && !Number.isNaN(colorBy.min)) return colorBy.min;
    if (
      colorBy.minA &&
      colorBy.minB &&
      !Number.isNaN(colorBy.minA) &&
      !Number.isNaN(colorBy.minB)
    ) {
      return Math.min(colorBy.minA, colorBy.minB);
    }
    return 0;
  },
);

export const selectMaxLabelGradient = createSelector(
  selectState,
  selectNodeColorBy,
  (state: LayoutState, colorBy: Property | null) => {
    if (!colorBy) return 1;
    if (colorBy.max && !Number.isNaN(colorBy.max)) return colorBy.max;
    if (
      colorBy.maxA &&
      colorBy.maxB &&
      !Number.isNaN(colorBy.maxA) &&
      !Number.isNaN(colorBy.maxB)
    ) {
      return Math.max(colorBy.maxA, colorBy.maxB);
    }
    return 1;
  },
);
export const selectGradient = createSelector(selectState, (state: LayoutState) => {
  if (state.nodeColorBy === null) return null;

  const unsorted = state.nodeColorBy.mapping;

  const keys = Object.keys(unsorted);
  const keysSorted = keys.sort((a, b) => {
    const aNum = Number(a);
    const bNum = Number(b);
    return aNum > bNum ? 1 : -1;
  });
  const range = Number(keysSorted[keysSorted.length - 1]) - Number(keysSorted[0]);

  if (Number.isNaN(range)) return null;

  let predecessor = Number(keysSorted[0]);
  let cumulative = Number(keysSorted[0]);

  const thresholds: string[] = [];

  keysSorted.forEach((rawKey, index: number) => {
    const key: number = Number(rawKey);
    const item = unsorted[rawKey];

    const width = Math.round(((key - predecessor) / range) * 100);
    cumulative += width;

    if (index === 0) {
      thresholds.push(`${item} 0%`);
    } else if (index === keys.length - 1) {
      thresholds.push(`${item} 100%`);
    } else {
      thresholds.push(`${item} ${cumulative}%`);
    }
    predecessor = key;
  });

  const prefix = `linear-gradient(90deg,`;
  const suffix = `)`;

  return prefix + thresholds.join(',') + suffix;
});
