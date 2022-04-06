import { ComponentVisibilityEnum } from '../../../core/enum/component-visibility.enum';

export interface SidebarState {
  visibility: ComponentVisibilityEnum;
  visibilityImport: ComponentVisibilityEnum;
  visibilityPatients: ComponentVisibilityEnum;
  visibilityThreshold: ComponentVisibilityEnum;
  visibilityNodes: ComponentVisibilityEnum;
  visibilityLayout: ComponentVisibilityEnum;
  visibilityDownload: ComponentVisibilityEnum;
  visibilityGenerator: ComponentVisibilityEnum;
  visibilityImpressum: ComponentVisibilityEnum;
  visibilityBackButton: boolean;
}
