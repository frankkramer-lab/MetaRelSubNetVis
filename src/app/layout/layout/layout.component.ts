import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import { ComponentVisibilityEnum } from '../../core/enum/component-visibility.enum';
import {
  selectSidebarVisibility,
  selectSidebarVisibilityDownload,
  selectSidebarVisibilityGenerator, selectSidebarVisibilityImport,
  selectSidebarVisibilityImpressum,
  selectSidebarVisibilityLayout,
  selectSidebarVisibilityNodes,
  selectSidebarVisibilityPatients,
  selectSidebarVisibilityThreshold,
} from '../../data/state/sidebar/sidebar.selectors';
import { loadQueryParams } from '../../data/state/hydrator/hydrator.actions';
import { selectHeadline } from '../../data/state/network/network.selectors';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
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

    this.route.queryParams.subscribe((params) => {
      this.store.dispatch(loadQueryParams({ params }));
    });
  }
}
