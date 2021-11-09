import { VisualizationConfig } from './visualization-config';
import { DownloadConfig } from './download-config';

export interface RoutingConfig {
  collapsedSidebar: boolean;
  triggerImageDownload: boolean;
  imageDownloadConfig: DownloadConfig;
  visualizationConfig: VisualizationConfig;
}
