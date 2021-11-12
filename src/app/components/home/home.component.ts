import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PatientCollection } from '../../models/patient-collection';
import { Node } from '../../models/node';
import { Threshold } from '../../models/threshold';
import { DataService } from '../../services/data.service';
import { GraphService } from '../../services/graph.service';
import { RoutingConfig } from '../../models/routing-config';
import { PatientSelection } from '../../models/patient-selection';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
  patientData$!: Observable<PatientCollection>;

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

    // this.dataService.loadPatientsClassified().subscribe((data) => {
    //   this.patientData$ = data;
    // });

    this.dataService.loadThresholds().subscribe((data) => {
      this.thresholdData = data;
      this.graphService.setThresholds(data);
      this.graphService.setGeRange(this.patientData$);

      const routingConfig = this.graphService.getRoutingConfig();

      if (routingConfig) {
        this.initByRoutingConfig(routingConfig);
      }
    });
  }

  private initByRoutingConfig(routingConfig: RoutingConfig): void {
    // if (routingConfig.loadAndSelectMeta) {
    //   this.patientSelection.metastatic =
    //     this.patientData.metastatic.find((a) => a.name === routingConfig.loadAndSelectMeta) ?? null;
    // }
    //
    // if (routingConfig.loadAndSelectNonmeta) {
    //   this.patientSelection.nonmetastatic =
    //     this.patientData.nonmetastatic.find((a) => a.name === routingConfig.loadAndSelectNonmeta) ??
    //     null;
    // }
    //
    // console.log(this.patientSelection);

  }
}
