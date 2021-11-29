import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setupVisualizationConfigByRoute } from '../app.actions';
import { AppState } from '../app.state';
import { VisualizationConfig } from '../../schema/visualization-config';
import { setSidebarVisibility } from '../sidebar/sidebar.actions';

@Injectable()
export class HydratorEffects {
  hydrate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setupVisualizationConfigByRoute),
      mergeMap((action) => {
        const visualizationConfig: VisualizationConfig = {};

        // loop action.params
        Object.keys(action.params).forEach((key) => {
          switch (key) {
            case 'sb':
              visualizationConfig.sb = action.params[key];
              break;
            case 'dwn':
              visualizationConfig.dwn = action.params[key] === 'true';
              break;
            case 'img':
              // todo
              // visualizationConfig.img = action.params[key];
              break;
            case 'col':
              visualizationConfig.col = action.params[key];
              break;
            case 'size':
              visualizationConfig.size = action.params[key];
              break;
            case 'pa':
              visualizationConfig.pa = action.params[key];
              break;
            case 'pb':
              visualizationConfig.pb = action.params[key];
              break;
            case 'sel':
              // todo
              visualizationConfig.sel = action.params[key];
              break;
            case 'all':
              visualizationConfig.all = action.params[key] === 'true';
              break;
            case 'mtb':
              visualizationConfig.mtb = action.params[key] === 'true';
              break;
            case 'shared':
              visualizationConfig.shared = action.params[key] === 'true';
              break;
            case 'th':
              if (!Number.isNaN(action.params[key])) {
                visualizationConfig.th = Number(action.params[key]);
              }
              break;
            default:
              console.log('Unknown key ...');
              break;
          }
        });

        // todo concatMap? assure that image config is set before download
        const actions = [];
        if (visualizationConfig.sb) {
          actions.push(setSidebarVisibility({ visibility: visualizationConfig.sb }));
        }

        return actions;
      }),
    );
  });

  constructor(private actions$: Actions, private store: Store<AppState>) {
  }
}
