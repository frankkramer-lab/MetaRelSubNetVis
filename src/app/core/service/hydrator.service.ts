import { Injectable } from '@angular/core';
import { NodeAttributesItem } from '../../data/schema/node-attributes-item';
import { Patient } from '../../data/schema/patient';
import { PatientCollection } from '../../data/schema/patient-collection';
import { PatientDetails } from '../../data/schema/patient-details';
import { PatientItem } from '../../data/schema/patient-item';
import { NodeRaw } from '../../data/schema/node-raw';
import { NetworkEdge } from '../../data/schema/network-edge';
import { NetworkNode } from '../../data/schema/network-node';
import { NetworkOccurrences } from '../../data/schema/network-occurrences';
import { Property } from '../../data/schema/property';
import { UtilService } from './util.service';
import { PropertyMapping } from '../../data/schema/property-mapping';
import { PropertyTypeEnum } from '../enum/property-type-enum';
import { ThresholdDefinition } from '../../data/schema/threshold-definition';

@Injectable({
  providedIn: 'root',
})
export class HydratorService {
  constructor(private utilService: UtilService) {
  }

  initProperties(networkAttribues: any, patients: PatientCollection): Property[] {

    let rawNames!: string[];
    let rawTypes!: string[];
    const keys: any = {};
    const values: any = {};

    let properties: Property[] = [];
    const cProperties: Property[] = [];
    const dProperties: Property[] = [];
    const bProperties: Property[] = [];

    networkAttribues.forEach((attribute: NodeAttributesItem) => {
      const name = attribute.n;
      const value = attribute.v;

      if (name === 'property_names') {
        rawNames = value as unknown as string[];
      } else if (name === 'property_types') {
        rawTypes = value as unknown as string[];
      } else if (name.startsWith('property_') && name.endsWith('_keys')) {
        const expKey = new RegExp(/property_(.*)_keys/, 'g');

        const match = expKey.exec(name);

        if (match && match.length === 2) {
          keys[match[1]] = value as unknown as string[];
        }
      } else if (name.startsWith('property_') && name.endsWith('_values')) {
        const expValue = new RegExp(/property_(.+)_values/, 'g');
        const match = expValue.exec(name);

        if (match && match.length === 2) {
          values[match[1]] = value as unknown as string[];
        }
      }
    });

    if (rawNames.length > 0 && rawTypes.length > 0) {
      rawNames.forEach((name: string, nameIndex: number) => {
        if (keys[name] && values[name]) {
          const type: PropertyTypeEnum = this.utilService.getPropertyTypeByString(
            rawTypes[nameIndex],
          );
          const mapping: PropertyMapping = {};

          if (!(keys[name] instanceof Array)) {
            mapping[keys[name]] = values[name];
          } else {
            keys[name].forEach((key: string, keyIndex: number) => {
              mapping[key] = values[name][keyIndex];
            });
          }

          const item: Property = {
            name,
            type,
            mapping,
          };

          if (type === PropertyTypeEnum.continuous) {
            item.maxA = Number.MIN_SAFE_INTEGER;
            item.maxB = Number.MIN_SAFE_INTEGER;
            item.minA = Number.MAX_SAFE_INTEGER;
            item.minB = Number.MAX_SAFE_INTEGER;
            cProperties.push(item);
          } else if (type === PropertyTypeEnum.discrete) {
            dProperties.push(item);
          } else {
            bProperties.push(item);
          }
          properties = cProperties.concat(dProperties, bProperties);
        }
      });
    }

    console.log(properties);
    return properties;
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

    for (let i = 0; i < patientGroups.length; i++) {
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

  hydrateNodeAttributes(
    nodeAttributes: any,
    patientCollection: PatientCollection,
    nodesDictionary: any,
    properties: Property[],
  ) {
    const patients = { ...patientCollection };

    const patientDetailItemA: PatientDetails = {};
    patients.groupA.forEach((patient) => {
      patientDetailItemA[patient.name] = [] as PatientItem[];

      const patientDetailsRaw: NodeAttributesItem[] = nodeAttributes.filter(
        (a: NodeAttributesItem) => a.n.startsWith(patient.name),
      );

      patientDetailsRaw.forEach((detail) => {
        const proteinName = nodesDictionary[detail.po];
        if (!patientDetailItemA[patient.name].map((a) => a.name).includes(proteinName)) {
          patientDetailItemA[patient.name].push({
            id: detail.po.toString(),
            name: proteinName,
          });
        }
        const relevantDetail = patientDetailItemA[patient.name].find((a) => a.name === proteinName);
        if (relevantDetail) {
          properties.forEach((property: Property) => {
            if (detail.n.endsWith(property.name)) {
              // this nodeAttribute relates to this property
              relevantDetail[property.name] = detail.v;

              if (property.type === PropertyTypeEnum.continuous) {
                // update this property's min and max
                const numericDetailValue = Number(detail.v);
                if (!Number.isNaN(numericDetailValue) && property.maxA && property.minA) {
                  if (property.maxA < numericDetailValue) {
                    property.maxA = numericDetailValue;
                  }
                  if (property.minA > numericDetailValue) {
                    property.minA = numericDetailValue;
                  }
                }
              }
            }
          });
        }
      });
    });

    const patientDetailItemB: PatientDetails = {};
    patients.groupB.forEach((patient) => {
      patientDetailItemB[patient.name] = [] as PatientItem[];

      const patientDetailsRaw: NodeAttributesItem[] = nodeAttributes.filter(
        (a: NodeAttributesItem) => a.n.startsWith(patient.name),
      );

      patientDetailsRaw.forEach((detail) => {
        const proteinName = nodesDictionary[detail.po];
        if (!patientDetailItemB[patient.name].map((a) => a.name).includes(proteinName)) {
          patientDetailItemB[patient.name].push({
            id: detail.po.toString(),
            name: proteinName,
          });
        }
        const relevantDetail = patientDetailItemB[patient.name].find((a) => a.name === proteinName);
        if (relevantDetail) {
          properties.forEach((property: Property) => {
            if (detail.n.endsWith(property.name)) {
              // this nodeAttribute relates to this property
              relevantDetail[property.name] = detail.v;

              if (property.type === PropertyTypeEnum.continuous) {
                // update this property's min and max
                const numericDetailValue = Number(detail.v);
                if (!Number.isNaN(numericDetailValue) && property.maxB && property.minB) {
                  if (property.maxB < numericDetailValue) {
                    property.maxB = numericDetailValue;
                  }
                  if (property.minB > numericDetailValue) {
                    property.minB = numericDetailValue;
                  }
                }
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
    for (let i = 0; i < nodes.length; i++) {
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
    for (let i = 0; i < edges.length; i++) {
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

  hydrateThresholds(properties: Property[], networkAttributes: any[]): ThresholdDefinition[] {
    const availableProperties = properties.filter((a) => a.type === PropertyTypeEnum.continuous);
    const item: NodeAttributesItem = networkAttributes.find((a) => a.n === 'thresholds');
    const validProperties = availableProperties.filter((a) => item.v.includes(a.name));

    const thresholds: ThresholdDefinition[] = [];
    validProperties.forEach((property) => {
      thresholds.push({
        property,
        defined: Number.MIN_SAFE_INTEGER,
      });
    });
    return thresholds;
  }

  hydrateHighlightColor(networkAttributes: any): string {
    const color = networkAttributes.find((a: NodeAttributesItem) => a.n === 'highlight');
    return color.v ?? '#000000';
  }
}
