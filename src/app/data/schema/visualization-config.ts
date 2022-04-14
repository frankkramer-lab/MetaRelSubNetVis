import { ComponentVisibilityEnum } from '../../core/enum/component-visibility.enum';
import { ImageDownloadConfig } from './image-download-config';

export interface VisualizationConfig {
  uuid: string;
  /**
   * Sidebar component visibility
   */
  sb?: ComponentVisibilityEnum;
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
  /**
   * Sidebar's back button's visibility
   */
  bb?: boolean;
  /**
   * True, if the image download is to be triggered
   */
  dwn?: boolean;
  /**
   * Image configuration for the triggered image download
   */
  img?: ImageDownloadConfig;
  /**
   * Defines coloring of the nodes
   */
  col?: string;
  /**
   * Defines sizing of the nodes
   */
  size?: string;
  /**
   * Selected patient group A
   */
  pa?: string;
  /**
   * Selected patient group B
   */
  pb?: string;
  /**
   * Contains the name of the boolean property that is to be applied. Empty, if none is to be applied.
   */
  bool?: string;
  /**
   * List of selected nodes
   */
  sel?: string[];
  /**
   * True, if all nodes are visible
   */
  all?: boolean;
  /**
   * True, if only shared nodes are to be shown
   */
  shared?: boolean;
  /**
   * Defined threshold, consisting of key value pairs:
   * th_propertyA: 1.24,
   * th_propertyB: 5.523,
   * ...
   */
  th?: any;
}
