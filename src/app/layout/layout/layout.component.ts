import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import { loadDefaultAppData, setupVisualizationConfigByRoute } from '../../data/state/app.actions';
import { SidebarVisibilityEnum } from '../../core/enum/sidebar-visibility.enum';
import { selectSidebarVisibility } from '../../data/state/sidebar/sidebar.selectors';

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

    this.route.params.subscribe((params) => {
      if (params.uuid) {
        // todo dispatch action to load cx data or default data
        console.log('Loading data from NDEx is currently under development!');
      }
    });

    // todo move to effect, if uuid is set
    // todo move to else case, if uuid is not set
    this.store.dispatch(loadDefaultAppData());

    this.route.queryParams.subscribe((params) => {
      console.log('Predefined query params! Dispatching action ...');
      this.store.dispatch(setupVisualizationConfigByRoute({ params }));
    });
  }
}
