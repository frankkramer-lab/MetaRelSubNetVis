import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageDownloadConfig } from '../../data/schema/image-download-config';

@Component({
  selector: 'app-sidebar-download-form',
  templateUrl: './sidebar-download-form.component.html',
  styleUrls: ['./sidebar-download-form.component.scss'],
})
export class SidebarDownloadFormComponent {
  @Input() buttonVisible!: boolean;

  @Input() isFormValid!: boolean | null;

  @Input() extension!: string | null;

  @Input() scale!: number | null;

  @Input() transparentBackground!: boolean | null;

  @Output() extensionChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output() scaleChanged: EventEmitter<number> = new EventEmitter<number>();

  @Output() transparentBackgroundChanged: EventEmitter<void> = new EventEmitter<void>();

  @Output() triggerImageDownload: EventEmitter<ImageDownloadConfig> =
    new EventEmitter<ImageDownloadConfig>();

  readonly availableDatatypes: string[] = ['PNG', 'JPEG', 'SVG'];

  downloadForm: FormGroup = new FormGroup({
    extension: new FormControl('PNG'),
    scale: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(10)]),
    transparent: new FormControl(false),
  });

  get formExtension() {
    return this.downloadForm.get('extension');
  }

  get formScale() {
    return this.downloadForm.get('scale');
  }

  get formTransparent() {
    return this.downloadForm.get('transparent');
  }
}
