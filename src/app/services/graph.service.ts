import { Injectable } from '@angular/core';
import * as cytoscape from 'cytoscape';
import { CollectionReturnValue } from 'cytoscape';
// @ts-ignore
import * as svg from 'cytoscape-svg';
import { Node } from '../models/node';
import { Network } from '../models/network';
import { DownloadConfig } from '../models/download-config';
import { VisualizationConfig } from '../models/visualization-config';
import { CancerStatus, UtilService } from './util.service';
import { Threshold } from '../models/threshold';
import { ThresholdItem } from '../models/threshold-item';
import { PatientCollection } from '../models/patient-collection';
import { PatientItem } from '../models/patient-item';
import { RoutingConfig } from '../models/routing-config';
import { Patient } from '../models/patient';
import { DataService } from './data.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  /**
   * List of locally used colors
   * @private
   */
  private colors = {
    red: '#ff3d6a',
    yellow: '#e8e857',
    blue: '#599eff',
    green: '#0b0',
    gray: '#888',
    highlight: '#333',
  };

  /**
   * Configuration information gained during routing.
   * Are only to be set during routing by {@link RoutingGuard}.
   * Are applied after the default {@link visualizationConfig}
   * to override default values.
   */
  private routingConfig!: RoutingConfig;

  /**
   * Current configuration of the sidebar parameter that impact the network visualization
   */
  visualizationConfig: VisualizationConfig = {
    nodeColorBy: 0,
    nodeSizeBy: 0,
    patientsSelected: 0,
    patientMetastatic: null,
    patientDetailsMetastatic: null,
    patientNonmetastatic: null,
    patientDetailsNonmetastatic: null,
    selectedNodes: [],
    showAllNodes: false,
    showOnlySharedNodes: false,
    showMtbResults: true,
    thresholdMin: 0,
    thresholdMax: 0,
    thresholdDefined: 0,
  };

  /**
   * Collection of all available nodes
   */
  allNodes: Node[] | null = null;

  /**
   * Currently visible nodes
   */
  visibleNodes: Node[] | null = null;

  /**
   * List of nodes which were selected by the user
   */
  selectedNodes: Node[] = [];

  /**
   * Core object containing the rendered network
   * @private
   */
  private core!: cytoscape.Core;

  /**
   * List of thresholds for both metastatic and non-metastatic patients
   * @private
   */
  private thresholds!: Threshold;

  /**
   * Minimal gene expression.
   * Data found in patients.json.
   * @private
   */
  private geMin!: number;

  /**
   * Maximal gene expression.
   * Data found in patients.json.
   * @private
   */
  private geMax!: number;

  private patientData!: PatientCollection;

  /**
   * Constructor, binding svg export library to cytoscape
   */
  constructor(
    private utilService: UtilService,
    private dataService: DataService,
    private storeService: StoreService,
  ) {
    cytoscape.use(svg);
    storeService.patientData.subscribe((data) => {
      this.patientData = data;
    });
  }

  /**
   * Set the local threshold information. Adds the multiplier necessary for displaying a range.
   * @param data Thresholds encoded in the thresholds.json file, loaded during app start
   */
  setThresholds(data: Threshold): void {
    this.thresholds = data;
    this.thresholds.multiplier = 1000000000;
  }

  /**
   * Setting routing config.
   * @param config Config information communicated during routing.
   */
  setRoutingConfig(config: RoutingConfig): void {
    this.routingConfig = config;
  }

  /**
   * Returns the routing config.
   */
  getRoutingConfig(): RoutingConfig {
    return this.routingConfig;
  }

  /**
   * Returns the defined threshold information.
   * @param cancerStatus
   */
  getThresholds(cancerStatus: CancerStatus): ThresholdItem {
    const key = this.utilService.getCancerStatusLiteral(cancerStatus);
    return this.thresholds[key as keyof Threshold] as ThresholdItem;
  }

  /**
   * Sets the gene expression range defined in the patients.json file.
   */
  setGeRange(): void {
    this.storeService.patientData.subscribe((data) => {
      this.geMin = data.geMin;
      this.geMax = data.geMax;
    });
  }

  /**
   * Builds the layers for the concentric layout
   * @param nodes List of existing nodes within the network
   * @param numberOfLayers Number of layers
   */
  private buildLayer = (nodes: Node[], numberOfLayers: number): any => {
    const layer: any = {};
    nodes.forEach((node, i) => {
      if (i < 1) {
        layer[node.data.id] = numberOfLayers; // 1
      } else if (i < 5) {
        // 5=4+1
        layer[node.data.id] = numberOfLayers - 1; // 4
      } else if (i < 17) {
        // 17=12+5
        layer[node.data.id] = numberOfLayers - 2; // 12=4*3
      } else if (i < 37) {
        // 53=36+17
        layer[node.data.id] = numberOfLayers - 3; // 36=12*3
      } else if (i < 61) {
        // 161=108+53
        layer[node.data.id] = numberOfLayers - 4; // 108=36*3
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
    return layer;
  };

  /**
   * Returns the network's default style
   */
  private getStyle(): any[] {
    return [
      {
        selector: 'node',
        style: {
          label: 'data(id)',
          'text-valign': 'center',
          'background-color': this.colors.gray,
          color: '#fff',
          'text-outline-color': this.colors.gray,
          'text-outline-width': '5px',
          width: '50px',
          height: '50px',
        },
      },
      {
        selector: 'node[color], node[colorMet], node[colorNonMet]',
        style: {
          color: '#383838',
          'font-weight': 'bold',
        },
      },
      {
        selector: 'node[!shown]',
        style: {
          visibility: 'hidden',
        },
      },

      {
        selector: 'node.mtb',
        style: {
          'border-width': '15px',
          'border-color': this.colors.green,
        },
      },
      {
        selector: 'node.split',
        style: {
          'text-outline-width': '0px',
          'text-outline-color': this.colors.gray,
          'text-outline-opacity': '0.3',
          width: '80px',
          height: '80px',
          'pie-size': '100%',
          'pie-1-background-color': 'green',
          'pie-1-background-size': '50%',
          'pie-2-background-color': 'green',
          'pie-2-background-size': '50%',
        },
      },
      {
        selector: 'node.splitLeft',
        style: {
          'text-outline-width': '0px',
          'text-outline-color': this.colors.gray,
          'text-outline-opacity': '0.3',
          width: '80px',
          height: '80px',
          'pie-size': '100%',
          'pie-1-background-color': 'green',
          'pie-1-background-size': '50%',
          'pie-2-background-color': 'green',
          'pie-2-background-size': '50%',
        },
      },

      {
        selector: 'node.highlight',
        style: {
          'border-width': '13px',
          'border-color': this.colors.highlight,
        },
      },
      {
        selector: 'edge[!shown]',
        style: {
          visibility: 'hidden',
        },
      },

      {
        selector: 'edge',
        style: {
          width: 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
        },
      },

      {
        selector: 'edge.highlight',
        style: {
          width: 3,
          'line-color': this.colors.highlight,
        },
      },
    ];
  }

  /**
   * Returns the network's concentric layout
   * @param nodes
   */
  private getLayout(nodes: Node[]): any {
    const layer = this.buildLayer(nodes, 11);
    return {
      name: 'concentric',
      levelWidth() {
        return 1;
      },
      concentric(node: any) {
        return layer[node.data('id')];
      },
      spacingFactor: 1.65,
    };
  }

  /**
   * Initializes the core for the given container.
   * @param network Network elements
   * @param container HTML container where the network is to be rendered
   */
  initializeCore(network: Network, container: HTMLElement): void {
    this.core = cytoscape({
      container,
      elements: network,
      style: this.getStyle(),
      layout: this.getLayout(network.nodes),
    });
    this.core.elements('node,edge').data('shown', true);
    this.visibleNodes = network.nodes;
    this.allNodes = network.nodes;

    if (this.routingConfig) {
      this.handleVisualizationPreset().then(() => {
        console.log('visualization finished!');
      });
    }
  }


  private async handleVisualizationPreset(): Promise<void> {
    // handle basic visualization
    this.updateBasicVisualizationByRoutingConfig();

    // handle selected nodes
    // if (this.allNodes) {
    this.routingConfig.selectedNodes?.forEach((nodeName) => {
      const node = this.allNodes?.find(
        (a) => a.data.id === this.utilService.decodeNodelabel(nodeName),
      );
      if (node) {
        this.selectNode(node);
      }
    });
    // }

    // handle selected patient: meta
    if (this.routingConfig.loadAndSelectMeta) {
      await this.selectPatient(this.routingConfig.loadAndSelectMeta, CancerStatus.metastatic, false);
    }

    // handle selected patient: non-meta
    if (this.routingConfig.loadAndSelectNonmeta) {
      await this.selectPatient(
        this.routingConfig.loadAndSelectNonmeta,
        CancerStatus.nonmetastatic,
        false,
      );
    }

    this.layoutPatient();
  }

  /**
   * Updates the basic visualization configuration by using the routing config entries.
   * Might need validation, such as either show-all or show-shared.
   */
  private updateBasicVisualizationByRoutingConfig(): void {
    this.visualizationConfig.nodeColorBy = this.routingConfig.visualizationConfig.nodeColorBy;
    this.visualizationConfig.nodeSizeBy = this.routingConfig.visualizationConfig.nodeSizeBy;
    this.visualizationConfig.showOnlySharedNodes =
      this.routingConfig.visualizationConfig.showOnlySharedNodes;
    this.visualizationConfig.showAllNodes = this.routingConfig.visualizationConfig.showAllNodes;
    this.visualizationConfig.showMtbResults = this.routingConfig.visualizationConfig.showMtbResults;
  }

  /**
   * Triggers the download for the specified download configuration
   * @param config Download configuration containing information about file extension, background and scale
   */
  downloadImage(config: DownloadConfig): void {
    let filename = `network`;

    if (this.visualizationConfig.patientsSelected === 0) {
      // no patient selected
      filename = `PPI_network`;
    } else if (
      this.visualizationConfig.patientMetastatic !== null &&
      this.visualizationConfig.patientNonmetastatic !== null
    ) {
      // both patients selected
      filename = `${this.visualizationConfig.patientMetastatic.name}_vs_${this.visualizationConfig.patientNonmetastatic.name}`;
    } else if (this.visualizationConfig.patientMetastatic !== null) {
      // meta patient
      filename = `${this.visualizationConfig.patientMetastatic.name}`;
    } else if (this.visualizationConfig.patientNonmetastatic !== null) {
      // non-meta patient
      filename = `${this.visualizationConfig.patientNonmetastatic.name}`;
    }
    filename = `${filename}.${config.extension}`;

    let image = this.getImage(config);
    if (config.extension === 'SVG') {
      image = new Blob([image], { type: 'text/plain;charset=utf-8' });
    } else {
      image = this.getImage(config);
    }

    const url = window.URL.createObjectURL(image);
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  /**
   * Returns the image data as blob
   * @param config Download configuration containing information about file extension, background and scale
   * @private
   */
  private getImage(config: DownloadConfig) {
    let image;
    const bgColor = config.transparent ? 'transparent' : 'white';
    if (config.extension === 'PNG') {
      image = this.core.png({ bg: bgColor, scale: config.scale, output: 'blob' });
    } else if (config.extension === 'JPEG') {
      image = this.core.jpg({ scale: config.scale, output: 'blob' });
    } else {
      // @ts-ignore
      image = this.core.svg();
    }
    return image;
  }

  /**
   * Fits the graph to the current viewport
   */
  fitGraph(): void {
    this.core.fit();
  }

  /**
   * Triggers the layout for zero, one or two selected patients depending on the user input.
   */
  layoutPatient() {
    if (this.visualizationConfig.patientsSelected === 2) {
      this.clear();
      this.visualizeTwo();
    } else if (this.visualizationConfig.patientMetastatic !== null) {
      this.visualizeOne(this.utilService.cancerStatus.metastatic);
    } else if (this.visualizationConfig.patientNonmetastatic !== null) {
      this.visualizeOne(this.utilService.cancerStatus.nonmetastatic);
    } else {
      this.clear();
      this.core.elements('node').data('shown', true);
    }
    this.updateShownNodes();
  }

  /**
   * Renders the network for two selected patients
   * @private
   */
  private visualizeTwo() {
    const thresholdsMetastatic = this.getThresholds(CancerStatus.metastatic);
    const thresholdsNonmetastatic = this.getThresholds(CancerStatus.nonmetastatic);

    const { patientDetailsMetastatic } = this.visualizationConfig;
    const { patientDetailsNonmetastatic } = this.visualizationConfig;

    this.core.batch(() => {
      this.clear();

      const color = this.utilService.getColorByLiteral(this.visualizationConfig.nodeColorBy);
      switch (this.visualizationConfig.nodeColorBy) {
        case this.utilService.nodeColorBy.relevance:
          // eslint-disable-next-line no-case-declarations
          const minValue = Math.min(
            thresholdsMetastatic.threshold,
            this.thresholds.nonmetastatic.threshold,
          );
          // eslint-disable-next-line no-case-declarations
          const maxValue = Math.max(thresholdsNonmetastatic.max, this.thresholds.nonmetastatic.max);
          this.setColorMap(minValue, maxValue);
          this.setSplitColorMap(
            thresholdsMetastatic.threshold,
            thresholdsMetastatic.max,
            thresholdsNonmetastatic.threshold,
            thresholdsNonmetastatic.max,
          );
          break;
        case this.utilService.nodeColorBy.geneExpression:
          this.setSplitColorMap(this.geMin, this.geMax, this.geMin, this.geMax);
          break;
        case this.utilService.nodeColorBy.geneExpressionLevel:
        default:
          this.setColorDisc();
          break;
      }

      // loop metastatic patient data
      (patientDetailsMetastatic || []).forEach((data) => {
        if (data.score >= this.visualizationConfig.thresholdDefined) {
          const node = this.core
            .nodes()
            .getElementById(data.name)
            .data('member', true)
            .data('shown', true)
            .addClass('split')
            .data('colorMet', data[color as keyof PatientItem]);
          if (node && data.mtb) {
            node.addClass('mtb');
          }
        }
      });

      // loop non-metastatic patient data
      (patientDetailsNonmetastatic || []).forEach((data) => {
        if (data.score >= this.visualizationConfig.thresholdDefined) {
          const node = this.core
            .nodes()
            .getElementById(data.name)
            .data('member', true)
            .data('shown', true)
            .addClass('split')
            .data('colorNonMet', data[color as keyof PatientItem]);
          if (node && data.mtb) {
            node.addClass('mtb');
          }
        }
      });
    });
  }

  /**
   * Renders the network for one selected patient with the specified cancer status
   * @param cancerStatus Either metastatic or non-metastatic
   * @private
   */
  private visualizeOne(cancerStatus: CancerStatus): void {
    const patientDetails =
      this.visualizationConfig[
        cancerStatus === this.utilService.cancerStatus.metastatic
          ? 'patientDetailsMetastatic'
          : 'patientDetailsNonmetastatic'
        ];

    const thresholds = this.getThresholds(cancerStatus);

    this.core.batch(() => {
      this.clear();

      // node size
      const size = this.utilService.getNodeSizeByLiteral(this.visualizationConfig.nodeSizeBy);
      switch (this.visualizationConfig.nodeSizeBy) {
        case this.utilService.nodeSizeBy.geneExpression:
          this.setSizeMap(
            this.utilService.getMinGe(patientDetails ?? []),
            this.utilService.getMaxGe(patientDetails ?? []),
          );
          break;
        case this.utilService.nodeSizeBy.relevance:
        default:
          this.setSizeMap(thresholds.threshold, thresholds.max);
          break;
      }

      // node colors
      const color = this.utilService.getColorByLiteral(this.visualizationConfig.nodeColorBy);
      switch (this.visualizationConfig.nodeColorBy) {
        case this.utilService.nodeColorBy.geneExpression:
          this.setColorMap(this.geMin, this.geMax);
          break;
        case this.utilService.nodeColorBy.geneExpressionLevel:
          this.setColorDisc();
          break;
        case this.utilService.nodeColorBy.relevance:
        default:
          this.setColorMap(thresholds.threshold, thresholds.max);
          break;
      }

      // loop patient data
      (patientDetails || []).forEach((data) => {
        if (data.score >= this.visualizationConfig.thresholdDefined) {
          const node = this.core
            .nodes()
            .getElementById(data.name)
            .data('member', true)
            .data('shown', true)
            .data('size', data[size as keyof PatientItem])
            .data('color', data[color as keyof PatientItem]);
          if (node && data.mtb) {
            node.addClass('mtb');
          }
        }
      });
    });
  }

  /**
   * Applies a visual style to nodes
   * @private
   */
  private setColorDisc() {
    // @ts-ignore
    this.core.elements('node[color]').style('font-weight', 'bold');
    this.core
      .style()
      // @ts-ignore
      .selector('node[color = \'LOW\']')
      .style('background-color', this.colors.blue)
      .style('text-outline-color', this.colors.blue)
      // @ts-ignore
      .selector('node[color = \'NORMAL\']')
      .style('background-color', this.colors.yellow)
      .style('text-outline-color', this.colors.yellow)
      // @ts-ignore
      .selector('node[color = \'HIGH\']')
      .style('background-color', this.colors.red)
      .style('text-outline-color', this.colors.red)
      // @ts-ignore
      .selector('node.split[colorMet][colorNonMet]')
      .style('width', '80px')
      .style('height', '80px')
      // @ts-ignore
      .selector('node.split[^colorMet], node.split[^colorNonMet]')
      .style('pie-2-background-color', this.colors.gray)
      .style('pie-1-background-color', this.colors.gray)
      // @ts-ignore
      .selector('node.split[colorMet = \'LOW\']')
      .style('pie-2-background-color', this.colors.blue)
      // @ts-ignore
      .selector('node.split[colorNonMet = \'LOW\']')
      .style('pie-1-background-color', this.colors.blue)
      // @ts-ignore
      .selector('node.split[colorMet = \'NORMAL\']')
      .style('pie-2-background-color', this.colors.yellow)
      // @ts-ignore
      .selector('node.split[colorNonMet = \'NORMAL\']')
      .style('pie-1-background-color', this.colors.yellow)
      // @ts-ignore
      .selector('node.split[colorMet = \'HIGH\']')
      .style('pie-2-background-color', this.colors.red)
      // @ts-ignore
      .selector('node.split[colorNonMet = \'HIGH\']')
      .style('pie-1-background-color', this.colors.red);
  }

  /**
   * Applies a visual style to nodes
   * @param minValue
   * @param maxValue
   * @private
   */
  private setColorMap(minValue: number, maxValue: number) {
    const midPoint = maxValue - (maxValue - minValue) / 2;
    const colorMap1 = `mapData(color, ${minValue}, ${maxValue}, ${this.colors.blue}, ${this.colors.yellow})`;
    const colorMap2 = `mapData(color, ${minValue}, ${maxValue}, ${this.colors.yellow}, ${this.colors.red})`;

    this.core
      .style()
      // @ts-ignore
      .selector(`node[color<=${midPoint}]`)
      .style('background-color', colorMap1)
      .style('text-outline-color', colorMap1)
      // @ts-ignore
      .selector(`node[color>${midPoint}]`)
      .style('background-color', colorMap2)
      .style('text-outline-color', colorMap2);
  }

  /**
   * Applies a visual split style to nodes
   * @param minValueMet
   * @param maxValueMet
   * @param minValueNonMet
   * @param maxValueNonMet
   * @private
   */
  private setSplitColorMap(
    minValueMet: number,
    maxValueMet: number,
    minValueNonMet: number,
    maxValueNonMet: number,
  ) {
    const midPointMet = maxValueMet - (maxValueMet - minValueMet) / 2;
    const midPointNonMet = maxValueNonMet - (maxValueNonMet - minValueNonMet) / 2;
    const colorMapMet1 = `mapData(colorMet, ${minValueMet}, ${maxValueMet}, ${this.colors.blue}, ${this.colors.yellow})`;
    const colorMapMet2 = `mapData(colorMet, ${minValueMet}, ${maxValueMet}, ${this.colors.yellow}, ${this.colors.red})`;
    const colorMapNonMet1 = `mapData(colorNonMet, ${minValueNonMet}, ${maxValueNonMet}, ${this.colors.blue}, ${this.colors.yellow})`;
    const colorMapNonMet2 = `mapData(colorNonMet, ${minValueNonMet}, ${maxValueNonMet}, ${this.colors.yellow}, ${this.colors.red})`;
    this.core
      .style()
      // @ts-ignore
      .selector('node.split[colorMet][colorNonMet]')
      .style('width', '80px')
      .style('height', '80px')
      // @ts-ignore
      .selector(`node.split[colorMet<=${midPointMet}]`)
      .style('pie-2-background-color', colorMapMet1)
      // @ts-ignore
      .selector(`node.split[colorMet>${midPointMet}]`)
      .style('pie-2-background-color', colorMapMet2)
      // @ts-ignore
      .selector(`node.split[colorNonMet<=${midPointNonMet}]`)
      .style('pie-1-background-color', colorMapNonMet1)
      // @ts-ignore
      .selector(`node.split[colorNonMet>${midPointNonMet}]`)
      .style('pie-1-background-color', colorMapNonMet2)
      // @ts-ignore
      .selector('node.split[colorMet][^colorNonMet]')
      .style('pie-1-background-color', this.colors.gray)
      // @ts-ignore
      .selector('node.split[^colorMet][colorNonMet]')
      .style('pie-2-background-color', this.colors.gray);
  }

  /**
   * Clears all applied styles
   * @private
   */
  private clear() {
    this.core.batch(() => {
      this.core
        .elements('node')
        .removeData('member')
        .removeData('color')
        .removeData('colorMet')
        .removeData('colorNonMet')
        .removeData('size')
        .removeClass('mtb')
        .removeClass('split');
      this.removeSizeMap();
    });
  }

  /**
   * Applies sizing to the nodes
   * @param minValue
   * @param maxValue
   * @private
   */
  private setSizeMap(minValue: number, maxValue: number) {
    const sizeMap = `mapData(size, ${minValue}, ${maxValue}, 50, 130)`;
    const fontSizeMap = `mapData(size, ${minValue}, ${maxValue}, 18, 30)`;
    this.core
      .style()
      // @ts-ignore
      .selector('node[?member]')
      .style('width', sizeMap)
      .style('height', sizeMap)
      .style('font-size', fontSizeMap);
  }

  /**
   * Removes sizing from the nodes
   * @private
   */
  private removeSizeMap() {
    this.core
      .style()
      // @ts-ignore
      .selector('node[?member]')
      .style('width', '50px')
      .style('height', '50px')
      .style('font-size', '18px');
  }

  /**
   * Updates the number of selected patients when the user makes selections via dropdown.
   * @private
   */
  handlePatientSelection(): void {
    let count = 0;
    if (this.visualizationConfig.patientMetastatic !== null) {
      // eslint-disable-next-line no-plusplus
      count++;
    }
    if (this.visualizationConfig.patientNonmetastatic !== null) {
      // eslint-disable-next-line no-plusplus
      count++;
    }
    this.visualizationConfig.patientsSelected = count;
  }

  /**
   * If the displayed nodes are not modified themselves,
   * it's sufficient to update which nodes are displayed.
   */
  updateShownNodes() {
    this.core.batch(() => {
      this.core.elements('node[member]').data('shown', true);
      this.core.elements('node[!member]').data('shown', this.visualizationConfig.showAllNodes);
      (this.core.elements('node[member]').connectedEdges() as CollectionReturnValue).data(
        'shown',
        true,
      );
      (this.core.elements('node[!member]').connectedEdges() as CollectionReturnValue).data(
        'shown',
        this.visualizationConfig.showAllNodes,
      );
      this.core
        .elements('node.split[colorMet][^colorNonMet]')
        .data('shown', !this.visualizationConfig.showOnlySharedNodes);
      this.core
        .elements('node.split[^colorMet][colorNonMet]')
        .data('shown', !this.visualizationConfig.showOnlySharedNodes);
      (
        this.core
          .elements('node.split[colorMet][^colorNonMet], node.split[^colorMet][colorNonMet]')
          .connectedEdges('edge[?shown]') as CollectionReturnValue
      ).data('shown', !this.visualizationConfig.showOnlySharedNodes);
    });

    if (this.allNodes) {
      this.visibleNodes = this.allNodes.filter(
        (a) => this.core.getElementById(a.data.id).data('shown') === true,
      );
    }
  }

  /**
   * Updates the node style based on if the mtb property is to be displayed.
   * @param doLayout True, if the layout is to be applied
   */
  updateMtbNodes(doLayout: boolean = true): void {
    const b = this.visualizationConfig.showMtbResults;
    this.core
      .style()
      // @ts-ignore
      .selector('node.mtb')
      .style('border-width', b ? '7px' : '0px');
    if (doLayout) {
      this.layoutPatient();
    }
  }

  /**
   * Updates the rendered network to match the defined threshold.
   * @param $event The user defined threshold (still modified by the modifier due to range issues)
   * @param doLayout True, if the layout is to be applied
   */
  updateThresholds($event: number, doLayout: boolean = true) {
    this.visualizationConfig.thresholdDefined = $event / this.thresholds.multiplier;
    if (doLayout) {
      this.layoutPatient();
    }
  }

  /**
   * Applies the style for selected nodes to the list of currently selected nodes.
   * All other styles are reset to their default.
   * @param nodes List of currently selected nodes
   */
  highlightNode(nodes: string[]) {
    this.core.elements('node').removeClass('highlight');
    this.core.elements('edge').removeClass('highlight');
    if (nodes !== undefined) {
      nodes.forEach((node) => {
        this.core
          .nodes()
          .getElementById(node)
          .addClass('highlight')
          .connectedEdges()
          .addClass('highlight');
      });
    }
  }

  /**
   * Selects or unselects nodes
   * @param node Node to be added or removed from the list of {@link selectedNodes}
   */
  selectNode(node: Node): void {
    if (!this.selectedNodes.includes(node)) {
      this.selectedNodes.push(node);
    } else {
      const index = this.selectedNodes.indexOf(node);
      this.selectedNodes.splice(index, 1);
    }
    this.highlightNode(this.selectedNodes.map((a) => a.data.id));
  }

  /**
   * Clears the list of currently selected nodes and re-renders the network
   */
  clearSelectedNodes() {
    this.selectedNodes = [];
    this.highlightNode(this.selectedNodes.map((a) => a.data.id));
  }

  /**
   * Selects a patient. This function is needed for both the dropdown menu in the sidebar,
   * and the routing based patient preselection.
   * @param patientName Name of the patient to be selected.
   * @param cancerStatus Status of this patient.
   * @param doLayout True, when the view is to be updated
   */
  async selectPatient(patientName: string, cancerStatus: CancerStatus, doLayout: boolean = true): Promise<void> {
    const detailsKey =
      cancerStatus === this.utilService.cancerStatus.metastatic
        ? 'patientDetailsMetastatic'
        : 'patientDetailsNonmetastatic';
    const key =
      cancerStatus === this.utilService.cancerStatus.metastatic
        ? 'patientMetastatic'
        : 'patientNonmetastatic';
    const classKey = this.utilService.getCancerStatusLiteral(cancerStatus);

    // this.storeService.patientData.subscribe((data) => {
    this.visualizationConfig[key] =
      (this.patientData[classKey as keyof PatientCollection] as Patient[]).find(
        (a) => a.name === patientName,
      ) ?? null;

    this.dataService.loadPatientDetails(patientName).then((details) => {
      this.visualizationConfig[detailsKey] = details;
      this.handlePatientSelection();
      if (doLayout) {
        this.layoutPatient();
      }
    });
    // });
  }
}
