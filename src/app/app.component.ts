import {Component, OnChanges, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {PatientsResponse} from './patients-response';
import {DataLoaderService} from './data-loader.service';
import {Patient} from './patient';
import {CyGraphService} from './cy-graph.service';
import {Threshold} from './threshold';
import {ThresholdResponse} from './threshold-response';
import { saveAs} from 'file-saver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit, OnChanges, OnInit {
  public title = 'Patient Specific Molecular Sub-Networks Responsible for Metastasis in Breast Cancer';

  sideBarShown = true;
  activeMenuItem = {
    nodes: true,
    patient: true,
    threshold: true,
    layout: true,
    download: false
  };
  private cy;

  @ViewChild('cy') cyDiv: ElementRef;

  objectKeys = Object.keys;
  thresholds: ThresholdResponse;

  patients: PatientsResponse = {metastatic: [],
                                nonmetastatic: []};

  selectedMetastaticPatient: Patient;

  selectedNonmetastaticPatient: Patient;
  layoutNodeSize = 'rel';

  layoutNodeColor = 'geLevel';
  layoutNodeSizeOptions = {
    rel: 'Relevance',
    ge: 'Gene Expression'
  };
  layoutNodeColorOptions = {
    geLevel: 'Gene Expression Level (Low, Normal, High)',
    ge: 'Gene Expression',
    rel: 'Relevance'
  };
  layoutAllNodes = true;

  downloadFormat = 'png';
  downloadTransparent = false;
  downloadScaleImageBy = 1.0;

  constructor(private httpClient: HttpClient,
              private dataLoader: DataLoaderService,
              private cyGraph: CyGraphService) {}

  XOR(a: boolean, b: boolean) { return ( a || b ) && !( a && b ); }

  ngOnChanges() {
  }


  ngOnInit() {
    this.dataLoader.getThresholds().subscribe(data => {
      this.thresholds = new ThresholdResponse(data);
      this.cyGraph.setThreshold(this.thresholds);
      console.log('Multiplier1: ' + this.thresholds.multiplier);
    });

    this.dataLoader.getPatients().subscribe((data: PatientsResponse) => {
      console.log('Loaded patients:');
      console.log(data);
      this.patients = new PatientsResponse(data, this.dataLoader);
    });
  }

  ngAfterViewInit() {
    console.log("Init Graph: " + this.layoutNodeSize);
    this.cyGraph.initGraph(this.cyDiv, this.layoutNodeSize, this.layoutNodeColor);
  }

  setMetastaticPatient(pat: Patient) { this.cyGraph.setMetastaticPatient(pat); }
  setNonMetastaticPatient(pat: Patient) { this.cyGraph.setNonMetastaticPatient(pat); }

  toggleMenu(name: string) {
    this.activeMenuItem[name] = !this.activeMenuItem[name];
  }

  updateNodeSize(by: string) {
    console.log('Change Node Size: ' + by);
    this.cyGraph.setSizeBy(by);
  }

  updateNodeColor(by: string) {
    console.log('Change Node Color: ' + by);
    this.cyGraph.setColorBy(by);
  }

  updateAllNodes(shown: boolean) {
    // this.layoutAllNodes = shown;
    this.cyGraph.setShowAllNodes(shown);
    console.log('Show all nodes: ' + shown);
  }

  updateThreshold(thresholds: ThresholdResponse){
    this.cyGraph.updateThreshold(thresholds);
  }

  downloadImage(type: string) {
    console.log(type);
    const image = this.cyGraph.getImage(type, this.downloadTransparent, this.downloadScaleImageBy);

    let filename = 'test.' + type;
    if (this.selectedMetastaticPatient === undefined && this.selectedNonmetastaticPatient === undefined){
      filename = 'PPI_network.' + type;
    } else if (this.selectedMetastaticPatient !== undefined && this.selectedNonmetastaticPatient === undefined) {
      filename = this.selectedMetastaticPatient.name + '.' + type;
    } else if (this.selectedMetastaticPatient === undefined && this.selectedNonmetastaticPatient !== undefined) {
      filename = this.selectedNonmetastaticPatient.name + '.' + type;
    } else {
      filename = this.selectedMetastaticPatient.name + '_vs_' + this.selectedNonmetastaticPatient.name + '.' + type;
    }
    saveAs(image, filename);
  }
}
