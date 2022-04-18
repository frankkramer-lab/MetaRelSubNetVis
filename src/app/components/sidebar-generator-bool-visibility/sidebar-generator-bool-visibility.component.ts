import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentVisibilityEnum } from '../../core/enum/component-visibility.enum';

@Component({
  selector: 'app-sidebar-generator-bool-visibility',
  templateUrl: './sidebar-generator-bool-visibility.component.html',
  styleUrls: ['./sidebar-generator-bool-visibility.component.scss'],
})
export class SidebarGeneratorBoolVisibilityComponent {
  @Input() name!: string;

  @Input() tooltip!: string;

  @Input() model!: boolean | null;

  @Input() parentVisibility!: ComponentVisibilityEnum | null;

  @Output() modelEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
}
