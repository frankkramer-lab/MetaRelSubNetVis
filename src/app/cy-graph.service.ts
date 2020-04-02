import {ElementRef, Injectable, ViewChild} from '@angular/core';
import {DataLoaderService} from './data-loader.service';
import {Network} from './network';
import cytoscape from 'cytoscape';
import {Patient} from './patient';
import {ThresholdResponse} from './threshold-response';
import {Threshold} from './threshold';

@Injectable({
  providedIn: 'root'
})
export class CyGraphService {
  private colors = {
    red: '#ff3d6a',
    yellow: '#e8e857',
    // yellow: '#d6d656',
    blue: '#599eff',
    green: '#0b0'
  }

  private cy: any;
  private metPat: Patient;
  private nonPat: Patient;
  private showAllNodes: boolean;
  private sizeBy: string;
  private colorBy: string;
  private thresholds: ThresholdResponse;

  constructor(private dataLoader: DataLoaderService) { }


  initGraph(cyDiv: ElementRef, sizeBy: string, colorBy:string) {
    this.sizeBy = sizeBy;
    this.colorBy = colorBy;
    console.log("In the init of cyService");
    this.dataLoader.getNetwork().subscribe((network) => {
      console.log("init cytoscape");
      this.cy = cytoscape({
              container: cyDiv.nativeElement, // container to render in

              elements: network,

              style: [ // the stylesheet for the graph
                {
                  selector: 'node',
                  style: {
                    label: 'data(id)',
                    'text-valign': 'center',
                    'background-color': '#888',
                    color: '#fff',
                    // color: '#242424',
                    'text-outline-color': '#888',
                    'text-outline-width': '5px',
                    width: '50px', height: '50px'
                  }
                },
                //
                // {
                //   selector: 'node[?member]',
                //   style: {
                //     'background-color': 'mapData(color, 0.00017, 0.00029, blue, red)',
                //     'text-outline-color': 'mapData(color, 0.00017, 0.00029, blue, red)',
                //     width: 'mapData(size, 0.00017, 0.00029, 50, 130)',
                //     height: 'mapData(size, 0.00017, 0.00029, 50, 130)'
                //   }
                // },
                {
                  selector: 'node[color]',
                  style: {
                      color: '#383838',
                      'font-weight': 'bold',
                  }
                },
                {
                  selector: 'node[!shown]',
                  style: {
                    visibility: 'hidden'
                  }
                },

                {
                  selector: 'node.mtb',
                  style: {
                    'border-width': '7px',
                    'border-color': this.colors.green
                  }
                },
                {
                  selector: 'node.split',
                  style: {
                    'pie-size': '100%',
                    'pie-1-background-color': 'mapData(colorMet, 0.00017, 0.00029, blue, red)',
                    'pie-1-background-size': '50%'
                  }
                },
                {
                  selector: 'edge[!shown]',
                  style: {
                    visibility: 'hidden'
                  }
                },

                {
                  selector: 'edge',
                  style: {
                    width: 3,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle'
                  }
                },

                {
                  selector: 'edge[highlight]',
                  style: {
                    width: 3,
                    'line-color': this.colors.green,
                  }
                }

              ],

              layout: {
                name: 'concentric',
                levelWidth( nodes ) { // the letiation of concentric values in each level
                  return nodes.maxDegree() / 5;
                },
                spacingFactor: 1.5
              }
            })
      this.cy.elements('node')
        .data('shown', true);
    });
  }

  setMetastaticPatient(metPat: Patient) {
    this.metPat = metPat;
    this.layoutPatient();
  }

  setNonMetastaticPatient(nonPat: Patient) {
    this.nonPat = nonPat;
    this.layoutPatient();
  }

  setShowAllNodes(shown: boolean) {
    this.showAllNodes = shown;
    this.updataShownNodes();
  }

  setSizeBy(by: string) {
    this.sizeBy = by;
    this.layoutPatient();
  }

  setColorBy(by: string) {
    this.colorBy = by;
    this.layoutPatient();
  }

  private updataShownNodes() {
    this.cy.batch(() => {
      this.cy.elements('node[member]')
        .data('shown', true);
      this.cy.elements('node[!member]')
        .data('shown', this.showAllNodes);
      this.cy.elements('node[member]')
        .connectedEdges()
        .data('shown', true);
      this.cy.elements('node[!member]')
        .connectedEdges()
        .data('shown', this.showAllNodes);
    });
  }

  private clear() {
    this.cy.batch(() => {
      this.cy.elements('node')
        .removeData('member')
        .removeData('color')
        .removeData('size')
        .removeClass('mtb')
        .removeClass('split');
      // this.updataShownNodes();
    });
  }

