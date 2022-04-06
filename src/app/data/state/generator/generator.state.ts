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
  backButtonVisibility: boolean;
  isImageDownloadConfigValid: boolean;
  triggerImageDownload: boolean;
  domain: string;
}
