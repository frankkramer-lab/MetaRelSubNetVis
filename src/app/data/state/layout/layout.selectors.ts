import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { LayoutState } from './layout.state';

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

export const selectHighlightColor = createSelector(
  selectState,
  (state: LayoutState) => state.highlightColor,
);
export const selectGradient = createSelector(selectState, (state: LayoutState) => {
  if (state.nodeColorBy === null) return null;

  const map = state.nodeColorBy.mapping;
  const keys = Object.keys(map);
  const range = Number(keys[keys.length - 1]) - Number(keys[0]);

  if (Number.isNaN(range)) return null;

  const prefix = `linear-gradient(90deg,`;
  const suffix = `)`;

  const thresholds: string[] = [];
  let predecessor = Number(keys[0]);
  let cumulative = Number(keys[0]);

  Object.entries(map).forEach(([rawKey, value], index) => {

    const key = Number(rawKey);
    const width = Math.round(((key - predecessor) / range) * 100);
    cumulative += width;

    if (index === 0) {
      thresholds.push(`${value} 0%`);
    } else if (index === keys.length - 1) {
      thresholds.push(`${value} 100%`);
    } else {
      thresholds.push(`${value} ${cumulative}%`);
    }
    predecessor = key;
  });
  return prefix + thresholds.join(',') + suffix;
});
