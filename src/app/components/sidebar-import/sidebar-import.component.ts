import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import { setUuid } from '../../data/state/network/network.actions';
import { selectIsLoading, selectUuid } from '../../data/state/network/network.selectors';

@Component({
  selector: 'app-sidebar-import',
  templateUrl: './sidebar-import.component.html',
  styleUrls: ['./sidebar-import.component.scss'],
})
export class SidebarImportComponent implements OnInit {
  isLoading$!: Observable<boolean>;

  uuid$!: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectIsLoading);
    this.uuid$ = this.store.select(selectUuid);
  }

  triggerUuidSubmitted(uuid: string) {
    this.store.dispatch(setUuid({ uuid }));
  }
}
