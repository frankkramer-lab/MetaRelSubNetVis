import { Injectable } from '@angular/core';
// @ts-ignore
import * as svg from 'cytoscape-svg';
import * as cytoscape from 'cytoscape';
import { CollectionReturnValue, ElementsDefinition } from 'cytoscape';
import { NetworkNode } from '../../data/schema/network-node';
import { Network } from '../../data/schema/network';
import { Patient } from '../../data/schema/patient';
import { UtilService } from './util.service';
import { PatientItem } from '../../data/schema/patient-item';
import { PatientSelectionEnum } from '../enum/patient-selection-enum';
import { ImageDownloadConfig } from '../../data/schema/image-download-config';
import { NetworkLayer } from '../../data/schema/network-layer';
import { Property } from '../../data/schema/property';
import { PropertyTypeEnum } from '../enum/property-type-enum';

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  cyContainer!: HTMLElement;

  private cyCore!: cytoscape.Core;

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
   * Constructor, binding svg export library to cytoscape
   */
  constructor(private utilService: UtilService) {
    cytoscape.use(svg);
  }

  /**
   * Builds the layers for the concentric layout
   * @param nodes List of existing nodes within the network.ts
   */
  private buildLayer = (nodes: NetworkNode[]): any => {
    const layer: NetworkLayer = {};

    let nodesInLayer = 0;
    let layerIndex = 0;
    let counter = 0;
    let remaining = nodes.length;

    nodes.forEach((node) => {
      nodesInLayer += 1;
      counter += 1;

      layer[node.data.id] = layerIndex;

      let maxNodesInCurrentLayer = this.getMaxNodesInLayer(layerIndex);
      const maxNodesInNextLayer = this.getMaxNodesInLayer(layerIndex + 1);

      if (nodesInLayer === maxNodesInCurrentLayer) {
        remaining = nodes.length - counter;
        nodesInLayer = 0;
        layerIndex += 1;

        if (
          remaining > maxNodesInCurrentLayer &&
          remaining < maxNodesInCurrentLayer + maxNodesInNextLayer
        ) {
          maxNodesInCurrentLayer = Math.min(
            Math.floor(
              remaining * (maxNodesInCurrentLayer / maxNodesInCurrentLayer + maxNodesInNextLayer),
            ),
            maxNodesInCurrentLayer,
          );
        }
      }
    });

    (Object.keys(layer) as unknown as number[]).forEach((key: number) => {
      layer[key] = layerIndex + 1 - layer[key];
    });

    return layer;
  };

  /**
   * Returns the maximum valid number of nodes for a given layer
   * @param layer
   */
  private getMaxNodesInLayer = (layer: number): number => {
    switch (layer) {
      case 0:
        return 1;
      case 1:
        return 4;
      case 2:
        return 12;
      default:
        return 8 * (layer - 1) - 4 * Math.floor(Math.log2(layer) / Math.log2(8));
    }
  };

  /**
   * Returns the network.ts's default style
   * @param properties List of properties
   */
  private getStyle(properties: Property[]): any[] {
    const style: any[] = [
      // default
      {
        selector: 'node',
        style: {
          label: 'data(name)',
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
        selector: 'edge',
        style: {
          width: 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
        },
      },

      // node label
      {
        selector: 'node[color], node[colorA], node[colorB]',
        style: {
          color: '#383838',
          'font-weight': 'bold',
        },
      },

      // hidden
      {
        selector: 'node[!shown]',
        style: {
          visibility: 'hidden',
        },
      },
      {
        selector: 'edge[!shown]',
        style: {
          visibility: 'hidden',
        },
      },

      // highlight
      {
        selector: 'node.highlight',
        style: {
          'border-width': '13px',
          'border-color': this.colors.highlight,
        },
      },
      {
        selector: 'edge.highlight',
        style: {
          width: 3,
          'line-color': this.colors.highlight,
        },
      },

      // split
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
    ];

    // adding bool mappings
    properties.forEach((property: Property) => {
      if (property.type === PropertyTypeEnum.boolean) {
        const key = Object.keys(property.mapping)[0];
        const selector = key === 'true' ? `node.${property.name}` : `node[!${property.name}]`;
        style.push({
          selector,
          style: {
            'border-width': '15px',
            'border-color': property.mapping[key],
          },
        });
      }
    });

    console.log(style);
    return style;
  }

  /**
   * Returns the network.ts's concentric layout
   * @param nodes
   */
  private getLayout(nodes: NetworkNode[]): any {
    const layer = this.buildLayer(nodes);
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
   * @param properties List of properties that can be used for visualization
   * @param highlightColor Hex encoded color used for highlighting a node within the network
   */
  initializeCore(network: Network, properties: Property[], highlightColor: string): void {
    const networkCopy = JSON.parse(JSON.stringify(network)) as ElementsDefinition;

    this.colors.highlight = highlightColor;

    this.cyCore = cytoscape({
      container: this.cyContainer,
      elements: networkCopy,
      style: this.getStyle(properties),
      layout: this.getLayout(network.nodes),
    });

    this.cyCore.elements('node,edge').data('shown', true);
  }

  /**
   * Triggers the download for the specified download configuration
   */
  downloadImage(
    config: ImageDownloadConfig,
    patientA: Patient | null,
    patientB: Patient | null,
    patientSelection: PatientSelectionEnum,
  ): void {
    let filename = `network.ts`;

    switch (patientSelection) {
      case PatientSelectionEnum.groupA:
        if (patientA !== null) {
          filename = `${patientA.name}`;
        }
        break;
      case PatientSelectionEnum.groupB:
        if (patientB !== null) {
          filename = `${patientB.name}`;
        }
        break;
      case PatientSelectionEnum.both:
        if (patientA !== null && patientB !== null) {
          filename = `${patientA.name}_vs_${patientB.name}`;
        }
        break;
      default:
        filename = `Network`;
        break;
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
  private getImage(config: ImageDownloadConfig) {
    let image;
    const bgColor = config.transparent ? 'transparent' : 'white';
    if (config.extension === 'PNG') {
      image = this.cyCore.png({ bg: bgColor, scale: config.scale, output: 'blob' });
    } else if (config.extension === 'JPEG') {
      image = this.cyCore.jpg({ scale: config.scale, output: 'blob' });
    } else {
      // @ts-ignore
      image = this.cyCore.svg();
    }
    return image;
  }

  /**
   * Fits the graph to the current viewport
   */
  fitGraph(): void {
    this.cyCore.fit();
  }

  /**
   * Triggers the layout for zero, one or two selected patients depending on the user input.
   */
  layoutPatient(
    patientADetails: PatientItem[],
    patientBDetails: PatientItem[],
    patientGroupA: Patient[] | null,
    patientGroupB: Patient[] | null,
    network: Network,
    nodeColorBy: Property | null,
    nodeSizeBy: Property | null,
    showAllNodes: boolean,
    showOnlySharedNodes: boolean,
    showMtbResults: boolean,
    visibleNodes: NetworkNode[],
  ) {
    this.updateMtbNodes(showMtbResults);
    const visibleNodesIds: string[] = visibleNodes.map((a) => a.data.id.toString());
    if (
      patientADetails &&
      patientADetails?.length > 0 &&
      patientBDetails &&
      patientBDetails?.length > 0
    ) {
      this.clear();
      this.visualizeTwo(patientADetails, patientBDetails, nodeColorBy, visibleNodesIds);
    } else if (patientADetails && patientADetails.length > 0) {
      this.visualizeOne(patientADetails, nodeSizeBy, nodeColorBy, visibleNodesIds);
    } else if (patientBDetails && patientBDetails.length > 0) {
      this.visualizeOne(patientBDetails, nodeSizeBy, nodeColorBy, visibleNodesIds);
    } else {
      this.clear();
      this.cyCore.elements('node').data('shown', true);
    }
    const patientSelected =
      (patientADetails && patientADetails.length > 0) ||
      (patientBDetails && patientBDetails.length > 0);
    this.updateShownNodes(showAllNodes, showOnlySharedNodes, patientSelected);
    console.log(this.cyCore);
  }

  /**
   * Renders the network.ts for two selected patients
   * @private
   */
  private visualizeTwo(
    patientADetails: PatientItem[] | null,
    patientBDetails: PatientItem[] | null,
    nodeColorBy: Property | null,
    visibleNodes: string[],
  ) {
    this.cyCore.batch(() => {
      this.clear();

      // todo

      const color = '';
      // const color = this.utilService.getColorByLiteral(nodeColorBy);
      // switch (nodeColorBy) {
      //   case NodeColorByEnum.relevance:
      //     if (minA && minB && maxA && maxB) {
      //       this.setColorMap(Math.min(minA, minB), Math.max(maxA, maxB));
      //       this.setSplitColorMap(minA, maxA, minB, maxB);
      //     }
      //     break;
      //   case NodeColorByEnum.geneExpression:
      //     if (geMin && geMax) {
      //       this.setSplitColorMap(geMin, geMax, geMin, geMax);
      //     }
      //     break;
      //   case NodeColorByEnum.geneExpressionLevel:
      //   default:
      //     this.setColorDisc();
      //     break;
      // }

      (patientADetails || []).forEach((data: PatientItem) => {
        if (visibleNodes.includes(data.id)) {
          const node = this.cyCore
            .nodes()
            .getElementById(data.id.toString())
            .data('member', true)
            .data('shown', true)
            .addClass('split')
            .data('colorA', data[color as keyof PatientItem]);
          if (node && data.mtb) {
            node.addClass('mtb');
          }
        }
      });

      // loop non-metastatic patient data
      (patientBDetails || []).forEach((data: PatientItem) => {
        if (visibleNodes.includes(data.id)) {
          const node = this.cyCore
            .nodes()
            .getElementById(data.id.toString())
            .data('member', true)
            .data('shown', true)
            .addClass('split')
            .data('colorB', data[color as keyof PatientItem]);
          if (node && data.mtb) {
            node.addClass('mtb');
          }
        }
      });
    });
  }

  private visualizeOne(
    patientDetails: PatientItem[],
    nodeSizeBy: Property | null,
    nodeColorBy: Property | null,
    visibleNodes: string[],
  ): void {
    console.log(visibleNodes);

    this.cyCore.batch(() => {
      this.clear();

      const size = nodeSizeBy?.name;
      if (nodeSizeBy !== null) {
        this.setSizeMap(nodeSizeBy);
      }

      const color = nodeColorBy?.name;
      if (nodeColorBy !== null) {
        switch (nodeColorBy.type) {
          case PropertyTypeEnum.continuous:
            this.setColorContinuous(nodeColorBy);
            break;
          case PropertyTypeEnum.discrete:
            this.setColorDiscrete(nodeColorBy);
            break;
          default:
            console.log(
              `Coloring is only valid for a discrete or continuous property! Got ${nodeColorBy.name} with type ${nodeColorBy.type}`,
            );
        }
      }

      console.log(color);
      console.log(size);

      (patientDetails || []).forEach((data: PatientItem) => {
        if (visibleNodes.includes(data.id)) {
          const node = this.cyCore
            .nodes()
            .getElementById(data.id.toString())
            .data('member', true)
            .data('shown', true)
            .data('size', Number(data[size as keyof PatientItem]))
            .data(
              'color',
              nodeColorBy?.type === PropertyTypeEnum.continuous
                ? Number(data[color as keyof PatientItem])
                : data[color as keyof PatientItem],
            );

          // todo
          if (node && data.mtb) {
            node.addClass('mtb');
          }
        }
      });
    });
  }

  private setColorContinuous(property: Property) {
    const keys = Object.keys(property.mapping) as unknown as number[];
    const values = Object.values(property.mapping);

    Object.entries(property.mapping).forEach(([rawKey, value], index) => {
      const key = Number(rawKey);
      const successorKey = Number(keys[index + 1]);
      const successorValue = values[index + 1];

      const map = `mapData(color, ${key}, ${successorKey}, ${value}, ${successorValue})`;

      if (index === 0) {
        this.cyCore
          .style()
          // @ts-ignore
          .selector(`node[color<${keys[0]}]`)
          .style('background-color', map)
          .style('text-outline-color', map);
      } else if (index !== keys.length - 1) {
        this.cyCore
          .style()
          // @ts-ignore
          .selector(`node[color>=${key}][color<${successorKey}]`)
          .style('background-color', map)
          .style('text-outline-color', map);
      }
    });
  }

  /**
   * Applies a discrete visual style to nodes
   * @private
   */
  private setColorDiscrete(property: Property) {
    this.cyCore.elements('node[color]').style('font-weight', 'bold');

    // default split
    this.cyCore
      .style()
      // @ts-ignore
      .selector('node.split[colorA][colorB]')
      .style('width', '80px')
      .style('height', '80px')
      // @ts-ignore
      .selector('node.split[^colorA], node.split[^colorB]')
      .style('pie-2-background-color', this.colors.gray)
      .style('pie-1-background-color', this.colors.gray);

    Object.entries(property.mapping).forEach(([key, value]) => {
      this.cyCore
        .style()
        // @ts-ignore
        .selector(`node[color='${key}']`)
        .style('background-color', value)
        .style('text-outline-color', value)
        .selector(`node.split[colorA='${key}']`)
        .style('pie-2-background-color', value)
        .selector(`node.split[colorB='${key}']`)
        .style('pie-1-background-color', value);
    });

    // this.cyCore
    //   .style()
    //   // @ts-ignore
    //   .selector('node[color = \'LOW\']')
    //   .style('background-color', this.colors.blue)
    //   .style('text-outline-color', this.colors.blue)
    //   // @ts-ignore
    //   .selector('node[color = \'NORMAL\']')
    //   .style('background-color', this.colors.yellow)
    //   .style('text-outline-color', this.colors.yellow)
    //   // @ts-ignore
    //   .selector('node[color = \'HIGH\']')
    //   .style('background-color', this.colors.red)
    //   .style('text-outline-color', this.colors.red)
    //   // @ts-ignore
    //   .selector('node.split[colorA][colorB]')
    //   .style('width', '80px')
    //   .style('height', '80px')
    //   // @ts-ignore
    //   .selector('node.split[^colorA], node.split[^colorB]')
    //   .style('pie-2-background-color', this.colors.gray)
    //   .style('pie-1-background-color', this.colors.gray)
    //   // @ts-ignore
    //   .selector('node.split[colorA = \'LOW\']')
    //   .style('pie-2-background-color', this.colors.blue)
    //   // @ts-ignore
    //   .selector('node.split[colorB = \'LOW\']')
    //   .style('pie-1-background-color', this.colors.blue)
    //   // @ts-ignore
    //   .selector('node.split[colorA = \'NORMAL\']')
    //   .style('pie-2-background-color', this.colors.yellow)
    //   // @ts-ignore
    //   .selector('node.split[colorB = \'NORMAL\']')
    //   .style('pie-1-background-color', this.colors.yellow)
    //   // @ts-ignore
    //   .selector('node.split[colorA = \'HIGH\']')
    //   .style('pie-2-background-color', this.colors.red)
    //   // @ts-ignore
    //   .selector('node.split[colorB = \'HIGH\']')
    //   .style('pie-1-background-color', this.colors.red);
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
    const colorMapMet1 = `mapData(colorA, ${minValueMet}, ${maxValueMet}, ${this.colors.blue}, ${this.colors.yellow})`;
    const colorMapMet2 = `mapData(colorA, ${minValueMet}, ${maxValueMet}, ${this.colors.yellow}, ${this.colors.red})`;
    const colorMapNonMet1 = `mapData(colorB, ${minValueNonMet}, ${maxValueNonMet}, ${this.colors.blue}, ${this.colors.yellow})`;
    const colorMapNonMet2 = `mapData(colorB, ${minValueNonMet}, ${maxValueNonMet}, ${this.colors.yellow}, ${this.colors.red})`;
    this.cyCore
      .style()
      // @ts-ignore
      .selector('node.split[colorA][colorB]')
      .style('width', '80px')
      .style('height', '80px')
      // @ts-ignore
      .selector(`node.split[colorA<=${midPointMet}]`)
      .style('pie-2-background-color', colorMapMet1)
      // @ts-ignore
      .selector(`node.split[colorA>${midPointMet}]`)
      .style('pie-2-background-color', colorMapMet2)
      // @ts-ignore
      .selector(`node.split[colorB<=${midPointNonMet}]`)
      .style('pie-1-background-color', colorMapNonMet1)
      // @ts-ignore
      .selector(`node.split[colorB>${midPointNonMet}]`)
      .style('pie-1-background-color', colorMapNonMet2)
      // @ts-ignore
      .selector('node.split[colorA][^colorB]')
      .style('pie-1-background-color', this.colors.gray)
      // @ts-ignore
      .selector('node.split[^colorA][colorB]')
      .style('pie-2-background-color', this.colors.gray);
  }

  /**
   * Applies a visual style to nodes
   * @param minValue
   * @param maxValue
   * @private
   */
  // private setColorMap(minValue: number, maxValue: number) {
  //   const midPoint = maxValue - (maxValue - minValue) / 2;
  //   const colorMap1 = `mapData(color, ${minValue}, ${midPoint}, ${this.colors.blue}, ${this.colors.yellow})`;
  //   const colorMap2 = `mapData(color, ${midPoint}, ${maxValue}, ${this.colors.yellow}, ${this.colors.red})`;
  //
  //   this.cyCore
  //     .style()
  //     // @ts-ignore
  //     .selector(`node[color<=${midPoint}]`)
  //     .style('background-color', colorMap1)
  //     .style('text-outline-color', colorMap1)
  //     // @ts-ignore
  //     .selector(`node[color>${midPoint}]`)
  //     .style('background-color', colorMap2)
  //     .style('text-outline-color', colorMap2);
  // }

  /**
   * Clears all applied styles
   * @private
   */
  private clear() {
    this.cyCore.batch(() => {
      this.cyCore
        .elements('node')
        .removeData('member')
        .removeData('color')
        .removeData('colorA')
        .removeData('colorB')
        .removeData('size')
        .removeClass('mtb')
        .removeClass('split');
      this.removeSizeMap();
    });
  }

  /**
   * Applies sizing to the nodes
   * @private
   */
  private setSizeMap(property: Property) {
    const keys = Object.keys(property.mapping);

    // todo find min max of all patients for this property and interpolate them
    const min = Math.min(property.minA ?? 0, property.minB ?? 0);
    const max = Math.max(property.maxA ?? 1, property.maxB ?? 1);
    const mapNodeSize = `mapData(size, ${min}, ${max}, 50, 130)`;
    const mapFontSize = `mapData(size, ${min}, ${max}, 18, 30)`;
    this.cyCore
      .style()
      // @ts-ignore
      .selector('node[?member]')
      .style('width', mapNodeSize)
      .style('height', mapNodeSize)
      .style('font-size', mapFontSize);

    // Object.keys(property.mapping).forEach((rawKey, index) => {
    //   const key = Number(rawKey);
    //   const successorKey = keys[index + 1];
    //
    //   console.log(`Index: ${index}: ${rawKey} || ${successorKey}`);
    //
    //   const mapNodeSize = `mapData(size, ${key}, ${successorKey}, 50, 130)`;
    //   const mapFontSize = `mapData(size, ${key}, ${successorKey}, 18, 30)`;
    //
    //   if (index !== keys.length - 1) {
    //     this.cyCore
    //       .style()
    //       // @ts-ignore
    //       .selector('node[?member]')
    //       .style('width', mapNodeSize)
    //       .style('height', mapNodeSize)
    //       .style('font-size', mapFontSize);
    //   }
    // });
  }

  /**
   * Removes sizing from the nodes
   * @private
   */
  private removeSizeMap() {
    this.cyCore
      .style()
      // @ts-ignore
      .selector('node[?member]')
      .style('width', '50px')
      .style('height', '50px')
      .style('font-size', '18px');
  }

  /**
   * If the displayed nodes are not modified themselves,
   * it's sufficient to update which nodes are displayed.
   */
  updateShownNodes(showAllNodes: boolean, showOnlySharedNodes: boolean, patientSelected: boolean) {
    this.cyCore.batch(() => {
      this.cyCore.elements('node[member]').data('shown', true);
      this.cyCore.elements('node[!member]').data('shown', patientSelected ? showAllNodes : true);
      (this.cyCore.elements('node[member]').connectedEdges() as CollectionReturnValue).data(
        'shown',
        true,
      );
      (this.cyCore.elements('node[!member]').connectedEdges() as CollectionReturnValue).data(
        'shown',
        patientSelected ? showAllNodes : true,
      );
      this.cyCore.elements('node.split[colorA][^colorB]').data('shown', !showOnlySharedNodes);
      this.cyCore.elements('node.split[^colorA][colorB]').data('shown', !showOnlySharedNodes);
      (
        this.cyCore
          .elements('node.split[colorA][^colorB], node.split[^colorA][colorB]')
          .connectedEdges('edge[?shown]') as CollectionReturnValue
      ).data('shown', !showOnlySharedNodes);
    });
  }

  /**
   * Updates the node style based on if the mtb property is to be displayed.
   * @param showMtbResults Value of showing mtb results
   */
  private updateMtbNodes(showMtbResults: boolean): void {
    this.cyCore
      .style()
      // @ts-ignore
      .selector('node.mtb')
      .style('border-width', showMtbResults ? '7px' : '0px');
  }

  /**
   * Applies the style for selected nodes to the list of currently selected nodes.
   * All other styles are reset to their default.
   * @param markedNodes List of currently selected nodes
   */
  highlightNode(markedNodes: NetworkNode[]) {
    const nodes: string[] = markedNodes.map((a) => a.data.id.toString());
    this.cyCore.elements('node').removeClass('highlight');
    this.cyCore.elements('edge').removeClass('highlight');
    if (nodes !== undefined) {
      nodes.forEach((node) => {
        this.cyCore
          .nodes()
          .getElementById(node)
          .addClass('highlight')
          .connectedEdges()
          .addClass('highlight');
      });
    }
  }
}
