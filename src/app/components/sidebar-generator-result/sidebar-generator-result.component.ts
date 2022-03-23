import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-generator-result',
  templateUrl: './sidebar-generator-result.component.html',
  styleUrls: ['./sidebar-generator-result.component.scss']
})
export class SidebarGeneratorResultComponent {

  @Input() isImageFormValid!: boolean | null;

  @Input() domain!: string | null;

  @Input() queryParams!: string | null;

  @Output() copyTrigger: EventEmitter<void> = new EventEmitter<void>();

}
