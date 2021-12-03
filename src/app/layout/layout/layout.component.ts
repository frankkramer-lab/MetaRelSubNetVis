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

    this.route.queryParams.subscribe((params) => {
      this.store.dispatch(loadQueryParams({ params }));
    });

  }
}
