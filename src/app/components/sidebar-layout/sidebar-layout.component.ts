import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import { NodeColorByEnum } from '../../core/enum/node-color-by.enum';
import { NodeSizeByEnum } from '../../core/enum/node-size-by.enum';
import {
  selectNodeColorBy,
  selectNodeSizeBy,
  selectShowAllNodes,
  selectShowMtbResults,
  selectShowOnlySharedNodes,
} from '../../data/state/layout/layout.selectors';
import {
  fitGraph,
  setNodeColorBy,
  setNodeSizeBy,
  toggleShowAllNodes,
  toggleShowMtbResults,
  toggleShowOnlySharedNodes,
} from '../../data/state/layout/layout.actions';
import { PatientSelectionEnum } from '../../core/enum/patient-selection-enum';
import {
  selectGeMax, selectGeMidRange,
  selectGeMin,
  selectPatientSelection,
  selectScoreMax, selectScoreMidRange,
  selectScoreMin,
} from '../../data/state/patient/patient.selectors';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss'],
})
export class SidebarLayoutComponent implements OnInit {
  patientSelection$!: Observable<PatientSelectionEnum>;

  nodeColorBy$!: Observable<NodeColorByEnum>;

  nodeSizeBy$!: Observable<NodeSizeByEnum>;

  showMtbResult$!: Observable<boolean>;

  showAllNodes$!: Observable<boolean>;

  showOnlySharedNodes$!: Observable<boolean>;

  scoreMin$!: Observable<number | null>;

  scoreMidRange$!: Observable<number | null>;

  scoreMax$!: Observable<number | null>;

  geMin$!: Observable<number | null>;

  geMidRange$!: Observable<number | null>;

  geMax$!: Observable<number | null>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.patientSelection$ = this.store.select(selectPatientSelection);
    this.nodeColorBy$ = this.store.select(selectNodeColorBy);
    this.nodeSizeBy$ = this.store.select(selectNodeSizeBy);
    this.showMtbResult$ = this.store.select(selectShowMtbResults);
    this.showAllNodes$ = this.store.select(selectShowAllNodes);
    this.showOnlySharedNodes$ = this.store.select(selectShowOnlySharedNodes);
    this.scoreMin$ = this.store.select(selectScoreMin);
    this.scoreMidRange$ = this.store.select(selectScoreMidRange)
    this.scoreMax$ = this.store.select(selectScoreMax);
    this.geMin$ = this.store.select(selectGeMin);
    this.geMidRange$ = this.store.select(selectGeMidRange);
    this.geMax$ = this.store.select(selectGeMax);
  }

  setNodeColorBy(nodeColorBy: NodeColorByEnum) {
    this.store.dispatch(setNodeColorBy({ nodeColorBy }));
  }

  setNodeSizeBy(nodeSizeBy: NodeSizeByEnum) {
    this.store.dispatch(setNodeSizeBy({ nodeSizeBy }));
  }

  toggleShowMtbResults() {
    this.store.dispatch(toggleShowMtbResults());
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
