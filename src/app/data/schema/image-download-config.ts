export interface ImageDownloadConfig {
  /**
   * File extension, can either be 'PNG', 'JPEG' or 'SVG'
   */
  extension: string;
  /**
   * True if the background should be transparent, but can only be true,
   * if {@link extension} is PNG
   */
  transparent: boolean;
  /**
   * Number between 1 and 10 which defines the factor to scale the image by
   */
  scale: number;
}
