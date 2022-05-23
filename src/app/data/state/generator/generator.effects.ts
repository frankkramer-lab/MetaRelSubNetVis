import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { copyToClipboard } from './generator.actions';
import { AppState } from '../app.state';
import { selectUrl } from './generator.selectors';

@Injectable()
export class GeneratorEffects {
  copyToClipboard$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(copyToClipboard),
        concatLatestFrom(() => [this.store.select(selectUrl)]),
        map(([, url]) => {
          navigator.clipboard.writeText(url);
        }),
      );
    },
    { dispatch: false },
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
