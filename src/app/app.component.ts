import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from './services/data.service';
import { GraphService } from './services/graph.service';
import { PatientCollection } from './models/patient-collection';
import { Patient } from './models/patient';
import { PatientItem } from './models/patient-item';
import { Observable } from 'rxjs';
import { Threshold } from './models/threshold';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   * True, if the sidebar is visible
   */
  showSidebar = true;

  /**
   * Cytoscape container used for rendering the network
   */
  @ViewChild('cy') cyContainer!: ElementRef;

  patientData$!: Observable<PatientCollection> | null;

  thresholdData$!: Observable<Threshold> | null;

  /**
   * Constructor
   * @param dataService Needed to load network data
   * @param graphService Needed to initialize the network's core
   */
  constructor(private dataService: DataService, private graphService: GraphService) {}

  /**
   * Loading the network and rendering the initially displayed network
   */
  ngOnInit(): void {
    this.dataService.loadNetwork().subscribe((network) => {
      this.graphService.initializeCore(network, this.cyContainer.nativeElement);
    });

    this.patientData$ = this.dataService.loadPatientsClassified();
    this.thresholdData$ = this.dataService.loadThresholds();
  }
}
