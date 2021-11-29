import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../data/state/app.state';
import { SidebarVisibilityEnum } from '../../core/enum/sidebar-visibility.enum';
import { toggleSidebarVisibility } from '../../data/state/sidebar/sidebar.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  @Input() sidebarVisible!: SidebarVisibilityEnum | null;

  constructor(private store: Store<AppState>) {
  }

  toggleSidebar(visibility: SidebarVisibilityEnum) {
    this.store.dispatch(toggleSidebarVisibility({ visibility }));
  }
}
