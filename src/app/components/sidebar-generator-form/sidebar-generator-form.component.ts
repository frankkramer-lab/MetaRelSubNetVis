import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageDownloadConfig } from '../../data/schema/image-download-config';

@Component({
  selector: 'app-sidebar-generator-form',
  templateUrl: './sidebar-generator-form.component.html',
  styleUrls: ['./sidebar-generator-form.component.scss'],
})
export class SidebarGeneratorFormComponent {
  @Input() imageDownloadConfig!: ImageDownloadConfig | null;

  @Input() isImageFormValid!: boolean | null;

  @Output() imageExtensionChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output() imageScaleChanged: EventEmitter<number> = new EventEmitter<number>();

  @Output() imageTransparencyChanged: EventEmitter<void> = new EventEmitter<void>();

  @Output() copyTrigger: EventEmitter<ImageDownloadConfig> =
    new EventEmitter<ImageDownloadConfig>();
}
