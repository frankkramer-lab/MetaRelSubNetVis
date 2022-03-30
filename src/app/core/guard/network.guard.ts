import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { concatLatestFrom } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { selectUuid } from '../../data/state/network/network.selectors';
import { AppState } from '../../data/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class NetworkGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      concatLatestFrom(() => this.store.select(selectUuid)),
      map(([, uuid]) => {
        if (!uuid) {
          this.router.navigate(['/']);
        }
        return !!uuid;
      }),
    );
  }
}
