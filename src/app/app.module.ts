import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  faArrowCircleDown,
  faBars,
  faHospitalUser, faInfo, faInfoCircle,
  faPalette,
  faProjectDiagram, faRedo,
  faSortAmountUp,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { GraphService } from './services/graph.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DownloadComponent } from './components/download/download.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NodesComponent } from './components/nodes/nodes.component';
import { ThresholdComponent } from './components/threshold/threshold.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientDropdownComponent } from './components/patient-dropdown/patient-dropdown.component';
import { ThresholdSliderComponent } from './components/threshold-slider/threshold-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DownloadComponent,
    LayoutComponent,
    NodesComponent,
    ThresholdComponent,
    PatientsComponent,
    PatientDropdownComponent,
    ThresholdSliderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DataService, GraphService],
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
      faRedo,
    );
  }
}
