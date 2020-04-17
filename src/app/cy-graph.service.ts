import {ElementRef, Injectable, ViewChild} from '@angular/core';
import {DataLoaderService} from './data-loader.service';
import {Network} from './network';
import cytoscape from 'cytoscape';
import {Patient} from './patient';
import {ThresholdResponse} from './threshold-response';
import {Threshold} from './threshold';
import {min} from 'rxjs/operators';
import {AppComponent} from './app.component';
import {Edge} from './edge';
import {style} from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class CyGraphService {
  private colors = {
    red: '#ff3d6a',
    yellow: '#e8e857',
    // yellow: '#d6d656',
    blue: '#599eff',
    green: '#0b0',
    gray: '#888',
    highlight: '#333'
  }

  // private appComponent: AppComponent;
  private cy: any;
  private metPat: Patient;
  private nonPat: Patient;
  private showAllNodes = false;
  private showOnlySharedNodes = false;
  private showMtbNodes: boolean;
  private sizeBy: string;
  private colorBy: string;
  private thresholds: ThresholdResponse;
  private geMin: number;
  private geMax: number;
  private highlightedNode: string;

  constructor(private dataLoader: DataLoaderService) { }


  initGraph(cyDiv: ElementRef, network: Network, sizeBy: string, colorBy: string) {
    this.sizeBy = sizeBy;
    this.colorBy = colorBy;
    // console.log("In the init of cyService");
    this.dataLoader.getNetwork().subscribe((network) => {
      // console.log("init cytoscape");
      const layer = {};
      const numberOfLayers = 11;
      network.nodes.forEach((node, i) => {
        if(i < 1) {
          layer[node.data.id] = numberOfLayers;     //1
        } else if (i < 5) {                          //5=4+1
          layer[node.data.id] = numberOfLayers - 1;  //4
        } else if (i < 17) {                         //17=12+5
          layer[node.data.id] = numberOfLayers - 2;  //12=4*3
        } else if (i < 37) {                         //53=36+17
          layer[node.data.id] = numberOfLayers - 3;  //36=12*3
        } else if (i < 61) {                        //161=108+53
          layer[node.data.id] = numberOfLayers - 4;  //108=36*3
        } else if (i < 93) {
          layer[node.data.id] = numberOfLayers - 5;
        } else if (i < 133) {
          layer[node.data.id] = numberOfLayers - 6;
        } else if (i < 173) {
          layer[node.data.id] = numberOfLayers - 7;
        } else if (i < 225) {
          layer[node.data.id] = numberOfLayers - 8;
        } else if (i < 285) {
          layer[node.data.id] = numberOfLayers - 9;
        } else if (i < 335) {
          layer[node.data.id] = numberOfLayers - 10;
        } else {
          layer[node.data.id] = numberOfLayers - 11;
        }
      });


      // console.log('Layer: ' + network.nodes[1].layer);

      this.cy = cytoscape({
              container: cyDiv.nativeElement, // container to render in

              elements: network,

              style: [ // the stylesheet for the graph
                {
                  selector: 'node',
                  style: {
                    label: 'data(id)',
                    'text-valign': 'center',
                    'background-color': this.colors.gray,
                    color: '#fff',
                    // color: '#242424',
                    'text-outline-color': this.colors.gray,
                    'text-outline-width': '5px',
                    width: '50px', height: '50px'
                  }
                },
                {
                  selector: 'node[color], node[colorMet], node[colorNonMet]',
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
                    'border-width': '15px',
                    'border-color': this.colors.green
                  }
                },
                {
                  selector: 'node.split',
                  style: {
                    'text-outline-width': '0px',
                    'text-outline-color': this.colors.gray,
                    'text-outline-opacity': '0.3',
                    width: '80px', height: '80px',
                    'pie-size': '100%',
                    'pie-1-background-color': 'green',
                    'pie-1-background-size': '50%',
                    'pie-2-background-color': 'green',
                    'pie-2-background-size': '50%'
                  }
                },
                {
                  selector: 'node.splitLeft',
                  style: {
                    'text-outline-width': '0px',
                    'text-outline-color': this.colors.gray,
                    'text-outline-opacity': '0.3',
                    width: '80px', height: '80px',
                    'pie-size': '100%',
                    'pie-1-background-color': 'green',
                    'pie-1-background-size': '50%',
                    'pie-2-background-color': 'green',
                    'pie-2-background-size': '50%'
                  }
                },

                {
                  selector: 'node.highlight',
                  style: {
                    'border-width': '13px',
                    'border-color': this.colors.highlight,
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
                  selector: 'edge.highlight',
                  style: {
                    width: 3,
                    'line-color': this.colors.highlight,
                  }
                }

              ],
              layout: {
                name: 'concentric',
                levelWidth( nodes ) { // the letiation of concentric values in each level
                  return 1;
                },
                concentric( node ) { // returns numeric value for each node, placing higher nodes in levels towards the centre
                  // console.log('Node: ' + node.data('id') + ' Layer: ' + layer[node.data('id')]);
                  return layer[node.data('id')];
                },
                spacingFactor: 1.65
              }
              // layout: {
              //   name: 'grid',
              // }
            })
      this.cy.elements('node,edge')
        .data('shown', true);
    });
  }


  setGeRange(geMin: number, geMax: number) {
    this.geMin = geMin;
    this.geMax = geMax;
    // console.log('ge range: '+this.geMin+'-'+this.geMax);
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

  setShowOnlySharedNodes(shown: boolean) {
    this.showOnlySharedNodes = shown;
    this.updataShownNodes();
  }

  setShowMtbNodes(shown: boolean) {
    this.showMtbNodes = shown;
    this.updateMtbNodes();
  }

  setSizeBy(by: string) {
    this.sizeBy = by;
    this.layoutPatient();
  }

  setColorBy(by: string) {
    this.colorBy = by;
    this.layoutPatient();
  }

  getNetwork() {
    const nodes = [];
    this.cy.elements('node[?shown]').forEach((node) => {
      // console.log('Get Network from CS: ' + Object.keys(node.data()) + Object.values(node.data()));
      nodes.push({id: node.id(), connected: node.connectedEdges()});
    });
    return nodes;
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
      this.cy.elements('node.split[colorMet][^colorNonMet]')
        .data('shown', !this.showOnlySharedNodes);
      this.cy.elements('node.split[^colorMet][colorNonMet]')
        .data('shown', !this.showOnlySharedNodes);
      this.cy.elements('node.split[colorMet][^colorNonMet], node.split[^colorMet][colorNonMet]')
        .connectedEdges('edge[?shown]')
        .data('shown', !this.showOnlySharedNodes);
    });
  }

  private clear() {
    this.cy.batch(() => {
      this.cy.elements('node')
        .removeData('member')
        .removeData('color')
        .removeData('colorMet')
        .removeData('colorNonMet')
        .removeData('size')
        .removeClass('mtb')
        .removeClass('split');
      this.removeSizeMap();
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

  private removeSizeMap() {
    this.cy.style()
      .selector('node[?member]')
      // .style('background-color', this.colors.gray)
      // .style('text-outline-color', this.colors.gray)
      .style('width', '50px')
      .style('height', '50px')
      .style('font-size', '18px');
  }

  private setColorMap(minValue, maxValue) {
    const midPoint = maxValue - ((maxValue - minValue) / 2);
    const colorMap1 = 'mapData(color, ' + minValue + ', ' + maxValue + ', ' + this.colors.blue + ', ' + this.colors.yellow + ')';
    const colorMap2 = 'mapData(color, ' + minValue + ', ' + maxValue + ', ' + this.colors.yellow + ', ' + this.colors.red + ')';
    this.cy.style()
      .selector('node[color<=' + midPoint + ']')
      .style('background-color', colorMap1)
      .style('text-outline-color', colorMap1)
      .selector('node[color>' + midPoint + ']')
      .style('background-color', colorMap2)
      .style('text-outline-color', colorMap2);
  }

  private setSplitColorMap(minValueMet, maxValueMet, minValueNonMet, maxValueNonMet) {
    const midPointMet = maxValueMet - ((maxValueMet - minValueMet) / 2);
    const midPointNonMet = maxValueNonMet - ((maxValueNonMet - minValueNonMet) / 2);
    const colorMapMet1 = 'mapData(colorMet, ' + minValueMet + ', ' + maxValueMet + ', ' + this.colors.blue + ', ' + this.colors.yellow + ')';
    const colorMapMet2 = 'mapData(colorMet, ' + minValueMet + ', ' + maxValueMet + ', ' + this.colors.yellow + ', ' + this.colors.red + ')';
    const colorMapNonMet1 = 'mapData(colorNonMet, ' + minValueNonMet + ', ' + maxValueNonMet + ', ' + this.colors.blue + ', ' + this.colors.yellow + ')';
    const colorMapNonMet2 = 'mapData(colorNonMet, ' + minValueNonMet + ', ' + maxValueNonMet + ', ' + this.colors.yellow + ', ' + this.colors.red + ')';
    this.cy.style()
      .selector('node.split[colorMet][colorNonMet]')
      .style('width', '80px')
      .style('height', '80px')
      .selector('node.split[colorMet<=' + midPointMet + ']')
      .style('pie-2-background-color', colorMapMet1)
      .selector('node.split[colorMet>' + midPointMet + ']')
      .style('pie-2-background-color', colorMapMet2)
      .selector('node.split[colorNonMet<=' + midPointNonMet + ']')
      .style('pie-1-background-color', colorMapNonMet1)
      .selector('node.split[colorNonMet>' + midPointNonMet + ']')
      .style('pie-1-background-color', colorMapNonMet2)
      .selector('node.split[colorMet][^colorNonMet]')
      .style('pie-1-background-color', this.colors.gray)
      .selector('node.split[^colorMet][colorNonMet]')
      .style('pie-2-background-color', this.colors.gray);
  }

  private setColorDisc() {
    this.cy.style()
      .selector('node[color]')
      // .style('color', '#242424')
      .style('font-weight', 'bold')
      .selector('node[color = \'LOW\']')
      .style('background-color', this.colors.blue)
      .style('text-outline-color', this.colors.blue)
      .selector('node[color = \'NORMAL\']')
      .style('background-color', this.colors.yellow)
      .style('text-outline-color', this.colors.yellow)
      .selector('node[color = \'HIGH\']')
      .style('background-color', this.colors.red)
      .style('text-outline-color', this.colors.red)
      .selector('node.split[colorMet][colorNonMet]')
      .style('width', '80px')
      .style('height', '80px')
      .selector('node.split[^colorMet], node.split[^colorNonMet]')
      .style('pie-2-background-color', this.colors.gray)
      .style('pie-1-background-color', this.colors.gray)
      .selector('node.split[colorMet = \'LOW\']')
      .style('pie-2-background-color', this.colors.blue)
      .selector('node.split[colorNonMet = \'LOW\']')
      .style('pie-1-background-color', this.colors.blue)
      .selector('node.split[colorMet = \'NORMAL\']')
      .style('pie-2-background-color', this.colors.yellow)
      .selector('node.split[colorNonMet = \'NORMAL\']')
      .style('pie-1-background-color', this.colors.yellow)
      .selector('node.split[colorMet = \'HIGH\']')
      .style('pie-2-background-color', this.colors.red)
      .selector('node.split[colorNonMet = \'HIGH\']')
      .style('pie-1-background-color', this.colors.red);
  }

  updateMtbNodes() {
    if (this.showMtbNodes) {
      this.cy.style()
        .selector('node.mtb')
        .style('border-width', '7px');
    } else {
      this.cy.style()
        .selector('node.mtb')
        .style('border-width', '0px');
    }
    this.layoutPatient();
  }

  private visualizeOne(pat: Patient, threshold: Threshold) {
    // console.log('Layout Patient: ' + pat.name);
    this.cy.batch(() => {
      this.clear();

      let size: string;
      if (this.sizeBy === 'rel') {
        size = 'score';
        this.setSizeMap(threshold.threshold, threshold.max);
        // this.setSizeMap(pat.getMinScore(), pat.getMaxScore());
      } else if (this.sizeBy === 'ge') {
        size = 'ge';
        this.setSizeMap(pat.getMinGe(), pat.getMaxGe());
      }

      let color: string;
      if (this.colorBy === 'rel') {
        color = 'score';
        this.setColorMap(threshold.threshold, threshold.max);
        // this.setColorMap(pat.getMinScore(), pat.getMaxScore());
      } else if (this.colorBy === 'ge') {
        color = 'ge';
        this.setColorMap(this.geMin, this.geMax);
      } else if (this.colorBy === 'geLevel') {
        color = 'geLevel';
        this.setColorDisc();
      }

      for (const data of pat.patientData) {
        // console.log("Score: " + data.score + " Threshold: " + (threshold.selected / this.thresholds.multiplier) + " IF: " + (data.score >= (threshold.selected / this.thresholds.multiplier)));
        if (data.score >= (threshold.selected / this.thresholds.multiplier)) {
          // console.log('size: ' + size);
          // console.log('Patient Data: ' + data);
          const node = this.cy.getElementById(data.name)
            .data('member', true)
            .data('shown', true)
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
    // console.log('Layout Two Patients: ' + this.metPat.name + ' and ' + this.nonPat.name);
    this.cy.batch(() => {
      this.clear();

      let color: string;
      if (this.colorBy === 'rel') {
        color = 'score';
        const minValue = Math.min(this.thresholds.metastatic.threshold, this.thresholds.nonmetastatic.threshold);
        const maxValue = Math.max(this.thresholds.metastatic.max, this.thresholds.nonmetastatic.max);
        this.setColorMap(minValue, maxValue);
        this.setSplitColorMap(
          this.thresholds.metastatic.threshold, this.thresholds.metastatic.max,
          this.thresholds.nonmetastatic.threshold, this.thresholds.nonmetastatic.max
        );
      } else if (this.colorBy === 'ge') {
        color = 'ge';
        // const minValue = Math.min(this.metPat.getMinGe(), this.nonPat.getMinGe());
        // const maxValue = Math.min(this.metPat.getMaxGe(), this.nonPat.getMaxGe());
        // this.setColorMap(minValue, maxValue);
        // this.setSplitColorMap(
        //   this.metPat.getMinGe(), this.metPat.getMaxGe(),
        //   this.nonPat.getMinGe(), this.nonPat.getMaxGe()
        // );
        this.setSplitColorMap(
          this.geMin, this.geMax,
          this.geMin, this.geMax
        );
      } else if (this.colorBy === 'geLevel') {
        color = 'geLevel';
        this.setColorDisc();
      }

      for (const data of this.metPat.patientData) {
        if (data.score >= (this.thresholds.selected / this.thresholds.multiplier)) {
          const node = this.cy.getElementById(data.name)
            .data('member', true)
            .data('shown', true)
            .addClass('split')
            .data('colorMet', data[color]);
          if (data.mtb) {
            node.addClass('mtb');
          }
        }
      }
      for (const data of this.nonPat.patientData) {
        if (data.score >= (this.thresholds.selected / this.thresholds.multiplier)) {
          const node = this.cy.getElementById(data.name)
            .data('member', true)
            .data('shown', true)
            .addClass('split')
            .data('colorNonMet', data[color]);
          if (data.mtb) {
            node.addClass('mtb');
          }
        }
      }

      this.updataShownNodes();
    });
  }


  private visualizeTwo_old() {
    // console.log('Layout Two Patients: ' + this.metPat.name + ' and ' + this.nonPat.name);
    this.cy.batch(() => {
      this.clear();

      let color: string;
      if (this.colorBy === 'rel') {
        color = 'score';
        const minValue = Math.min(this.thresholds.metastatic.threshold, this.thresholds.nonmetastatic.threshold);
        const maxValue = Math.max(this.thresholds.metastatic.max, this.thresholds.nonmetastatic.max);
        this.setColorMap(minValue, maxValue);
        this.setSplitColorMap(
          this.thresholds.metastatic.threshold, this.thresholds.metastatic.max,
          this.thresholds.nonmetastatic.threshold, this.thresholds.nonmetastatic.max
        );
      } else if (this.colorBy === 'ge') {
        color = 'ge';
        const minValue = Math.min(this.metPat.getMinGe(), this.nonPat.getMinGe());
        const maxValue = Math.min(this.metPat.getMaxGe(), this.nonPat.getMaxGe());
        this.setColorMap(minValue, maxValue);
        this.setSplitColorMap(
          this.metPat.getMinGe(), this.metPat.getMaxGe(),
          this.nonPat.getMinGe(), this.nonPat.getMaxGe()
        );
      } else if (this.colorBy === 'geLevel') {
        color = 'geLevel';
        this.setColorDisc();
      }

      const combinedPats = {};
      for (const pat of this.metPat.patientData) {
        combinedPats[pat.name] = [pat];
      }
      for (const pat of this.nonPat.patientData) {
        if (Object.keys(combinedPats).indexOf(pat.name) > -1) {
          combinedPats[pat.name].push(pat);
        } else {
          combinedPats[pat.name] = [pat];
        }
      }

      for (const nodeId of Object.keys(combinedPats)) {
        // console.log("Score: " + data.score + " Threshold: " + (threshold.selected / this.thresholds.multiplier) + " IF: " + (data.score >= (threshold.selected / this.thresholds.multiplier)));
        let data = combinedPats[nodeId];
        // console.log("Node: " + nodeId + " Data: " + data + " Length: " + data.length);
        if (data.length === 2) {
          // console.log("Min Score: " + Math.max(data[0].score, data[1].score) + " Threshold: " + (this.thresholds.selected / this.thresholds.multiplier));
          if (Math.max(data[0].score, data[1].score) >= (this.thresholds.selected / this.thresholds.multiplier)) {
            // console.log('Patient Data: ' + data);
            const node = this.cy.getElementById(nodeId)
              .data('member', true)
              .data('shown', true)
              .addClass('split')
              .data('colorMet', data[0][color])
              .data('colorNonMet', data[1][color]);
            if (data.mtb) {
              node.addClass('mtb');
            }
          }
        } else {
          data = data[0];
          if (data.score >= (this.thresholds.selected / this.thresholds.multiplier)) {
            // console.log('Patient Data: ' + data);
            const node = this.cy.getElementById(data.name)
              .data('member', true)
              .data('shown', true)
              .data('color', data[color]);
            if (data.mtb) {
              node.addClass('mtb');
            }
          }
        }
      }

      this.updataShownNodes();
    });
  }

  layoutPatient() {
    // console.log('Met Patient defined: ' + (this.metPat !== undefined));
    // console.log('Non Patient defined: ' + (this.nonPat !== undefined));
    if ((this.metPat !== undefined) && (this.nonPat !== undefined)) {
      // console.log('Layout two patients!');
      this.clear();
      this.visualizeTwo();
    } else if (this.metPat !== undefined) {
      // console.log('Layout metPat!');
      this.visualizeOne(this.metPat, this.thresholds.metastatic);
    } else if (this.nonPat !== undefined) {
      // console.log('Layout nonPat!');
      this.visualizeOne(this.nonPat, this.thresholds.nonmetastatic);
    } else {
      // console.log('Nothing to layout!');
      this.clear();
      this.cy.elements('node')
        .data('shown', true);
      // this.updataShownNodes();
    }
  }

  setThreshold(thresholds: ThresholdResponse) {
    this.thresholds = thresholds;
  }

  updateThreshold(thresholds: ThresholdResponse) {
    this.thresholds = thresholds;
    this.layoutPatient();
  }

  getImage(type: string, transparent: boolean, scaleBy: number) {
    let image;
    const bgColor = transparent ? 'transparent' : 'white';
    if (type === 'png') {
      image = this.cy.png({bg: bgColor, scale: scaleBy});
    } else {
      image = this.cy.jpg({scale: scaleBy});
    }
    return image;
  }

  highlightNode(node: string) {
    this.cy.elements('node')
      .removeClass('highlight');
    this.cy.elements('edge')
      .removeClass('highlight');
    if (node !== undefined) {
      this.cy.getElementById(node)
        .addClass('highlight')
        .connectedEdges()
        .addClass('highlight');
    }
  }

  fitGraphToViewport() {
    this.cy.fit(this.cy.elements('node[?shown]'));
  }
}
