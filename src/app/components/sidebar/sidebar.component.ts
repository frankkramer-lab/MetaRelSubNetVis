import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PatientCollection } from '../../models/patient-collection';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() showSidebar!: boolean;

  @Input() patients!: PatientCollection | null;

  @Output() showSidebarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  hideSidebar(): void {
    this.showSidebar = false;
    this.showSidebarEmitter.emit(false);
  }


}
