import { ComponentVisibilityEnum } from '../../core/enum/component-visibility.enum';
import { NodeColorByEnum } from '../../core/enum/node-color-by.enum';
import { NodeSizeByEnum } from '../../core/enum/node-size-by.enum';
import { ImageDownloadConfig } from './image-download-config';

export interface VisualizationConfig {
  uuid: string;
  sb?: ComponentVisibilityEnum;
  dwn?: boolean;
  img?: ImageDownloadConfig;
  col?: NodeColorByEnum;
  size?: NodeSizeByEnum;
  pa?: string;
  pb?: string;
  sel?: string[];
  all?: boolean;
  mtb?: boolean;
  shared?: boolean;
  th?: number;
}
