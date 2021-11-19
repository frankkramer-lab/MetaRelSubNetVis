import { Injectable } from '@angular/core';
import { PatientItem } from '../../data/schema/patient-item';
import { NodeColorByEnum } from '../enum/node-color-by.enum';
import { NodeSizeByEnum } from '../enum/node-size-by.enum';
import { CancerStatusEnum } from '../enum/cancer-status.enum';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  /**
   * Returns a patient's minimal gene expression.
   * @param patientItems List of this patient's details
   */
  getMinGe = (patientItems: PatientItem[]): number => {
    let min = Number.MAX_SAFE_INTEGER;
    patientItems.forEach((item) => {
      if (item.ge < min) {
        min = item.ge;
      }
    });
    return min;
  };

  /**
   * Returns a patient's maximal gene expression.
   * @param patientItems List of this patient's details
   */
  getMaxGe = (patientItems: PatientItem[]): number => {
    let max = Number.MIN_SAFE_INTEGER;
    patientItems.forEach((item) => {
      if (item.ge > max) {
        max = item.ge;
      }
    });
    return max;
  };

  /**
   * Returns the enumeration {@link NodeColorByEnum} as string literal,
   * which is used as an object key during rendering.
   * @param colorNodesBy Possible enumeration option
   */
  getColorByLiteral = (colorNodesBy: NodeColorByEnum): string => {
    switch (colorNodesBy) {
      case NodeColorByEnum.relevance:
        return 'score';
      case NodeColorByEnum.geneExpressionLevel:
        return 'geLevel';
      case NodeColorByEnum.geneExpression:
        return 'ge';
      default:
        return '';
    }
  };

  /**
   * Returns the enumeration {@link NodeSizeByEnum} as string literal,
   * which is used as an object key during rendering.
   * @param nodeSizeBy Possible enumeration option
   */
  getNodeSizeByLiteral = (nodeSizeBy: NodeSizeByEnum): string => {
    switch (nodeSizeBy) {
      case NodeSizeByEnum.relevance:
        return 'score';
      case NodeSizeByEnum.geneExpression:
        return 'ge';
      default:
        return '';
    }
  };

  /**
   * Returns the enumeration {@link CancerStatusEnum} as string literal,
   * which ist used as an object key during rendering.
   * @param cancerStatus Possible enumeration option
   */
  getCancerStatusLiteral = (cancerStatus: CancerStatusEnum): string => {
    return cancerStatus === CancerStatusEnum.metastatic ? 'metastatic' : 'nonmetastatic';
  };

  /**
   * Encodes a node's label by replacing all dashes with % sign.
   * @param label Node's original label
   */
  encodeNodeLabel = (label: string): string => {
    return label.replace(new RegExp('-', 'g'), '%');
  };

  /**
   * Decodes a node's label by replacing all % with dashes.
   * @param label Node's encoded label
   */
  decodeNodelabel = (label: string): string => {
    return label.replace(new RegExp('%', 'g'), '-');
  };
}
