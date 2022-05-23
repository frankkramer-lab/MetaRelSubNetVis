import { Injectable } from '@angular/core';
import { NodeAttributesItem } from '../../data/schema/node-attributes-item';
import { Patient } from '../../data/schema/patient';
import { PatientCollection } from '../../data/schema/patient-collection';
import { PatientDetails } from '../../data/schema/patient-details';
import { AttributeItem } from '../../data/schema/attribute-item';
import { NodeRaw } from '../../data/schema/node-raw';
import { NetworkEdge } from '../../data/schema/network-edge';
import { NetworkNode } from '../../data/schema/network-node';
import { NetworkOccurrences } from '../../data/schema/network-occurrences';
import { Property } from '../../data/schema/property';
import { PropertyTypeEnum } from '../enum/property-type-enum';
import { ThresholdDefinition } from '../../data/schema/threshold-definition';
import { PropertyCollection } from '../../data/schema/property-collection';
import { PropertyScopeEnum } from '../enum/property-scope.enum';
import { ThresholdCollection } from '../../data/schema/threshold-collection';

@Injectable({
  providedIn: 'root',
})
export class HydratorService {
  private static updateMin(min: number | undefined, value: string): number {
    const numericValue = Number(value);
    const currentMin: number = Number.isNaN(Number(min)) ? Number.MAX_SAFE_INTEGER : Number(min);
    if (Number.isNaN(numericValue)) return currentMin;
    return numericValue < currentMin ? numericValue : currentMin;
  }

  private static updateMax(max: number | undefined, value: string): number {
    const numericValue = Number(value);
    const currentMax: number = Number.isNaN(Number(max)) ? Number.MIN_SAFE_INTEGER : Number(max);
    if (Number.isNaN(numericValue)) return currentMax;
    return numericValue > currentMax ? numericValue : currentMax;
  }

  initProperties(metaRelSubNetVis: any[]): PropertyCollection {
    const collection: PropertyCollection = {
      default: [],
      individual: [],
    };
    metaRelSubNetVis.forEach((attribute: any) => {
      // patient-specific properties
      if (attribute.individual_properties) {
        collection.individual = this.extractProperties(attribute.individual_properties);
      }
      // default properties
      if (attribute.properties) {
        collection.default = this.extractProperties(attribute.properties);
      }
    });
    return collection;
  }

  hydrateNetworkAttributes(
    networkAttributes: any,
    patients: PatientCollection,
    labels: string[],
    uuid: string | null,
  ) {
    let patientGroups: string[] = [];
    let patientNames: string[] = [];
    let patientSurvivalYears: number[] = [];
    let patientSubtypes: string[] = [];

    networkAttributes.forEach((attribute: NodeAttributesItem) => {
      if (attribute.n) {
        if (attribute.n === 'PatientGroups') {
          patientGroups = attribute.v as unknown as string[];
        }
        if (attribute.n === 'Patients') {
          patientNames = attribute.v as unknown as string[];
        }
        if (attribute.n === 'PatientSurvivalYears') {
          patientSurvivalYears = attribute.v as unknown as number[];
        }
        if (attribute.n === 'PatientSubtype') {
          patientSubtypes = attribute.v as unknown as string[];
        }
        if (attribute.n === 'name') {
          labels.push(attribute.v);
        }
      }
    });

    const groupLabels = [...new Set(patientGroups)];
    const groupLabelA = groupLabels[0];
    const groupLabelB = groupLabels[1];

    // default headline, if there was no headline given
    if (labels.length === 0) {
      labels.push(`Visualization of UUID ${uuid}`);
    }
    labels.push(groupLabelA);
    labels.push(groupLabelB);

    for (let i = 0; i < patientGroups.length; i += 1) {
      const patient: Patient = {
        mfsYears: patientSurvivalYears[i],
        subtype: patientSubtypes[i],
        name: patientNames[i],
      };
      if (patientGroups[i] === groupLabelA) {
        patients.groupA.push(patient);
      } else if (patientGroups[i] === groupLabelB) {
        patients.groupB.push(patient);
      }
    }
    return patientSubtypes;
  }

