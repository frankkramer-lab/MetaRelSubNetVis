import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { NodesState } from './nodes.state';
import { selectNodes } from '../network/network.selectors';
import { NetworkNode } from '../../schema/network-node';
import { selectDefined } from '../threshold/threshold.selectors';
import { SortByEnum } from '../../../core/enum/sort-by.enum';
import { selectPatientADetails, selectPatientBDetails } from '../patient/patient.selectors';
import { PatientItem } from '../../schema/patient-item';

const selectState = createSelector(
  (appState: AppState) => appState.nodes,
  (state: NodesState) => state,
);

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
  selectDefined,
  selectFilterTerm,
  selectSortByColumn,
  selectSubtypeColumnA,
  selectSubtypeColumnB,
  (
    nodes: NetworkNode[],
    patientADetails: PatientItem[] | null,
    patientBDetails: PatientItem[] | null,
    defined: number | null,
    filterTerm: string | null,
    sortBy: SortByEnum,
    subTypeA,
    subTypeB,
  ) => {
    let visibleNodes: NetworkNode[];

    if (
      (patientADetails && patientADetails.length > 0) ||
      (patientBDetails && patientBDetails.length > 0)
    ) {
      visibleNodes = [];
      if (patientADetails) {
        for (const nodeA of patientADetails || []) {
          const nodeLabel = nodeA.name;
          const cleanNodeLabel = nodeLabel.trim().toLowerCase();

          // there is no filter term or filterterm can be applied
          if (!filterTerm || (filterTerm && cleanNodeLabel.includes(filterTerm.toLowerCase()))) {
            // threshold check
            if (defined && nodeA.score >= defined) {
              const node = nodes.find((a) => a.data.name === nodeLabel);
              // no duplicates
              if (node && !visibleNodes.includes(node)) {
                visibleNodes.push(node);
              }
            }
          }
        }
      }

      if (patientBDetails) {
        for (const nodeB of patientBDetails || []) {
          const nodeLabel = nodeB.name;
          const cleanNodeLabel = nodeLabel.trim().toLowerCase();

          // there is no filter term or filterterm can be applied
          if (!filterTerm || (filterTerm && cleanNodeLabel.includes(filterTerm.toLowerCase()))) {
            // threshold check
            if (defined && nodeB.score >= defined) {
              const node = nodes.find((a) => a.data.name === nodeLabel);
              // no duplicates
              if (node && !visibleNodes.includes(node)) {
                visibleNodes.push(node);
              }
            }
          }
        }
      }
    } else {
      visibleNodes = [];
      for (const node of nodes) {
        const nodeLabel = node.data.name.toLowerCase();

        // there is no filter term or filterterm can be applied
        if (!filterTerm || (filterTerm && nodeLabel.includes(filterTerm.toLowerCase()))) {
          if (!visibleNodes.includes(node)) {
            visibleNodes.push(node);
          }
        }
      }
    }

    switch (sortBy) {
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
