import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  faArrowCircleDown,
  faArrowLeft,
  faBars,
  faClone,
  faComments,
  faDownload,
  faExclamationTriangle,
  faFileImport,
  faHospitalUser,
  faInfo,
  faInfoCircle,
  faLink,
  faPalette,
  faProjectDiagram,
  faRedo,
  faSortAmountUp,
  faStar,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GraphComponent } from './components/graph/graph.component';
import { SidebarPatientsComponent } from './components/sidebar-patients/sidebar-patients.component';
import { SidebarNodesComponent } from './components/sidebar-nodes/sidebar-nodes.component';
import { SidebarLayoutComponent } from './components/sidebar-layout/sidebar-layout.component';
import { SidebarThresholdComponent } from './components/sidebar-threshold/sidebar-threshold.component';
import { SidebarDownloadComponent } from './components/sidebar-download/sidebar-download.component';
import { SidebarLegalComponent } from './components/sidebar-legal/sidebar-legal.component';
import { reducers } from './data/state/reducers';
import { effects } from './data/state/effects';
import { SidebarPatientsDropdownComponent } from './components/sidebar-patients-dropdown/sidebar-patients-dropdown.component';
import { SidebarThresholdSelectorComponent } from './components/sidebar-threshold-selector/sidebar-threshold-selector.component';
import { SidebarLayoutFormComponent } from './components/sidebar-layout-form/sidebar-layout-form.component';
import { SidebarDownloadFormComponent } from './components/sidebar-download-form/sidebar-download-form.component';
import { SidebarNodesFormComponent } from './components/sidebar-nodes-form/sidebar-nodes-form.component';
import { SidebarGeneratorComponent } from './components/sidebar-generator/sidebar-generator.component';
import { SidebarGeneratorFormComponent } from './components/sidebar-generator-form/sidebar-generator-form.component';
import { SidebarGeneratorTableComponent } from './components/sidebar-generator-table/sidebar-generator-table.component';
import { SidebarGeneratorComponentVisibilityComponent } from './components/sidebar-generator-component-visibility/sidebar-generator-component-visibility.component';
import { SidebarGeneratorResultComponent } from './components/sidebar-generator-result/sidebar-generator-result.component';
import { HomeComponent } from './layout/home/home.component';
import { NetworkComponent } from './layout/network/network.component';
import { LinkComponent } from './layout/link/link.component';
import { LinkContentComponent } from './layout/link-content/link-content.component';
import { HomeContentComponent } from './layout/home-content/home-content.component';
import { HomeModalFormatComponent } from './layout/home-modal-format/home-modal-format.component';
import { SidebarGeneratorBoolVisibilityComponent } from './components/sidebar-generator-bool-visibility/sidebar-generator-bool-visibility.component';
import { SidebarThresholdSelectorRangeComponent } from './components/sidebar-threshold-selector-range/sidebar-threshold-selector-range.component';
import { SidebarLayoutFormDiscreteComponent } from './components/sidebar-layout-form-discrete/sidebar-layout-form-discrete.component';
import { SidebarLayoutFormContinuousComponent } from './components/sidebar-layout-form-continuous/sidebar-layout-form-continuous.component';
import { SidebarLayoutFormBooleanComponent } from './components/sidebar-layout-form-boolean/sidebar-layout-form-boolean.component';
import { CoreModule } from './core/core.module';
import { extModules } from './build-specifics';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GraphComponent,
    SidebarPatientsComponent,
    SidebarNodesComponent,
    SidebarLayoutComponent,
    SidebarThresholdComponent,
    SidebarDownloadComponent,
    SidebarLegalComponent,
    SidebarPatientsDropdownComponent,
    SidebarThresholdSelectorComponent,
    SidebarLayoutFormComponent,
    SidebarDownloadFormComponent,
    SidebarNodesFormComponent,
    SidebarGeneratorComponent,
    SidebarGeneratorFormComponent,
    SidebarGeneratorTableComponent,
    SidebarGeneratorComponentVisibilityComponent,
    SidebarGeneratorResultComponent,
    HomeComponent,
    NetworkComponent,
    LinkComponent,
    LinkContentComponent,
    HomeContentComponent,
    HomeModalFormatComponent,
    SidebarGeneratorBoolVisibilityComponent,
    SidebarThresholdSelectorRangeComponent,
    SidebarLayoutFormDiscreteComponent,
    SidebarLayoutFormContinuousComponent,
    SidebarLayoutFormBooleanComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(reducers, {}),
    extModules,
    EffectsModule.forRoot(effects),
    NgbModule,
    FontAwesomeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faArrowCircleDown,
      faBars,
      faHospitalUser,
      faPalette,
      faProjectDiagram,
      faSortAmountUp,
      faTimes,
      faInfo,
      faInfoCircle,
      faRedo,
      faLink,
      faClone,
      faDownload,
      faFileImport,
      faComments,
      faArrowLeft,
      faStar,
      faExclamationTriangle,
    );
  }
}
