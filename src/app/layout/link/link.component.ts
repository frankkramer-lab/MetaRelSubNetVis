import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import { loadQueryParams } from '../../data/state/hydrator/hydrator.actions';
import { selectHydrationInProgress } from '../../data/state/hydrator/hydrator.selectors';
import { navigateHome } from '../../data/state/sidebar/sidebar.actions';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  hydrationInProgress$!: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (Object.keys(params).length > 0) {
        this.store.dispatch(loadQueryParams({ params }));
      } else {
        this.store.dispatch(navigateHome());
      }
    });
    this.hydrationInProgress$ = this.store.select(selectHydrationInProgress);
  }

  returnHome() {
    this.store.dispatch(navigateHome());
  }
}
