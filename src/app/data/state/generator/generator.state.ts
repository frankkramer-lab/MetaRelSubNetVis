import { ComponentVisibilityEnum } from '../../../core/enum/component-visibility.enum';
import { ImageDownloadConfig } from '../../schema/image-download-config';

export interface GeneratorState {
  sidebarVisibility: ComponentVisibilityEnum;
  componentImportVisibility: ComponentVisibilityEnum;
  componentPatientsVisibility: ComponentVisibilityEnum;
  componentThresholdVisibility: ComponentVisibilityEnum;
  componentNodesVisibility: ComponentVisibilityEnum;
  componentLayoutVisibility: ComponentVisibilityEnum;
  componentDownloadVisibility: ComponentVisibilityEnum;
  componentGeneratorVisibility: ComponentVisibilityEnum;
  componentImpressumVisibility: ComponentVisibilityEnum;
  imageDownloadConfig: ImageDownloadConfig;
  isImageDownloadConfigValid: boolean;
  triggerImageDownload: boolean;
  queryParams: string;
  domain: string;
}
