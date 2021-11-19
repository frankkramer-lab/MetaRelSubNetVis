import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './data/state/app.state';
import { loadInitialAppData } from './data/state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadInitialAppData());
  }
}
