import { ComponentVisibilityEnum } from '../../core/enum/component-visibility.enum';
import { NodeColorByEnum } from '../../core/enum/node-color-by.enum';
import { NodeSizeByEnum } from '../../core/enum/node-size-by.enum';
import { ImageDownloadConfig } from './image-download-config';

export interface VisualizationConfig {
  uuid: string;
  /**
   * Sidebar component visibility
   */
  sb?: ComponentVisibilityEnum;
  /**
   * Sidebar's import component visibility
   */
  cIn?: ComponentVisibilityEnum;
  /**
   * Sidebar's patient component visibilty
   */
  cP?: ComponentVisibilityEnum;
  /**
   * Sidebar's threshold component visibility
   */
  cT?: ComponentVisibilityEnum;
  /**
   * Sidebar's nodes component visibility
   */
  cN?: ComponentVisibilityEnum;
  /**
   * Sidebar's layout component visibility
   */
  cL?: ComponentVisibilityEnum;
  /**
   * Sidebar's download component visibility
   */
  cD?: ComponentVisibilityEnum;
  /**
   * Sidebar's generator component visibility
   */
  cG?: ComponentVisibilityEnum;
  /**
   * Sidebar's impressum component visibility
   */
  cIm?: ComponentVisibilityEnum;
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
