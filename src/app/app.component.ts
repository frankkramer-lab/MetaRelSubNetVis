import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { GraphService } from './services/graph.service';
import { PatientCollection } from './models/patient-collection';
import { Threshold } from './models/threshold';
import { Node } from './models/node';

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

  /**
   * Containing basic patient information
   */
  patientData$!: Observable<PatientCollection> | null;

  /**
   * List of nodes
   */
  nodeData: Node[] = [];

  /**
   * List of protein occurrences
   */
  totalOccurrences: any = {};

  /**
   * Treshold data
   */
  thresholdData!: Threshold;

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
      this.nodeData = network.nodes;
      this.totalOccurrences = network.occ;
      this.graphService.initializeCore(network, this.cyContainer.nativeElement);
    });

    this.patientData$ = this.dataService.loadPatientsClassified();
    this.dataService.loadThresholds().subscribe((data) => {
      this.thresholdData = data;
      this.graphService.setThresholds(data);
    });
    this.graphService.setGeRange(this.patientData$);
  }
}
