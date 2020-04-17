import {Component, OnChanges, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PatientsResponse} from './patients-response';
import {DataLoaderService} from './data-loader.service';
import {Patient} from './patient';
import {CyGraphService} from './cy-graph.service';
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
    nodes: false,
    patient: true,
    threshold: false,
    layout: true,
    download: false
  };
  private cy;

  @ViewChild('cy') cyDiv: ElementRef;

  objectKeys = Object.keys;
  thresholds: ThresholdResponse;

  patients: PatientsResponse = {metastatic: [],
                                nonmetastatic: [],
                                geMin: 0,
                                geMax: 15};

  selectedMetastaticPatient: Patient;

  selectedNonmetastaticPatient: Patient;
  layoutNodeSize = 'rel';

  layoutNodeColor = 'geLevel';
  layoutNodeSizeOptions = {
    rel: 'Relevance',
    ge: 'Gene Expression'
  };
  layoutNodeColorOptions = {
    geLevel: 'Gene Expression Level ',
    ge: 'Gene Expression',
    rel: 'Relevance'
  };
  layoutAllNodes = false;
  layoutMtbNodes = true;

  downloadFormat = 'png';
  downloadTransparent = false;
  downloadScaleImageBy = 1.0;
  nodes = [];
  searchNode = '';
  selectedNode = undefined;
  layoutOnlyShared = false;
  nodeInfo: object;
  subtypeCounts: object;
  private nodeSort = 'name';

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
      // console.log('Multiplier1: ' + this.thresholds.multiplier);
    });

    this.dataLoader.getPatients().subscribe((data: PatientsResponse) => {
      // console.log('Loaded patients:');
      // console.log(data);
      this.patients = new PatientsResponse(data, this.dataLoader);
      this.cyGraph.setGeRange(this.patients.geMin, this.patients.geMax);
    });
  }

  ngAfterViewInit() {
    // console.log("Init Graph: " + this.layoutNodeSize);
    this.dataLoader.getNetwork().subscribe((network) => {
      this.subtypeCounts = network.occ;
      this.nodeInfo = {};
      network.nodes.forEach((node) => {
        this.nodeInfo[node.data.id] = node.occ;
      });
      this.cyGraph.initGraph(this.cyDiv, network, this.layoutNodeSize, this.layoutNodeColor);
    });
  }


  setMetastaticPatient(pat: Patient) {
    this.cyGraph.setMetastaticPatient(pat);
    this.updateNetwork();
  }
  setNonMetastaticPatient(pat: Patient) {
    this.cyGraph.setNonMetastaticPatient(pat);
    this.updateNetwork();
  }

  toggleMenu(name: string) {
    if (name === 'nodes') {
      this.updateNetwork();
    }
    this.activeMenuItem[name] = !this.activeMenuItem[name];
  }

  updateNodeSize(by: string) {
    // console.log('Change Node Size: ' + by);
    this.cyGraph.setSizeBy(by);
    this.updateNetwork();
  }

  updateNodeColor(by: string) {
    // console.log('Change Node Color: ' + by);
    this.cyGraph.setColorBy(by);
    this.updateNetwork();
  }

  updateAllNodes(shown: boolean) {
    if (this.layoutOnlyShared && shown) {
      this.layoutOnlyShared = false;
      this.cyGraph.setShowOnlySharedNodes(false);
    }
    this.cyGraph.setShowAllNodes(shown);
    this.updateNetwork();
  }

  updateMtbNodes(shown: boolean) {
    // console.log('MTB: ' + shown);
    this.cyGraph.setShowMtbNodes(shown);
  }

  updateSharedNodes(shown: boolean) {
    if (this.layoutAllNodes && shown) {
      this.layoutAllNodes = false;
      this.cyGraph.setShowAllNodes(false);
    }
    this.cyGraph.setShowOnlySharedNodes(shown);
    this.updateNetwork();
  }

  updateThreshold(thresholds: ThresholdResponse) {
    this.cyGraph.updateThreshold(thresholds);
    this.updateNetwork();
  }

  updateNodeSort(column: string){
    this.nodeSort = column;
    this.updateNetwork();
  }

  updateNetwork() {
    let nodes = this.cyGraph.getNetwork();
    if (this.searchNode !== '') {
      nodes = nodes.filter((node) => {
        return (node.id.toLowerCase().indexOf(this.searchNode.toLowerCase()) !== -1);
      });
    }
    if (this.nodeSort === 'name') {
      nodes = nodes.sort((a, b) => {return a.id.localeCompare(b.id); });
    } else {
      nodes = nodes.sort((a, b) => {return this.nodeInfo[b.id][this.nodeSort] - this.nodeInfo[a.id][this.nodeSort]; });
    }
    this.nodes = nodes;
  }

  resetNodeSearch() {
    this.searchNode = '';
    this.updateNetwork();
  }

  highlightNode(node: string) {
    // console.log('Highlight node: ' + node);
    if (this.selectedNode === node) {
      this.selectedNode = undefined;
    } else {
      this.selectedNode = node;
    }
    this.cyGraph.highlightNode(this.selectedNode);
  }

  downloadImage(type: string) {
    // console.log(type);
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

  fitGraphToViewport() {
    this.cyGraph.fitGraphToViewport();
  }
}
