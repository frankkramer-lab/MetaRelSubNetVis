import { Injectable } from '@angular/core';
import * as cytoscape from 'cytoscape';
// @ts-ignore
import * as svg from 'cytoscape-svg';
import { Observable } from 'rxjs';
import { Node } from '../models/node';
import { Network } from '../models/network';
import { DownloadConfig } from '../models/download-config';
import { VisualizationConfig } from '../models/visualization-config';

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
   * Current configuration of the sidebar parameter that impact the network visualization
   */
  visualizationConfig: VisualizationConfig = {
    colorNodesBy: 0,
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
    threshold: 0,
  };

  /**
   * Core object containing the rendered network
   * @private
   */
  private core!: cytoscape.Core;

  /**
   * Constructor, binding svg export library to cytoscape
   */
  constructor() {
    cytoscape.use(svg);
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
      levelWidth(nodes: any[]) {
        // the letiation of concentric values in each level
        return 1;
      },
      concentric(node: any) {
        // returns numeric value for each node, placing higher nodes in levels towards the centre
        // console.log('Node: ' + node.data('id') + ' Layer: ' + layer[node.data('id')]);
        return layer[node.data('id')];
      },
      spacingFactor: 1.65,
    };
  }

  /**
   * Returns the network's rendered core
   */
  getCore(): Observable<cytoscape.Core> {
    return new Observable<cytoscape.Core>((observer) => {
      observer.next(this.core);
    });
  }

  /**
   * Initializes the core for the given container
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
    console.log(this.core);
  }

  /**
   *
   * todo: file name depending on rendered network
   *
   * Triggers the download for the specified download configuration
   * @param config Download configuration containing information about file extension, background and scale
   */
  downloadImage(config: DownloadConfig): void {
    const filename = `network.${config.extension}`;
    // if (this.selectedMetastaticPatient === undefined && this.selectedNonmetastaticPatient === undefined){
    //   filename = 'PPI_network.' + type;
    // } else if (this.selectedMetastaticPatient !== undefined && this.selectedNonmetastaticPatient === undefined) {
    //   filename = this.selectedMetastaticPatient.name + '.' + type;
    // } else if (this.selectedMetastaticPatient === undefined && this.selectedNonmetastaticPatient !== undefined) {
    //   filename = this.selectedNonmetastaticPatient.name + '.' + type;
    // } else {
    //   filename = this.selectedMetastaticPatient.name + '_vs_' + this.selectedNonmetastaticPatient.name + '.' + type;
    // }

    let image = this.getImage(config);
    if (config.extension === 'SVG') {
      image = new Blob([image], { type: 'text/plain;charset=utf-8' });
    } else {
      image = this.getImage(config);
    }
    console.log(image);

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
}
