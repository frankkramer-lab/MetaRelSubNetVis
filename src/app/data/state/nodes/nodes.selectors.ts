import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { NodesState } from './nodes.state';
import { selectNodeAttributes, selectNodes } from '../network/network.selectors';
import { NetworkNode } from '../../schema/network-node';
import { SortByEnum } from '../../../core/enum/sort-by.enum';
import { selectPatientADetails, selectPatientBDetails } from '../patient/patient.selectors';
import { AttributeItem } from '../../schema/attribute-item';
import { selectThresholds } from '../threshold/threshold.selectors';
import { ThresholdDefinition } from '../../schema/threshold-definition';
import { ThresholdCollection } from '../../schema/threshold-collection';

const updateVisibleNodesIndividual = (
  attributeItems: AttributeItem[],
  nodes: NetworkNode[],
  visibleNodes: NetworkNode[],
  filterTerm: string | null,
  thresholds: ThresholdDefinition[],
): NetworkNode[] => {
  attributeItems.forEach((item) => {
    const nodeProperties = Object.keys(item);

    const nodeLabel = item.name;
    const cleanNodeLabel = nodeLabel.trim().toLowerCase();

    if (!filterTerm || (filterTerm && cleanNodeLabel.includes(filterTerm.toLowerCase()))) {
      // a node can only be visible, if it matches all defined thresholds
      // if a node does not contain the threshold's property, it ignores this check => assuming it passes

      let passedTest = true;
      const node = nodes.find((a: NetworkNode) => a.data.name === nodeLabel);

      thresholds.forEach((th: ThresholdDefinition) => {
        const propertyName = th.property.name;

        if (nodeProperties.includes(propertyName)) {
          // only compare to threshold, if this property actually exists

          const passes = Number(item[propertyName]) >= th.defined;

          if (!passes) {
            passedTest = false;
          }
        }
      });

      if (passedTest && node && !visibleNodes.includes(node)) {
        visibleNodes.push(node);
      }
    }
  });
  return visibleNodes;
};

const selectState = createSelector(
  (appState: AppState) => appState.nodes,
  (state: NodesState) => state,
);

export const selectNodesState = createSelector(selectState, (state: NodesState) => state);

export const selectNumberOfColumns = createSelector(
  selectState,
  (state: NodesState) => state.numberOfColumns,
);

export const selectSubtypeColumnA = createSelector(
  selectState,
  (state: NodesState) => state.subtypeColumnA,
);

export const selectSubtypeColumnB = createSelector(
  selectState,
  (state: NodesState) => state.subtypeColumnB,
);

export const selectFilterTerm = createSelector(
  selectState,
  (state: NodesState) => state.filterTerm,
);

export const selectMarkedNodes = createSelector(
  selectState,
  (state: NodesState) => state.markedNodes,
);

export const selectVisibleNodes = createSelector(
  selectNodes,
  selectPatientADetails,
  selectPatientBDetails,
  selectNodeAttributes,
  selectFilterTerm,
  selectNodesState,
  selectThresholds,
  (
    nodes: NetworkNode[],
    patientADetails: AttributeItem[] | null,
    patientBDetails: AttributeItem[] | null,
    nodeAttributes: AttributeItem[],
    filterTerm: string | null,
    nodesState: NodesState,
    thresholds: ThresholdCollection,
  ) => {
    let visibleNodes: NetworkNode[];

    if (
      (patientADetails && patientADetails.length > 0) ||
      (patientBDetails && patientBDetails.length > 0)
    ) {
      visibleNodes = [];
      if (patientADetails) {
        visibleNodes = updateVisibleNodesIndividual(
          patientADetails,
          nodes,
          visibleNodes,
          filterTerm,
          thresholds.individual,
        );
      }

      if (patientBDetails) {
        visibleNodes = updateVisibleNodesIndividual(
          patientBDetails,
          nodes,
          visibleNodes,
          filterTerm,
          thresholds.individual,
        );
      }
    } else {
      visibleNodes = updateVisibleNodesIndividual(
        nodeAttributes,
        nodes,
        [],
        filterTerm,
        thresholds.default,
      );
    }

    const subTypeA = nodesState.subtypeColumnA;
    const subTypeB = nodesState.subtypeColumnB;

    switch (nodesState.sortByColumn) {
      case SortByEnum.groupA:
        if (!subTypeA) {
          return visibleNodes;
        }
        visibleNodes.sort((a, b) => (a.occ[subTypeA] > b.occ[subTypeA] ? -1 : 1));
        break;
      case SortByEnum.groupB:
        if (!subTypeB) {
          return visibleNodes;
        }
        visibleNodes.sort((a, b) => (a.occ[subTypeB] > b.occ[subTypeB] ? -1 : 1));
        break;
      default:
        visibleNodes.sort((a, b) => (a.occ.all > b.occ.all ? -1 : 1));
        break;
    }
    return visibleNodes;
  },
);
