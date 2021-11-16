import { VisualizationConfig } from './visualization-config';
import { DownloadConfig } from './download-config';
import { SidebarVisibility } from '../services/util.service';

export interface RoutingConfig {
  sidebarVisibility: SidebarVisibility;
  triggerImageDownload: boolean;
  loadAndSelectMeta: string | null;
  loadAndSelectNonmeta: string | null;
  selectedNodes: string[] | null;
  imageDownloadConfig: DownloadConfig;
  visualizationConfig: VisualizationConfig;
}
