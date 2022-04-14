import { createReducer, on } from '@ngrx/store';
import { HydratorState } from './hydrator.state';
import {
  hydrationEnded,
  loadDataFailure,
  loadDataSuccess,
  loadQueryParams,
} from './hydrator.actions';
import { VisualizationConfig } from '../../schema/visualization-config';

const initialState: HydratorState = {
  config: null,
  hydrationInProgress: false,
};

export const hydratorReducer = createReducer(
  initialState,
  on(loadQueryParams, (state: HydratorState, { params }): HydratorState => {
    if (Object.keys(params).length === 0) return { ...state, hydrationInProgress: true };

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
    if (params.cP !== undefined) {
      config.cP = Number(params.cP);
    }
    if (params.cT !== undefined) {
      config.cT = Number(params.cT);
    }
    if (params.cN !== undefined) {
      config.cN = Number(params.cN);
    }
    if (params.cL !== undefined) {
      config.cL = Number(params.cL);
    }
    if (params.cD !== undefined) {
      config.cD = Number(params.cD);
    }
    if (params.cG !== undefined) {
      config.cG = Number(params.cG);
    }
    if (params.cIm !== undefined) {
      config.cIm = Number(params.cIm);
    }
    if (params.bb !== undefined) {
      config.bb = params.bb === 'true';
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
        scale:
          Number.isNaN(scale) || scale > 10 || scale < 1 || items[0].toUpperCase() === 'SVG'
            ? 1
            : scale,
        transparent: items[2] === 'true',
      };
    }

    if (params.col !== undefined) {
      config.col = params.col;
    }

    if (params.size !== undefined) {
      config.size = params.size;
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

    if (params.bool) {
      config.bool = params.bool;
    }

    if (params.shared) {
      config.shared = params.shared === 'true';
    }

    const thresholdKeys = Object.keys(params).filter((a) => a.startsWith('th_'));

    thresholdKeys.forEach((key) => {
      if (params[key] !== undefined) {
        if (!config.th) {
          config.th = {};
        }
        const numericValue = Number(params[key]);
        if (!Number.isNaN(numericValue)) {
          const cleanKey = key.substr(3);
          config.th[cleanKey] = numericValue;
        }
      }
    });
    return { ...state, config, hydrationInProgress: true };
  }),
  on(
    loadDataSuccess,
    loadDataFailure,
    (state: HydratorState): HydratorState => ({
      ...state,
      hydrationInProgress: false,
    }),
  ),
  on(
    hydrationEnded,
    (state: HydratorState): HydratorState => ({
      ...state,
      config: null,
      hydrationInProgress: false,
    }),
  ),
);
