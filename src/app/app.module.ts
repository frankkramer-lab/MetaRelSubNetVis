import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  faArrowCircleDown,
  faBars,
  faClone,
  faDownload,
  faFileImport,
  faHospitalUser,
  faInfo,
  faInfoCircle,
  faLink,
  faPalette,
  faProjectDiagram,
  faRedo,
  faSortAmountUp,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GraphComponent } from './components/graph/graph.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { SidebarPatientsComponent } from './components/sidebar-patients/sidebar-patients.component';
import { SidebarNodesComponent } from './components/sidebar-nodes/sidebar-nodes.component';
import { SidebarLayoutComponent } from './components/sidebar-layout/sidebar-layout.component';
import {
  SidebarThresholdComponent,
} from './components/sidebar-threshold/sidebar-threshold.component';
import { SidebarDownloadComponent } from './components/sidebar-download/sidebar-download.component';
import { SidebarLegalComponent } from './components/sidebar-legal/sidebar-legal.component';
import { reducers } from './data/state/reducers';
import { effects } from './data/state/effects';
import {
  SidebarPatientsDropdownComponent,
} from './components/sidebar-patients-dropdown/sidebar-patients-dropdown.component';
import {
  SidebarThresholdSelectorComponent,
} from './components/sidebar-threshold-selector/sidebar-threshold-selector.component';
import {
  SidebarLayoutFormComponent,
} from './components/sidebar-layout-form/sidebar-layout-form.component';
import {
  SidebarDownloadFormComponent,
} from './components/sidebar-download-form/sidebar-download-form.component';
import {
  SidebarNodesFormComponent,
} from './components/sidebar-nodes-form/sidebar-nodes-form.component';
import { environment } from '../environments/environment';
import {
  SidebarGeneratorComponent,
} from './components/sidebar-generator/sidebar-generator.component';
import {
  SidebarGeneratorFormComponent,
} from './components/sidebar-generator-form/sidebar-generator-form.component';
import {
  SidebarGeneratorTableComponent,
} from './components/sidebar-generator-table/sidebar-generator-table.component';
import { SidebarImportComponent } from './components/sidebar-import/sidebar-import.component';
import {
  SidebarImportFormComponent,
} from './components/sidebar-import-form/sidebar-import-form.component';
import { NormPipe } from './core/pipe/norm.pipe';
import { SidebarGeneratorComponentVisibilityComponent } from './components/sidebar-generator-component-visibility/sidebar-generator-component-visibility.component';
import { SidebarGeneratorResultComponent } from './components/sidebar-generator-result/sidebar-generator-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
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
    SidebarImportComponent,
    SidebarImportFormComponent,
    NormPipe,
    SidebarGeneratorComponentVisibilityComponent,
    SidebarGeneratorResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
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
    );
  }
}
