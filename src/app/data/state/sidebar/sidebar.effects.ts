import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { navigateHome } from './sidebar.actions';
import { AppState } from '../app.state';

@Injectable()
export class SidebarEffects {
  navigateHome$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(navigateHome),
        map(() => {
          this.router.navigate(['/home']);
        }),
      );
    },
    { dispatch: false },
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private router: Router) {}
}
