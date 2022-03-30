import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { ComponentVisibilityEnum } from '../../core/enum/component-visibility.enum';
import { AppState } from '../../data/state/app.state';
import {
  selectSidebarVisibility,
  selectSidebarVisibilityDownload,
  selectSidebarVisibilityGenerator,
  selectSidebarVisibilityImport,
  selectSidebarVisibilityImpressum,
  selectSidebarVisibilityLayout,
  selectSidebarVisibilityNodes,
  selectSidebarVisibilityPatients,
  selectSidebarVisibilityThreshold,
} from '../../data/state/sidebar/sidebar.selectors';
import { selectHeadline } from '../../data/state/network/network.selectors';
import { initializeCore } from '../../data/state/network/network.actions';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss'],
})
export class NetworkComponent implements OnInit, AfterViewInit {
  sidebarVisible$!: Observable<ComponentVisibilityEnum>;

  sidebarImportVisible$!: Observable<ComponentVisibilityEnum>;

  sidebarPatientsVisible$!: Observable<ComponentVisibilityEnum>;

  sidebarThresholdVisible$!: Observable<ComponentVisibilityEnum>;

  sidebarNodesVisible$!: Observable<ComponentVisibilityEnum>;

  sidebarLayoutVisible$!: Observable<ComponentVisibilityEnum>;

  sidebarDownloadVisible$!: Observable<ComponentVisibilityEnum>;

  sidebarGeneratorVisible$!: Observable<ComponentVisibilityEnum>;

  sidebarImpressumVisible$!: Observable<ComponentVisibilityEnum>;

  headline$!: Observable<string | null>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sidebarVisible$ = this.store.select(selectSidebarVisibility);
    this.sidebarImportVisible$ = this.store.select(selectSidebarVisibilityImport);
    this.sidebarPatientsVisible$ = this.store.select(selectSidebarVisibilityPatients);
    this.sidebarThresholdVisible$ = this.store.select(selectSidebarVisibilityThreshold);
    this.sidebarNodesVisible$ = this.store.select(selectSidebarVisibilityNodes);
    this.sidebarLayoutVisible$ = this.store.select(selectSidebarVisibilityLayout);
    this.sidebarDownloadVisible$ = this.store.select(selectSidebarVisibilityDownload);
    this.sidebarGeneratorVisible$ = this.store.select(selectSidebarVisibilityGenerator);
    this.sidebarImpressumVisible$ = this.store.select(selectSidebarVisibilityImpressum);

    this.headline$ = this.store.select(selectHeadline);
  }

  ngAfterViewInit(): void {
    this.store.dispatch(initializeCore());
  }
}