  private setSizeMap(minValue, maxValue) {
    const sizeMap = 'mapData(size, ' + minValue + ', ' + maxValue + ', 50, 130)';
    const fontSizeMap = 'mapData(size, ' + minValue + ', ' + maxValue + ', 18, 30)';
    this.cy.style()
      .selector('node[?member]')
      .style('width', sizeMap)
      .style('height', sizeMap)
      .style('font-size', fontSizeMap);
  }

  private setColorMap(minValue, maxValue) {
    const colorMap = 'mapData(color, ' + minValue + ', ' + maxValue + ', ' + this.colors.blue + ', ' + this.colors.red + ')';
    this.cy.style()
      .selector('node[?member]')
      .style('background-color', colorMap)
      .style('text-outline-color', colorMap);
  }

  private setColorDisc() {
    this.cy.style()
      .selector('node[color]')
      .style('color', '#242424')
      .style('font-weight', 'bold')
      .selector('node[color = \'LOW\']')
      .style('background-color', this.colors.blue)
      .style('text-outline-color', this.colors.blue)
      .selector('node[color = \'NORMAL\']')
      .style('background-color', this.colors.yellow)
      .style('text-outline-color', this.colors.yellow)
      .selector('node[color = \'HIGH\']')
      .style('background-color', this.colors.red)
      .style('text-outline-color', this.colors.red);
  }

  private visualizeOne(pat: Patient, threshold: Threshold) {
    console.log('Layout Patient: ' + pat.name);
    this.cy.batch(() => {
      this.clear();

      let size: string;
      if (this.sizeBy === 'rel') {
        size = 'score';
        this.setSizeMap(pat.getMinScore(), pat.getMaxScore());
      } else if (this.sizeBy === 'ge') {
        size = 'ge';
        this.setSizeMap(pat.getMinGe(), pat.getMaxGe());
      }

      let color: string;
      if (this.colorBy === 'rel') {
        color = 'score';
        this.setColorMap(pat.getMinScore(), pat.getMaxScore());
      } else if (this.colorBy === 'ge') {
        color = 'ge';
        this.setColorMap(pat.getMinGe(), pat.getMaxGe());
      } else if (this.colorBy === 'geLevel') {
        color = 'geLevel';
        this.cy.style()
          this.setColorDisc();
      }

      for (const data of pat.patientData) {
        // console.log("Score: " + data.score + " Threshold: " + (threshold.selected / this.thresholds.multiplier) + " IF: " + (data.score >= (threshold.selected / this.thresholds.multiplier)));
        if (data.score >= (threshold.selected / this.thresholds.multiplier)) {
          console.log('size: ' + size);
          console.log('Patient Data: ' + data);
          const node = this.cy.getElementById(data.name)
            .data('member', true)
            .data('shown', true)
            .data('score', data.score)
            .data('size', data[size])
            .data('color', data[color]);
          if (data.mtb) {
            node.addClass('mtb');
          }
        }
      }

      this.updataShownNodes();
    });
  }

  private visualizeTwo() {
    console.log('Layout Patient: ' + this.metPat.name);
    this.cy.batch(() => {
      this.cy.elements('node')
        .data('member', false);
      // .removeData('member');
      console.log(this.cy.elements('node').data('shown'));

      for (let node of this.metPat.patientData) {
        this.cy.getElementById(node.name)
          .data('member', true)
          .data('shown', true)
          .data('score', node.score)
          .data('colorMet', 0)
          // .data('colorMet', node.score)
          .addClass('split')
          .data('ge', node.ge)
          .data('mtb', node.mtb);
      }

      this.updataShownNodes();
    });
  }

  //TODO: in R: include ge, not only LOW,NORMAL,HIGH
  //Add selector for pos/neg GE and mapping from blue-yellow-red
  //Add selectors and data assignment when more than one node are selected
  layoutPatient() {
    console.log('Met Patient defined: ' + (this.metPat !== undefined));
    console.log('Non Patient defined: ' + (this.nonPat !== undefined));
    if ((this.metPat !== undefined) && (this.nonPat !== undefined)) {
      console.log('Layout two patients!');
      this.clear();
      this.visualizeTwo();
    } else if (this.metPat !== undefined) {
      console.log('Layout metPat!');
      this.visualizeOne(this.metPat, this.thresholds.metastatic);
    } else if (this.nonPat !== undefined) {
      console.log('Layout nonPat!');
      this.visualizeOne(this.nonPat, this.thresholds.nonmetastatic);
    } else {
      console.log('Nothing to layout!');
      this.clear();
      this.cy.elements('node')
        .data('shown', true);
      this.updataShownNodes();
    }
  }

  setThreshold(thresholds: ThresholdResponse) {
    this.thresholds = thresholds;
  }

  updateThreshold(thresholds: ThresholdResponse) {
    this.thresholds = thresholds;
    this.layoutPatient();
  }
}
