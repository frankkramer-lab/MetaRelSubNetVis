import { ComponentVisibilityEnum } from '../../../core/enum/component-visibility.enum';
import { ImageDownloadConfig } from '../../schema/image-download-config';

export interface GeneratorState {
  sidebarVisibility: ComponentVisibilityEnum;
  imageDownloadConfig: ImageDownloadConfig;
  isImageDownloadConfigValid: boolean;
  triggerImageDownload: boolean;
  queryParams: string;
  domain: string;
}
