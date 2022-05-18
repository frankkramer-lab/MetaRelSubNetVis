import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../data/state/app.state';
import { Patient } from '../../data/schema/patient';
import { NetworkNode } from '../../data/schema/network-node';
import { ImageDownloadConfig } from '../../data/schema/image-download-config';
import { ComponentVisibilityEnum } from '../../core/enum/component-visibility.enum';
import {
  selectGroupLabelA,
  selectGroupLabelB,
  selectPatientA,
  selectPatientB,
} from '../../data/state/patient/patient.selectors';
import { selectMarkedNodes } from '../../data/state/nodes/nodes.selectors';
import {
  selectActiveBooleanProperty,
  selectNodeColorBy,
  selectNodeSizeBy,
  selectShowAllNodes,
  selectShowOnlySharedNodes,
} from '../../data/state/layout/layout.selectors';
import {
  selectGenBackButtonVis,
  selectGenCmpVisDownload,
  selectGenCmpVisGenerator,
  selectGenCmpVisImpressum,
  selectGenCmpVisLayout,
  selectGenCmpVisNodes,
  selectGenCmpVisPatients,
  selectGenCmpVisThreshold,
  selectImageDownloadConfig,
  selectIsImageDownloadConfigValid,
  selectSidebarVisibility,
  selectTriggerImmediateDownload,
  selectUrl,
} from '../../data/state/generator/generator.selectors';
import {
  copyToClipboard,
  setBackButtonVisibility,
  setComponentVisibilityDownload,
  setComponentVisibilityGenerator,
  setComponentVisibilityImport,
  setComponentVisibilityImpressum,
  setComponentVisibilityLayout,
  setComponentVisibilityNodes,
  setComponentVisibilityPatients,
  setComponentVisibilityThreshold,
  setGeneratorImageExtension,
  setGeneratorImageScale,
  setGeneratorSidebarVisibility,
  toggleGeneratorImageBackground,
  toggleGeneratorTriggerImmediateDownload,
} from '../../data/state/generator/generator.actions';
import { selectUuid } from '../../data/state/network/network.selectors';
import { Property } from '../../data/schema/property';
import { ThresholdDefinition } from '../../data/schema/threshold-definition';
import { selectRelevantThresholds } from '../../data/state/threshold/threshold.selectors';

@Component({
  selector: 'app-sidebar-generator',
  templateUrl: './sidebar-generator.component.html',
  styleUrls: ['./sidebar-generator.component.scss'],
})
export class SidebarGeneratorComponent implements OnInit {
  uuid$!: Observable<string | null>;

  groupLabelA$!: Observable<string>;

  groupLabelB$!: Observable<string>;

  patientA$!: Observable<Patient | null>;

  patientB$!: Observable<Patient | null>;

  thresholds$!: Observable<ThresholdDefinition[]>;

  nodes$!: Observable<NetworkNode[] | null>;

  nodesColorBy$!: Observable<Property | null>;

  nodesSizeBy$!: Observable<Property | null>;

  showAll$!: Observable<boolean>;

  showShared$!: Observable<boolean>;

  booleanProperty$!: Observable<Property | null>;

  isImageFormValid$!: Observable<boolean>;

  imageDownloadConfig$!: Observable<ImageDownloadConfig>;

  triggerImmediateImageDownload$!: Observable<boolean>;

  sidebarVisibility$!: Observable<ComponentVisibilityEnum>;

  cmpPatientsVisibility$!: Observable<ComponentVisibilityEnum>;

  cmpThresholdVisibility$!: Observable<ComponentVisibilityEnum>;

  cmpNodesVisibility$!: Observable<ComponentVisibilityEnum>;

  cmpLayoutVisibility$!: Observable<ComponentVisibilityEnum>;

  cmpDownloadVisibility$!: Observable<ComponentVisibilityEnum>;

  cmpGeneratorVisibility$!: Observable<ComponentVisibilityEnum>;

  cmpImpressumVisibility$!: Observable<ComponentVisibilityEnum>;

  backButtonVisibility$!: Observable<boolean>;

