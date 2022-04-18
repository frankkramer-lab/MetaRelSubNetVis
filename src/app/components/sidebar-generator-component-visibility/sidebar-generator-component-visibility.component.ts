import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentVisibilityEnum } from '../../core/enum/component-visibility.enum';

@Component({
  selector: 'app-sidebar-generator-component-visibility',
  templateUrl: './sidebar-generator-component-visibility.component.html',
  styleUrls: ['./sidebar-generator-component-visibility.component.scss'],
})
export class SidebarGeneratorComponentVisibilityComponent {
  @Input() name!: string;

  @Input() tooltip!: string;

  @Input() model!: ComponentVisibilityEnum | null;

  @Input() parentVisibility!: ComponentVisibilityEnum | null;

  @Output() modelEmitter: EventEmitter<number> = new EventEmitter<ComponentVisibilityEnum>();
}
