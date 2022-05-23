import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-link-content',
  templateUrl: './link-content.component.html',
  styleUrls: ['./link-content.component.scss'],
})
export class LinkContentComponent {
  @Input() inProgress!: boolean | null;

  @Output() routingEmitter: EventEmitter<void> = new EventEmitter<void>();
}
