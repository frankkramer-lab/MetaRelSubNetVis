import { Component, Input } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { GraphService } from '../../services/graph.service';
import { PatientCollection } from '../../models/patient-collection';
import { DownloadConfig } from '../../models/download-config';

@Component({
  selector: 'app-visualization-config-generator',
  templateUrl: './visualization-config-generator.component.html',
  styleUrls: ['./visualization-config-generator.component.scss'],
})
export class VisualizationConfigGeneratorComponent {
  /**
   * Collection of all patients, both metastatic and non-metastatic
   */
  @Input() patients!: PatientCollection | null;

  /**
   * List of available data types.
   */
  readonly availableDatatypes = ['PNG', 'JPEG', 'SVG'];

  /**
   * True, if the generated route should trigger the download immediately.
   */
  triggerImageDownload = false;

  /**
   * True, if the generated route should collapse the sidebar.
   */
  collapsedSidebar = false;

  /**
   * True, if the button during the collapsed sidebar is to be hidden.
   */
  collapsedSidebarButton = false;

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
  constructor(public utilService: UtilService, public graphService: GraphService) {}

  generateAndCopyHash(): void {
    const urlParams: string[] = [];

    // bools
    urlParams.push(`sb=${this.collapsedSidebar}`);
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

    // selection
    urlParams.push(
      `sel=${this.graphService.selectedNodes
        .map((a) => this.utilService.encodeNodeLabel(a.data.id))
        .join(',')}`,
    );

    const encoded = encodeURI(urlParams.join('&').replace(new RegExp('=', 'g'), '-'));
    console.log(encoded);
  }
}
