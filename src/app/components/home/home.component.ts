import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Threshold } from '../../models/threshold';
import { DataService } from '../../services/data.service';
import { GraphService } from '../../services/graph.service';
import { RoutingConfig } from '../../models/routing-config';
import { StoreService } from '../../services/store.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * True, if the sidebar is visible
   */
  // showSidebar = true;

  /**
   * Cytoscape container used for rendering the network
   */
  @ViewChild('cy') cyContainer!: ElementRef;

  /**
   * Containing basic patient information
   */
  // patientData$!: Observable<PatientCollection>;

  /**
   * List of nodes
   */
  // nodeData: Node[] = [];

  /**
   * List of protein occurrences
   */
  // totalOccurrences: any = {};

  /**
   * Threshold data
   */
  thresholdData!: Threshold;

  /**
   * Constructor
   * @param dataService Needed to load network data
   * @param graphService Needed to initialize the network's core
   * @param storeService Needed to access loaded data
   */
  constructor(
    private dataService: DataService,
    private graphService: GraphService,
    public storeService: StoreService,
    public utilService: UtilService,
  ) {
  }

  /**
   * Loading the network and rendering the initially displayed network
   */
  ngOnInit(): void {
    const routingConfig = this.graphService.getRoutingConfig();

    this.storeService.networkData.subscribe((data) => {
      this.graphService.initializeCore(data, this.cyContainer.nativeElement);
    });

    if (routingConfig) {
      this.graphService.updateBasicVisualizationByRoutingConfig();
      // this.storeService.showSidebar = !routingConfig.collapsedSidebar; // fixme
    }
  }

}
