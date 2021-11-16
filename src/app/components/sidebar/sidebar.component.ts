import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  constructor(private storeService: StoreService, private utilService: UtilService) {
  }

  /**
   * Sets sidebar invisible, but still shows the button to re-open the sidebar.
   * Fully hiding the sidebar can only be achieved via routing.
   */
  hideSidebar(): void {
    if (this.storeService.showSidebar === this.utilService.sidebarVisibility.full) {
      this.storeService.showSidebar = this.utilService.sidebarVisibility.button;
    } else {
      this.storeService.showSidebar = this.utilService.sidebarVisibility.full;
    }
  }
}
