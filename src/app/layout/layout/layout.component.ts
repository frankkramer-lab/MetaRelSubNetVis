import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import { SidebarVisibilityEnum } from '../../core/enum/sidebar-visibility.enum';
import { selectSidebarVisibility } from '../../data/state/sidebar/sidebar.selectors';
import { loadQueryParams } from '../../data/state/hydrator/hydrator.actions';
import { selectHeadline } from '../../data/state/network/network.selectors';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  sidebarVisible$!: Observable<SidebarVisibilityEnum>;

  headline$!: Observable<string | null>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sidebarVisible$ = this.store.select(selectSidebarVisibility);
    this.headline$ = this.store.select(selectHeadline);

    this.route.queryParams.subscribe((params) => {
      this.store.dispatch(loadQueryParams({ params }));
    });
  }
}
