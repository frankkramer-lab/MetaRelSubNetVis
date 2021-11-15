import { Component, Input } from '@angular/core';
import { Threshold } from '../../models/threshold';
import { StoreService } from '../../services/store.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  // @Input() patients!: PatientCollection | null;

  @Input() thresholds!: Threshold;

  // @Input() nodes!: Node[];

  // @Input() occ!: any;

  // @Input() showSidebar!: boolean;

  // @Output() showSidebarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private storeService: StoreService, private utilService: UtilService) {
  }

  hideSidebar(): void {
    if (this.storeService.showSidebar === this.utilService.sidebarVisibility.full) {
      this.storeService.showSidebar = this.utilService.sidebarVisibility.button;
    } else {
      this.storeService.showSidebar = this.utilService.sidebarVisibility.full;
    }
  }
}
