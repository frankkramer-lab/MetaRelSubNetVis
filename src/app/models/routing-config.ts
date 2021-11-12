import { VisualizationConfig } from './visualization-config';
import { DownloadConfig } from './download-config';

export interface RoutingConfig {
  collapsedSidebar: boolean;
  triggerImageDownload: boolean;
  loadAndSelectMeta: string | null;
  loadAndSelectNonmeta: string | null;
  imageDownloadConfig: DownloadConfig;
  visualizationConfig: VisualizationConfig;
}
