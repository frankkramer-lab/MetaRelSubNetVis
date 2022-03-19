import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../data/state/app.state';
import { setUuid } from '../../data/state/network/network.actions';

@Component({
  selector: 'app-sidebar-import',
  templateUrl: './sidebar-import.component.html',
  styleUrls: ['./sidebar-import.component.scss'],
})
export class SidebarImportComponent {
  uuid: string = '';

  constructor(private store: Store<AppState>) {
  }

  triggerUuidSubmitted() {
    this.store.dispatch(setUuid({ uuid: this.uuid }));
  }
}
