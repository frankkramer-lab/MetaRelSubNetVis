import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import {
  selectActiveBooleanProperty,
  selectGradient,
  selectNodeColorBy,
  selectNodeSizeBy,
  selectRelevantProperties,
  selectShowAllNodes,
  selectShowOnlySharedNodes,
} from '../../data/state/layout/layout.selectors';
import {
  fitGraph,
  setNodeColorBy,
  setNodeSizeBy,
  toggleBooleanProperty,
  toggleShowAllNodes,
  toggleShowOnlySharedNodes,
} from '../../data/state/layout/layout.actions';
import { PatientSelectionEnum } from '../../core/enum/patient-selection-enum';
import { selectPatientSelection } from '../../data/state/patient/patient.selectors';
import { Property } from '../../data/schema/property';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss'],
})
export class SidebarLayoutComponent implements OnInit {
  patientSelection$!: Observable<PatientSelectionEnum>;

  nodeColorBy$!: Observable<Property | null>;

  nodeSizeBy$!: Observable<Property | null>;

  booleanProperty$!: Observable<Property | null>;

  gradient$!: Observable<string | null>;

  showAllNodes$!: Observable<boolean>;

  showOnlySharedNodes$!: Observable<boolean>;

  properties$!: Observable<Property[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.patientSelection$ = this.store.select(selectPatientSelection);
    this.nodeColorBy$ = this.store.select(selectNodeColorBy);
    this.nodeSizeBy$ = this.store.select(selectNodeSizeBy);
    this.showAllNodes$ = this.store.select(selectShowAllNodes);
    this.booleanProperty$ = this.store.select(selectActiveBooleanProperty);
    this.gradient$ = this.store.select(selectGradient);
    this.showOnlySharedNodes$ = this.store.select(selectShowOnlySharedNodes);
    this.properties$ = this.store.select(selectRelevantProperties);
  }

  setNodeColorBy(nodeColorBy: Property | null) {
    this.store.dispatch(setNodeColorBy({ nodeColorBy }));
  }

  setNodeSizeBy(nodeSizeBy: Property | null) {
    this.store.dispatch(setNodeSizeBy({ nodeSizeBy }));
  }

  toggleBooleanProperty(booleanProperty: Property | null) {
    this.store.dispatch(toggleBooleanProperty({ booleanProperty }));
  }

  toggleShowAllNodes() {
    this.store.dispatch(toggleShowAllNodes());
  }

  toggleShowOnlySharedNodes() {
    this.store.dispatch(toggleShowOnlySharedNodes());
  }

  triggerFitGraph() {
    this.store.dispatch(fitGraph());
  }
}
