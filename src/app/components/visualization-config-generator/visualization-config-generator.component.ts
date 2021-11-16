import { Component } from '@angular/core';
import { SidebarVisibility, UtilService } from '../../services/util.service';
import { GraphService } from '../../services/graph.service';
import { DownloadConfig } from '../../models/download-config';

@Component({
  selector: 'app-visualization-config-generator',
  templateUrl: './visualization-config-generator.component.html',
  styleUrls: ['./visualization-config-generator.component.scss'],
})
export class VisualizationConfigGeneratorComponent {
  /**
   * List of available data types.
   */
  readonly availableDatatypes = ['PNG', 'JPEG', 'SVG'];

  /**
   * True, if the generated route should trigger the download immediately.
   */
  triggerImageDownload = false;

  /**
   * True, if the generated route should have a visible sidebar.
   */
  showSidebar = true;

  /**
   * True, if the button during the collapsed sidebar is visible.
   */
  showSidebarButton = true;

  /**
   * Config regarding image download
   */
  imageDownloadConfig: DownloadConfig = {
    extension: 'PNG',
    transparent: false,
    scale: 1,
  };

  /**
   * Constructor
   * @param utilService Needed for access to custom enumerations.
   * @param graphService Needed for access to {@link graphService#visualizationConfig}
   */
  constructor(public utilService: UtilService, public graphService: GraphService) {
  }

  /**
   * Todo change localhost to actual host
   * @param encodedUrlParams
   * @private
   */
  private copyToClipboard(encodedUrlParams: string): void {
    const url = `localhost:4200/${encodedUrlParams}`;
    console.log(url);
    navigator.clipboard.writeText(url);
    // todo show alert
  }

  /**
   * Generates the hash for the current visualization config and copies the
   * resulting URL to the clipboard.
   */
  generateAndCopyHash(): void {
    const urlParams: string[] = [];
    let sidebarVisibility: SidebarVisibility;
    if (this.showSidebar) {
      sidebarVisibility = SidebarVisibility.full;
    } else if (!this.showSidebar && this.showSidebarButton) {
      sidebarVisibility = SidebarVisibility.button;
    } else {
      sidebarVisibility = SidebarVisibility.none;
    }

    // bools
    urlParams.push(`sb=${sidebarVisibility}`);
    urlParams.push(`dwn=${this.triggerImageDownload}`);

    // image options
    if (this.imageDownloadConfig.scale < 11 && this.imageDownloadConfig.scale > 0) {
      urlParams.push(
        `img=${this.imageDownloadConfig.extension}%${
          this.imageDownloadConfig.scale
        }%${this.imageDownloadConfig.transparent.toString()}`,
      );
    }

    // patients
    if (this.graphService.visualizationConfig.patientMetastatic !== null) {
      urlParams.push(`pm=${this.graphService.visualizationConfig.patientMetastatic.name}`);
    }
    if (this.graphService.visualizationConfig.patientNonmetastatic !== null) {
      urlParams.push(`pn=${this.graphService.visualizationConfig.patientNonmetastatic.name}`);
    }

    // threshold
    urlParams.push(`th=${this.graphService.visualizationConfig.thresholdDefined}`);

    // rendering
    urlParams.push(`all=${this.graphService.visualizationConfig.showAllNodes}`);
    urlParams.push(`mtb=${this.graphService.visualizationConfig.showMtbResults}`);
    urlParams.push(`shared=${this.graphService.visualizationConfig.showOnlySharedNodes}`);

    // color, size
    urlParams.push(`col=${this.graphService.visualizationConfig.nodeColorBy}`);
    urlParams.push(`size=${this.graphService.visualizationConfig.nodeSizeBy}`);

    if (this.graphService.selectedNodes.length > 0) {
      // selection
      urlParams.push(
        `sel=${this.graphService.selectedNodes
          .map((a) => this.utilService.encodeNodeLabel(a.data.id))
          .join(',')}`,
      );
    }
    const encoded = encodeURI(urlParams.join('&').replace(new RegExp('=', 'g'), '-'));
    this.copyToClipboard(encoded);
  }
}
