import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { NodesState } from './nodes.state';
import { selectNodes } from '../network/network.selectors';
import { NetworkNode } from '../../schema/network-node';
import { SortByEnum } from '../../../core/enum/sort-by.enum';
import { selectPatientADetails, selectPatientBDetails } from '../patient/patient.selectors';
import { PatientItem } from '../../schema/patient-item';
import { selectThresholds } from '../threshold/threshold.selectors';
import { ThresholdDefinition } from '../../schema/threshold-definition';

const selectState = createSelector(
  (appState: AppState) => appState.nodes,
  (state: NodesState) => state,
);

export const selectNodesState = createSelector(selectState, (state: NodesState) => state);

export const selectNumberOfColumns = createSelector(
  selectState,
  (state: NodesState) => state.numberOfColumns,
);

export const selectSortByColumn = createSelector(
  selectState,
  (state: NodesState) => state.sortByColumn,
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
  selectFilterTerm,
  selectNodesState,
  selectThresholds,
  (
    nodes: NetworkNode[],
    patientADetails: PatientItem[] | null,
    patientBDetails: PatientItem[] | null,
    filterTerm: string | null,
    nodesState: NodesState,
    thresholds: ThresholdDefinition[],
  ) => {
    let visibleNodes: NetworkNode[];

    if (
      (patientADetails && patientADetails.length > 0) ||
      (patientBDetails && patientBDetails.length > 0)
    ) {
      visibleNodes = [];
      if (patientADetails) {
        for (const nodeA of patientADetails || []) {
          const nodeProperties = Object.keys(nodeA);
          const nodeLabel = nodeA.name;
          const cleanNodeLabel = nodeLabel.trim().toLowerCase();

          if (!filterTerm || (filterTerm && cleanNodeLabel.includes(filterTerm.toLowerCase()))) {
            // a node can only be visible, if it matches all defined thresholds
            // if a node does not contain the threshold's property, it ignores this check => assuming it passes

            let passedTest = true;
            const node = nodes.find((a) => a.data.name === nodeLabel);

            thresholds.forEach((th) => {
              const propertyName = th.property.name;

              if (nodeProperties.includes(propertyName)) {
                // only compare to threshold, if this property actually exists

                const passes = Number(nodeA[propertyName]) >= th.defined;

                if (!passes) {
                  passedTest = false;
                }
              }
            });

            if (passedTest && node && !visibleNodes.includes(node)) {
              visibleNodes.push(node);
            }
          }
        }
      }

      if (patientBDetails) {
        for (const nodeB of patientBDetails || []) {
          const nodeProperties = Object.keys(nodeB);
          const nodeLabel = nodeB.name;
          const cleanNodeLabel = nodeLabel.trim().toLowerCase();

          if (!filterTerm || (filterTerm && cleanNodeLabel.includes(filterTerm.toLowerCase()))) {
            // a node can only be visible, if it matches all defined thresholds
            // if a node does not contain the threshold's property, it ignores this check => assuming it passes

            let passedTest = true;
            const node = nodes.find((a) => a.data.name === nodeLabel);

            thresholds.forEach((th) => {
              const propertyName = th.property.name;

              if (nodeProperties.includes(propertyName)) {
                // only compare to threshold, if this property actually exists

                const passes = Number(nodeB[propertyName]) >= th.defined;

                if (!passes) {
                  passedTest = false;
                }
              }
            });

            if (passedTest && node && !visibleNodes.includes(node)) {
              visibleNodes.push(node);
            }
          }
        }
      }
    } else {
      visibleNodes = [];
      nodes.forEach((node) => {
        const nodeLabel = node.data.name.toLowerCase();

        // there is no filter term or filterterm can be applied
        if (!filterTerm || (filterTerm && nodeLabel.includes(filterTerm.toLowerCase()))) {
          if (!visibleNodes.includes(node)) {
            visibleNodes.push(node);
          }
        }
      });
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
