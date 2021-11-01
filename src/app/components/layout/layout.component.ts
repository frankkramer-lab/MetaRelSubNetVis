import { Component, OnInit } from '@angular/core';
import { ColorNodesBy, UtilService } from '../../services/util.service';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public utilService: UtilService, private graphService: GraphService) { }

  ngOnInit(): void {
  }

  selectColorNodesBy(colorBy: ColorNodesBy): void {
    this.graphService.visualizationConfig.colorNodesBy = colorBy;
  }

  toggleShowAllNodes(b: boolean): void {
    this.graphService.visualizationConfig.showAllNodes = b;
  }

  toggleShowMtbResults(b: boolean): void {
    this.graphService.visualizationConfig.showMtbResults = b;
  }

  toggleShowOnlySharedNodes(b: boolean): void {
    this.graphService.visualizationConfig.showOnlySharedNodes = b;
  }

  fitGraph(): void {
    this.graphService.fitGraph();
  }
}
