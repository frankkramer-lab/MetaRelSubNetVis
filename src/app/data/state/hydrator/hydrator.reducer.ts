import { createReducer, on } from '@ngrx/store';
import { HydratorState } from './hydrator.state';
import { hydrationEnded, loadQueryParams } from './hydrator.actions';
import { VisualizationConfig } from '../../schema/visualization-config';
import { SidebarVisibilityEnum } from '../../../core/enum/sidebar-visibility.enum';
import { NodeColorByEnum } from '../../../core/enum/node-color-by.enum';
import { NodeSizeByEnum } from '../../../core/enum/node-size-by.enum';

const initialState: HydratorState = {
  config: null,
};

export const hydratorReducer = createReducer(
  initialState,
  on(loadQueryParams, (state: HydratorState, { params }): HydratorState => {
    if (Object.keys(params).length === 0) return { ...state };

    const visualizationConfig: VisualizationConfig = {};
    if (params.sb) {
      visualizationConfig.sb = params.sb as SidebarVisibilityEnum;
    }
    if (params.dwn) {
      console.log(params.dwn);
      visualizationConfig.dwn = params.dwn === 'true';
    }
    if (params.img) {
      const items: string[] = params.img.split(',');
      const validExtensions = ['PNG', 'SVG', 'JPEG'];
      const scale: number = Number(items[1]);
      visualizationConfig.img = {
        extension: validExtensions.includes(items[0].toUpperCase())
          ? items[0].toUpperCase()
          : 'PNG',
        scale: Number.isNaN(scale) || scale > 10 || scale < 1 ? 1 : scale,
        transparent: items[2] === 'true',
      };
    }
    if (params.col) {
      visualizationConfig.col = params.col as NodeColorByEnum;
    }
    if (params.size) {
      visualizationConfig.size = params.size as NodeSizeByEnum;
    }
    if (params.pa) {
      visualizationConfig.pa = params.pa;
    }
    if (params.pb) {
      visualizationConfig.pb = params.pb;
    }
    if (params.sel) {
      visualizationConfig.sel = params.sel.split(',');
    }
    if (params.all) {
      visualizationConfig.all = params.all === 'true';
    }
    if (params.mtb) {
      visualizationConfig.mtb = params.mtb === 'true';
    }
    if (params.shared) {
      visualizationConfig.shared = params.shared === 'true';
    }
    if (params.th) {
      visualizationConfig.th = params.th;
    }

    return { ...state, config: params as VisualizationConfig };
  }),
  on(hydrationEnded, (state: HydratorState): HydratorState => ({ ...state, config: null })),
);
