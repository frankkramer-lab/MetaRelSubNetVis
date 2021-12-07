import { SidebarVisibilityEnum } from '../../../core/enum/sidebar-visibility.enum';
import { ImageDownloadConfig } from '../../schema/image-download-config';

export interface GeneratorState {
  sidebarVisibility: SidebarVisibilityEnum;
  imageDownloadConfig: ImageDownloadConfig;
  isImageDownloadConfigValid: boolean;
  triggerImageDownload: boolean;
  queryParams: string;
  domain: string;
}
