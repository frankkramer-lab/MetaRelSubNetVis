import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent implements OnInit {

  /**
   * Getter for the scale form control, which is the only part that is bound to validation
   */
  get scale() {
    return this.downloadForm.get('scale');
  }

  /**
   * Getter for the datatype form control
   */
  get datatype() {
    return this.downloadForm.get('datatype');
  }

  /**
   * Getter for the background transparency form control
   */
  get transparent() {
    return this.downloadForm.get('backgroundTransparent');
  }

  /**
   * Available data types for the download
   */
  readonly availableDataTypes: string[] = ['PNG', 'JPEG', 'SVG'];

  /**
   * Form to configure the download
   */
  downloadForm!: FormGroup;

  /**
   * Constructor
   * @param graphService Needed to download images
   */
  constructor(private graphService: GraphService) {}

  /**
   * Initializes the download form
   */
  ngOnInit(): void {
    this.downloadForm = new FormGroup({
      datatype: new FormControl('PNG'),
      backgroundTransparent: new FormControl(false),
      scale: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(10)]),
    });
  }

  /**
   * Triggers the download in the specified configuration.
   * Defaults to PNG data type
   */
  onSubmitDownload(): void {
    this.graphService.downloadImage({
      extension: this.datatype?.value,
      transparent: this.transparent?.value,
      scale: this.scale?.value,
    });
  }
}