  hydrateDefaultAttributes(
    nodeAttributes: any[],
    nodesDictionary: any,
    properties: PropertyCollection,
  ): AttributeItem[] {
    const attributes: AttributeItem[] = [];

    nodeAttributes.forEach((attribute: NodeAttributesItem) => {
      const proteinName = nodesDictionary[attribute.po];
      const property = properties.default.find((a) => a.name === attribute.n);

      if (property && property.name === attribute.n) {
        let item = attributes.find((a) => a.name === proteinName);

        if (item === undefined) {
          item = {
            name: proteinName,
            id: attribute.po.toString(),
          };
          item[attribute.n] = attribute.v;
          attributes.push(item);
        } else {
          item[attribute.n] = attribute.v;
        }

        if (property.type === PropertyTypeEnum.continuous) {
          // update this property's min and max
          property.max = HydratorService.updateMax(property.max, attribute.v);
          property.min = HydratorService.updateMin(property.min, attribute.v);
        }
      }
    });

    return attributes;
  }

  hydrateNodeAttributes(
    nodeAttributes: any,
    patientCollection: PatientCollection,
    nodesDictionary: any,
    properties: PropertyCollection,
  ) {
    const patients = { ...patientCollection };

    const patientDetailItemA: PatientDetails = {};
    patients.groupA.forEach((patient) => {
      patientDetailItemA[patient.name] = [] as AttributeItem[];

      const patientDetailsRaw: NodeAttributesItem[] = nodeAttributes.filter(
        (a: NodeAttributesItem) => a.n.startsWith(patient.name),
      );

      patientDetailsRaw.forEach((attribute) => {
        const proteinName = nodesDictionary[attribute.po];
        if (!patientDetailItemA[patient.name].map((a) => a.name).includes(proteinName)) {
          patientDetailItemA[patient.name].push({
            id: attribute.po.toString(),
            name: proteinName,
          });
        }
        const relevantDetail = patientDetailItemA[patient.name].find((a) => a.name === proteinName);
        if (relevantDetail) {
          properties.individual.forEach((property: Property) => {
            if (attribute.n.endsWith(property.name)) {
              // this nodeAttribute relates to this property
              relevantDetail[property.name] = attribute.v;

              if (property.type === PropertyTypeEnum.continuous) {
                // update this property's min and max
                property.maxA = HydratorService.updateMax(property.maxA, attribute.v);
                property.minA = HydratorService.updateMin(property.minA, attribute.v);
              }
            }
          });
        }
      });
    });

    const patientDetailItemB: PatientDetails = {};
    patients.groupB.forEach((patient) => {
      patientDetailItemB[patient.name] = [] as AttributeItem[];

      const patientDetailsRaw: NodeAttributesItem[] = nodeAttributes.filter(
        (a: NodeAttributesItem) => a.n.startsWith(patient.name),
      );

      patientDetailsRaw.forEach((attribute) => {
        const proteinName = nodesDictionary[attribute.po];
        if (!patientDetailItemB[patient.name].map((a) => a.name).includes(proteinName)) {
          patientDetailItemB[patient.name].push({
            id: attribute.po.toString(),
            name: proteinName,
          });
        }
        const relevantDetail = patientDetailItemB[patient.name].find((a) => a.name === proteinName);
        if (relevantDetail) {
          properties.individual.forEach((property: Property) => {
            if (attribute.n.endsWith(property.name)) {
              // this nodeAttribute relates to this property
              relevantDetail[property.name] = attribute.v;

              if (property.type === PropertyTypeEnum.continuous) {
                // update this property's min and max
                property.maxB = HydratorService.updateMax(property.maxB, attribute.v);
                property.minB = HydratorService.updateMin(property.minB, attribute.v);
              }
            }
          });
        }
      });
    });

    patients.detailsA = patientDetailItemA;
    patients.detailsB = patientDetailItemB;
    return patients;
  }

  hydrateNodesMap(nodes: any[]): any {
    const nodesDictionary: any = {};
    nodes.forEach((node: NodeRaw) => {
      if (!nodesDictionary[node['@id']]) {
        nodesDictionary[node['@id']] = node.n;
      }
    });
    return nodesDictionary;
  }

