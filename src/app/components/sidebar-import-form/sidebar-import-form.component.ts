import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-import-form',
  templateUrl: './sidebar-import-form.component.html',
  styleUrls: ['./sidebar-import-form.component.scss']
})
export class SidebarImportFormComponent {

  @Input() uuid!: string | null;

  @Output() uuidSubmitted: EventEmitter<string> = new EventEmitter<string>();

}
