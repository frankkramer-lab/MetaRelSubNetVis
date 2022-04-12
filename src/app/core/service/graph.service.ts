import { Injectable } from '@angular/core';
// @ts-ignore
import * as svg from 'cytoscape-svg';
import * as cytoscape from 'cytoscape';
import { CollectionReturnValue, ElementsDefinition } from 'cytoscape';
import { NetworkNode } from '../../data/schema/network-node';
import { Network } from '../../data/schema/network';
import { Patient } from '../../data/schema/patient';
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
  constructor() {
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
    booleanProperty: Property | null,
    visibleNodes: NetworkNode[],
  ) {
    this.updateBooleanProperty(booleanProperty);
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

      const color = nodeColorBy?.name;

      if (nodeColorBy !== null) {
        switch (nodeColorBy.type) {
          case PropertyTypeEnum.continuous:
            // this.setColorContinuous(nodeColorBy);
            this.setColorContinuousSplit(nodeColorBy);
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

      (patientADetails || []).forEach((data: PatientItem) => {
        if (visibleNodes.includes(data.id)) {
          const node = this.cyCore
            .nodes()
            .getElementById(data.id.toString())
            .data('member', true)
            .data('shown', true)
            .addClass('split')
            .data(
              'colorA',
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

      // loop non-metastatic patient data
      (patientBDetails || []).forEach((data: PatientItem) => {
        if (visibleNodes.includes(data.id)) {
          const node = this.cyCore
            .nodes()
            .getElementById(data.id.toString())
            .data('member', true)
            .data('shown', true)
            .addClass('split')
            .data(
              'colorB',
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

  private visualizeOne(
    patientDetails: PatientItem[],
    nodeSizeBy: Property | null,
    nodeColorBy: Property | null,
    visibleNodes: string[],
  ): void {
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
        // @ts-ignore
        .selector(`node.split[colorA='${key}']`)
        .style('pie-2-background-color', value)
        // @ts-ignore
        .selector(`node.split[colorB='${key}']`)
        .style('pie-1-background-color', value);
    });
  }

  /**
   * Applies a visual split style to nodes
   * @param property
   * @private
   */
  private setColorContinuousSplit(property: Property) {
    const keys = Object.keys(property.mapping) as unknown as number[];
    const values = Object.values(property.mapping);

    Object.entries(property.mapping).forEach(([rawKey, value], index) => {
      const key = Number(rawKey);
      const successorKey = Number(keys[index + 1]);
      const successorValue = values[index + 1];

      if (index !== keys.length - 1) {
        const aMap = `mapData(colorA, ${key}, ${successorKey}, ${value}, ${successorValue})`;
        const bMap = `mapData(colorB, ${key}, ${successorKey}, ${value}, ${successorValue})`;

        this.cyCore
          .style()
          // @ts-ignore
          .selector('node.split[colorA][colorB]')
          .style('width', '80px')
          .style('height', '80px')
          // @ts-ignore
          .selector(`node.split[colorA<=${key}]`)
          .style('pie-2-background-color', aMap)
          // @ts-ignore
          .selector(`node.split[colorB<=${key}]`)
          .style('pie-1-background-color', bMap)
          // @ts-ignore
          .selector('node.split[colorA][^colorB]')
          .style('pie-1-background-color', this.colors.gray)
          // @ts-ignore
          .selector('node.split[^colorA][colorB]')
          .style('pie-2-background-color', this.colors.gray);
      }
    });
  }

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
   * @param booleanProperty Active property that borders single nodes
   */
  private updateBooleanProperty(booleanProperty: Property | null): void {
    // todo
    // this.cyCore
    //   .style()
    //   // @ts-ignore
    //   .selector('node.mtb')
    //   .style('border-width', showMtbResults ? '7px' : '0px');
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
