import { createReducer, on } from '@ngrx/store';
import { HydratorState } from './hydrator.state';
import { hydrationEnded, loadQueryParams } from './hydrator.actions';
import { VisualizationConfig } from '../../schema/visualization-config';

const initialState: HydratorState = {
  config: null,
};

export const hydratorReducer = createReducer(
  initialState,
  on(loadQueryParams, (state: HydratorState, { params }): HydratorState => {
    if (Object.keys(params).length === 0) return { ...state };

    const config: VisualizationConfig = {
      uuid: '',
    };

    // if there is no UUID, none of the config settings are valid
    if (params.uuid === undefined) {
      return { ...state, config: null };
    }

    config.uuid = params.uuid;

    if (params.sb !== undefined) {
      config.sb = Number(params.sb);
    }

    if (params.dwn) {
      config.dwn = params.dwn === 'true';
    }

    if (params.img) {
      const items: string[] = params.img.split(',');
      const validExtensions = ['PNG', 'SVG', 'JPEG'];
      const scale: number = Number(items[1]);
      config.img = {
        extension: validExtensions.includes(items[0].toUpperCase())
          ? items[0].toUpperCase()
          : 'PNG',
        scale: Number.isNaN(scale) || scale > 10 || scale < 1 ? 1 : scale,
        transparent: items[2] === 'true',
      };
    }

    if (params.col !== undefined) {
      config.col = Number(params.col);
    }

    if (params.size !== undefined) {
      config.size = Number(params.size);
    }

    if (params.pa) {
      config.pa = params.pa;
    }

    if (params.pb) {
      config.pb = params.pb;
    }

    if (params.sel) {
      config.sel = params.sel.split(',');
    }

    if (params.all) {
      config.all = params.all === 'true';
    }

    if (params.mtb) {
      config.mtb = params.mtb === 'true';
    }

    if (params.shared) {
      config.shared = params.shared === 'true';
    }

    if (params.th !== undefined) {
      config.th = Number(params.th);
    }

    return { ...state, config };
  }),
  on(hydrationEnded, (state: HydratorState): HydratorState => ({ ...state, config: null })),
);