  url$!: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.uuid$ = this.store.select(selectUuid);
    this.groupLabelA$ = this.store.select(selectGroupLabelA);
    this.groupLabelB$ = this.store.select(selectGroupLabelB);
    this.patientA$ = this.store.select(selectPatientA);
    this.patientB$ = this.store.select(selectPatientB);
    this.thresholds$ = this.store.select(selectRelevantThresholds);
    this.nodes$ = this.store.select(selectMarkedNodes);
    this.nodesColorBy$ = this.store.select(selectNodeColorBy);
    this.nodesSizeBy$ = this.store.select(selectNodeSizeBy);
    this.showAll$ = this.store.select(selectShowAllNodes);
    this.showShared$ = this.store.select(selectShowOnlySharedNodes);
    this.booleanProperty$ = this.store.select(selectActiveBooleanProperty);
    this.imageDownloadConfig$ = this.store.select(selectImageDownloadConfig);
    this.isImageFormValid$ = this.store.select(selectIsImageDownloadConfigValid);
    this.triggerImmediateImageDownload$ = this.store.select(selectTriggerImmediateDownload);
    this.sidebarVisibility$ = this.store.select(selectSidebarVisibility);
    this.cmpPatientsVisibility$ = this.store.select(selectGenCmpVisPatients);
    this.cmpThresholdVisibility$ = this.store.select(selectGenCmpVisThreshold);
    this.cmpNodesVisibility$ = this.store.select(selectGenCmpVisNodes);
    this.cmpLayoutVisibility$ = this.store.select(selectGenCmpVisLayout);
    this.cmpDownloadVisibility$ = this.store.select(selectGenCmpVisDownload);
    this.cmpGeneratorVisibility$ = this.store.select(selectGenCmpVisGenerator);
    this.cmpImpressumVisibility$ = this.store.select(selectGenCmpVisImpressum);
    this.backButtonVisibility$ = this.store.select(selectGenBackButtonVis);
    this.url$ = this.store.select(selectUrl);
  }

  toggleTriggerImmediateDownload() {
    this.store.dispatch(toggleGeneratorTriggerImmediateDownload());
  }

  setSidebarVisibility(sidebarVisibility: ComponentVisibilityEnum) {
    this.store.dispatch(setGeneratorSidebarVisibility({ sidebarVisibility }));
  }

  setImageExtension(extension: string) {
    this.store.dispatch(setGeneratorImageExtension({ extension }));
  }

  setImageScale(scale: number) {
    this.store.dispatch(setGeneratorImageScale({ scale }));
  }

  setImageTransparentBackground() {
    this.store.dispatch(toggleGeneratorImageBackground());
  }

  buildAndCopyUrl() {
    this.store.dispatch(copyToClipboard());
  }

  setVisibilityImport(visibility: ComponentVisibilityEnum) {
    this.store.dispatch(setComponentVisibilityImport({ visibility }));
  }

  setVisibilityPatients(visibility: ComponentVisibilityEnum) {
    this.store.dispatch(setComponentVisibilityPatients({ visibility }));
  }

  setVisibilityThreshold(visibility: ComponentVisibilityEnum) {
    this.store.dispatch(setComponentVisibilityThreshold({ visibility }));
  }

  setVisibilityNodes(visibility: ComponentVisibilityEnum) {
    this.store.dispatch(setComponentVisibilityNodes({ visibility }));
  }

  setVisibilityLayout(visibility: ComponentVisibilityEnum) {
    this.store.dispatch(setComponentVisibilityLayout({ visibility }));
  }

  setVisibilityDownload(visibility: ComponentVisibilityEnum) {
    this.store.dispatch(setComponentVisibilityDownload({ visibility }));
  }

  setVisibilityGenerator(visibility: ComponentVisibilityEnum) {
    this.store.dispatch(setComponentVisibilityGenerator({ visibility }));
  }

  setVisibilityImpressum(visibility: ComponentVisibilityEnum) {
    this.store.dispatch(setComponentVisibilityImpressum({ visibility }));
  }

  setVisibilityBackButton(backButtonVisibility: boolean) {
    this.store.dispatch(setBackButtonVisibility({ backButtonVisibility }));
  }
}
