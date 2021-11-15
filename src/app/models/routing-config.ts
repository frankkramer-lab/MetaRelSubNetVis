import { VisualizationConfig } from './visualization-config';
import { DownloadConfig } from './download-config';

export interface RoutingConfig {
  collapsedSidebar: boolean;
  collapsedSidebarButton: boolean;
  triggerImageDownload: boolean;
  loadAndSelectMeta: string | null;
  loadAndSelectNonmeta: string | null;
  selectedNodes: string[] | null;
  imageDownloadConfig: DownloadConfig;
  visualizationConfig: VisualizationConfig;
}