  hydrateNodes(nodes: any[], patients: PatientCollection, subtypes: string[]): any {
    const occurrences: { [key: string]: NetworkOccurrences } = {};

    const subtypeMap: any = {};

    patients.groupA.forEach((a) => {
      subtypeMap[a.name] = a.subtype;
    });
    patients.groupB.forEach((b) => {
      subtypeMap[b.name] = b.subtype;
    });

    Object.entries(patients.detailsA).forEach((a) => {
      const patientName = a[0];
      const nodeItems = a[1];
      nodeItems.forEach((node) => {
        // init
        if (!Object.keys(occurrences).includes(node.name)) {
          occurrences[node.name] = {
            all: 0,
          };
          subtypes.forEach((type) => {
            occurrences[node.name][type] = 0;
          });
        }
        occurrences[node.name][subtypeMap[patientName]] += 1;
        occurrences[node.name].all += 1;
      });
    });

    Object.entries(patients.detailsB).forEach((a) => {
      const patientName = a[0];
      const nodeItems = a[1];
      nodeItems.forEach((node) => {
        // init
        if (!Object.keys(occurrences).includes(node.name)) {
          occurrences[node.name] = {
            all: 0,
          };
          subtypes.forEach((type) => {
            occurrences[node.name][type] = 0;
          });
        }
        occurrences[node.name][subtypeMap[patientName]] += 1;
        occurrences[node.name].all += 1;
      });
    });

    const typedNodes: NetworkNode[] = [];
    for (let i = 0; i < nodes.length; i += 1) {
      const n = nodes[i];
      const node: NetworkNode = {
        data: {
          id: n['@id'],
          name: n.n,
        },
        occ: occurrences[n.n],
      };
      typedNodes.push(node);
    }
    return typedNodes;
  }

  hydrateEdges(edges: any[]): NetworkEdge[] {
    const typedEdges: NetworkEdge[] = [];
    for (let i = 0; i < edges.length; i += 1) {
      const e = edges[i];
      const edge: NetworkEdge = {
        data: {
          id: e['@id'],
          name: e['@id'],
          source: e.s,
          target: e.t,
        },
      };
      typedEdges.push(edge);
    }
    return typedEdges;
  }

  hydrateOccurrences(patients: PatientCollection): NetworkOccurrences {
    const occurrences: NetworkOccurrences = {
      all: 0,
    };

    const patientsAll = patients.groupA.concat(patients.groupB);
    patientsAll.forEach((a) => {
      if (!Object.keys(occurrences).includes(a.subtype)) {
        occurrences[a.subtype] = 0;
      }
      occurrences[a.subtype] += 1;
      occurrences.all += 1;
    });
    return occurrences;
  }

  hydrateThresholds(properties: PropertyCollection): ThresholdCollection {
    const propertiesIndividual = this.findThresholdProperties(
      properties.individual,
      PropertyScopeEnum.individual,
    );
    const propertiesDefault = this.findThresholdProperties(
      properties.default,
      PropertyScopeEnum.default,
    );

    return {
      individual: propertiesIndividual,
      default: propertiesDefault,
    };
  }

  hydrateHighlightColor(metaRelSubNetVis: any[]): string {
    return metaRelSubNetVis[0].highlight ?? '#000000';
  }

  private extractProperties(input: any[]): Property[] {
    const cProperties: Property[] = [];
    const dProperties: Property[] = [];
    const bProperties: Property[] = [];

    input.forEach((p: any) => {
      const name = p.property ?? 'n/a';
      const property: Property = {
        label: p.label ?? name,
        name,
        mapping: p.mapping ?? null,
        threshold: false,
        type: PropertyTypeEnum.boolean,
      };

      if (p.type) {
        switch (p.type) {
          case 'continuous':
            property.type = PropertyTypeEnum.continuous;
            property.threshold = p.threshold;
            property.minA = Number.MAX_SAFE_INTEGER;
            property.minB = Number.MAX_SAFE_INTEGER;
            property.maxA = Number.MIN_SAFE_INTEGER;
            property.maxB = Number.MIN_SAFE_INTEGER;
            cProperties.push(property);
            break;
          case 'discrete':
            property.type = PropertyTypeEnum.discrete;
            dProperties.push(property);
            break;
          default:
            bProperties.push(property);
            break;
        }
      }
    });
    return cProperties.concat(dProperties, bProperties);
  }

  private findThresholdProperties(
    properties: Property[],
    scope: PropertyScopeEnum,
  ): ThresholdDefinition[] {
    const validProperties = properties
      .filter((a) => a.type === PropertyTypeEnum.continuous)
      .filter((a) => a.threshold);
    const thresholds: ThresholdDefinition[] = [];
    validProperties.forEach((property) => {
      thresholds.push({
        property,
        defined:
          scope === PropertyScopeEnum.default
            ? property.min ?? Number.MIN_SAFE_INTEGER
            : Number.MIN_SAFE_INTEGER,
        scope,
      });
    });
    return thresholds;
  }
}
