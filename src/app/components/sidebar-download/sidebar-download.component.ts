import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import {
  setFileExtension,
  setScale,
  toggleBackgroundTransparent,
  triggerImageDownload,
} from '../../data/state/download/download.actions';
import {
  selectExtension,
  selectIsFormValid,
  selectScale,
  selectTransparentBackground,
} from '../../data/state/download/download.selectors';
import { ImageDownloadConfig } from '../../data/schema/image-download-config';

@Component({
  selector: 'app-sidebar-download',
  templateUrl: './sidebar-download.component.html',
  styleUrls: ['./sidebar-download.component.scss'],
})
export class SidebarDownloadComponent implements OnInit {
  @Input() extension$!: Observable<string>;

  @Input() scale$!: Observable<number>;

  @Input() transparentBackground$!: Observable<boolean>;

  @Input() isFormValid$!: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.extension$ = this.store.select(selectExtension);
    this.scale$ = this.store.select(selectScale);
    this.transparentBackground$ = this.store.select(selectTransparentBackground);
    this.isFormValid$ = this.store.select(selectIsFormValid);
  }

  triggerSetFileExtension(extension: string) {
    this.store.dispatch(setFileExtension({ extension }));
  }

  triggerSetScale(scale: number) {
    this.store.dispatch(setScale({ scale }));
  }

  toggleTransparentBackground() {
    this.store.dispatch(toggleBackgroundTransparent());
  }

  triggerDownload(imageDownloadConfig: ImageDownloadConfig) {
    this.store.dispatch(triggerImageDownload({ imageDownloadConfig }));
  }
}
