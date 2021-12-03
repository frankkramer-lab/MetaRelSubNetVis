import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Patient } from '../../data/schema/patient';
import { NetworkNode } from '../../data/schema/network-node';
import { NodeColorByEnum } from '../../core/enum/node-color-by.enum';
import { NodeSizeByEnum } from '../../core/enum/node-size-by.enum';
import { ImageDownloadConfig } from '../../data/schema/image-download-config';
import { SidebarVisibilityEnum } from '../../core/enum/sidebar-visibility.enum';

@Component({
  selector: 'app-sidebar-generator-form',
  templateUrl: './sidebar-generator-form.component.html',
  styleUrls: ['./sidebar-generator-form.component.scss'],
})
export class SidebarGeneratorFormComponent {
  @Input() patientA!: Patient | null;

  @Input() patientB!: Patient | null;

  @Input() threshold!: number | null;

  @Input() nodes!: NetworkNode[] | null;

  @Input() nodesColorBy!: NodeColorByEnum | null;

  @Input() nodesSizeBy!: NodeSizeByEnum | null;

  @Input() showAll!: boolean | null;

  @Input() showShared!: boolean | null;

  @Input() showMtb!: boolean | null;

  @Input() imageDownloadConfig!: ImageDownloadConfig | null;

  @Input() triggerImmediateImageDownload!: boolean | null;

  @Input() sidebarVisibility!: SidebarVisibilityEnum | null;

  @Output() imageExtensionChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output() imageScaleChanged: EventEmitter<number> = new EventEmitter<number>();

  @Output() imageTransparencyChanged: EventEmitter<void> = new EventEmitter<void>();

  @Output() triggerDownloadChanged: EventEmitter<void> = new EventEmitter<void>();

  @Output() sidebarVisibilityChanged: EventEmitter<SidebarVisibilityEnum> =
    new EventEmitter<SidebarVisibilityEnum>();

  @Output() copyTrigger: EventEmitter<ImageDownloadConfig> = new EventEmitter<ImageDownloadConfig>();

}
