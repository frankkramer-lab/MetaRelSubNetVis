import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../data/state/app.state';
import { loadQueryParams } from '../../data/state/hydrator/hydrator.actions';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.store.dispatch(loadQueryParams({ params }));
    });
  }
}
