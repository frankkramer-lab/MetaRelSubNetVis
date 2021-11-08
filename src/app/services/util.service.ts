import { Injectable } from '@angular/core';
import { PatientItem } from '../models/patient-item';

/**
 * Nodes are colored based on their gene expression, their abstract gene expression levels or
 * based on their relevance
 */
export enum ColorNodesBy {
  geneExpressionLevel,
  geneExpression,
  relevance,
}

/**
 * Sizes of the nodes are defined by either gene expression or relevance
 */
export enum NodeSizeBy {
  geneExpression,
  relevance,
}

/**
 * Cancer status can either be metastatic or nonmetastatic
 */
export enum CancerStatus {
  metastatic,
  nonmetastatic,
}

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  /**
   * Color nodes by enum
   */
  colorNodesBy = ColorNodesBy;

  /**
   * Node size by enum
   */
  nodeSizeBy = NodeSizeBy;

  /**
   * Cancer status enum
   */
  cancerStatus = CancerStatus;

  getMinGe(patientItems: PatientItem[]): number {
    let min = Number.MAX_SAFE_INTEGER;
    patientItems.forEach((item) => {
      if (item.ge < min) {
        min = item.ge;
      }
    });
    return min;
  }

  getMaxGe(patientItems: PatientItem[]): number {
    let max = Number.MIN_SAFE_INTEGER;
    patientItems.forEach((item) => {
      if (item.ge > max) {
        max = item.ge;
      }
    });
    return max;
  }

  getColorByLiteral(colorNodesBy: ColorNodesBy): string {
    switch (colorNodesBy) {
      case ColorNodesBy.relevance:
        return 'rel';
      case ColorNodesBy.geneExpressionLevel:
        return 'geLevel';
      case ColorNodesBy.geneExpression:
        return 'ge';
      default:
        return '';
    }
  }

  getNodeSizeByLiteral(nodeSizeBy: NodeSizeBy): string {
    switch (nodeSizeBy) {
      case NodeSizeBy.relevance:
        return 'score';
      case NodeSizeBy.geneExpression:
        return 'ge';
      default:
        return '';
    }
  }

  getCancerStatusLiteral(cancerStatus: CancerStatus): string {
    switch (cancerStatus) {
      case CancerStatus.metastatic:
        return 'metastatic';
      case CancerStatus.nonmetastatic:
        return 'nonmetastatic';
      default:
        return '';
    }
  }
}
