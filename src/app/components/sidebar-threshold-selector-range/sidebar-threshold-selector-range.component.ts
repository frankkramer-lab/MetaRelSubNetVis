import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThresholdDefinition } from '../../data/schema/threshold-definition';

@Component({
  selector: 'app-sidebar-threshold-selector-range',
  templateUrl: './sidebar-threshold-selector-range.component.html',
  styleUrls: ['./sidebar-threshold-selector-range.component.scss'],
})
export class SidebarThresholdSelectorRangeComponent {
  @Input() groupLabelA!: string | null;

  @Input() groupLabelB!: string | null;

  @Input() min!: number | null;

  @Input() max!: number | null;

  @Input() threshold!: ThresholdDefinition | null;

  @Input() multiplier!: number | null;

  @Output() thresholdChangedEmitter: EventEmitter<ThresholdDefinition> =
    new EventEmitter<ThresholdDefinition>();

  emitChangedThreshold(defined: number) {
    if (this.threshold && this.threshold.property) {
      this.thresholdChangedEmitter.emit({
        defined: defined / (this.multiplier ?? 1),
        property: this.threshold.property,
        scope: this.threshold.scope,
      });
    }
  }
}
