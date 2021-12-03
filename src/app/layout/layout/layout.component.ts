import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import { SidebarVisibilityEnum } from '../../core/enum/sidebar-visibility.enum';
import { selectSidebarVisibility } from '../../data/state/sidebar/sidebar.selectors';
import { loadQueryParams } from '../../data/state/hydrator/hydrator.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  sidebarVisible$!: Observable<SidebarVisibilityEnum>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sidebarVisible$ = this.store.select(selectSidebarVisibility);

    // 0: loadQueryParams
    // 1: Dispatch action loadQueryParamsSuccess
    // 1: Chain three calls to load network, patients, threshold to simulate CX
    // 2: Dispatch action loadDataSuccess after innermost call

    // 3: Hydrate Chain:
    // 3.1: hydratePatientA
    // 3.2: hydratePatientB
    // 3.3: hydrateThreshold
    // 3.4: hydrateSelectedNodes
    // 3.5: hydrateNodesColorBy
    // 3.6: hydrateNodesSizeBy
    // 3.7: hydrateShowAllNodes
    // 3.8: hydrateShowOnlySharedNodes
    // 3.9: hydrateShowMtbResults
    // 3.10: hydrateSidebarVisibility
    // 3.11: hydrateImageDownloadConfig
    // 3.12: hydrateTriggerImageDownload

    this.route.queryParams.subscribe((params) => {
      this.store.dispatch(loadQueryParams({ params }));
    });

    // this.route.params.subscribe((params) => {
    //   if (params.uuid) {
    //     // todo dispatch action to load cx data or default data
    //     console.log('Loading data from NDEx is currently under development!');
    //   }
    // });

    // todo move to effect, if uuid is set
    // todo move to else case, if uuid is not set
    // this.store.dispatch(loadDefaultAppData());

    // this.route.queryParams.subscribe((params) => {
    //   console.log('Predefined query params! Dispatching action ...');
    //   this.store.dispatch(setupVisualizationConfigByRoute({ params }));
    // });
  }
}
