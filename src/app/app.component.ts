import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { faArrowCircleDown, faBars, faHospitalUser, faPalette, faProjectDiagram, faSortAmountUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as cytoscape from 'cytoscape';
// @ts-ignore
import * as svg from 'cytoscape-svg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  /**
   * Icon: faBars
   */
  faBars = faBars;

  /**
   * Icon: faTimes
   */
  faTimes = faTimes;

  /**
   * Icon: faHospitalUser
   */
  faHospitalUser = faHospitalUser;

  /**
   * Icon: faSortAmountUp;
   */
  faSortAmountUp = faSortAmountUp;

  /**
   * Icon: faProjectDiagram
   */
  faProjectDiagram = faProjectDiagram;

  /**
   * Icon: faPalette
   */
  faPalette = faPalette;

  /**
   * Icon: faArrowCircleDown
   */
  faArrowCircleDown = faArrowCircleDown;

  /**
   * True, if the sidebar is visible
   */
  showSidebar = true;

  /**
   * Cytoscape core which contains the essential functionality
   */
  cy!: cytoscape.Core;

  /**
   * Cytoscape container used for rendering the network
   */
  @ViewChild('cy') cyContainer!: ElementRef;

  ngAfterViewInit(): void {
    cytoscape.use(svg);
    this.cy = cytoscape({
      container: this.cyContainer.nativeElement,
      elements: [
        {
          group: 'nodes',
          data: {
            id: 'n1',
            parent: 'nparent',
          },

          scratch: {
            _foo: 'bar',
          },

          position: {
            x: 100,
            y: 100,
          },
        },
      ],

      layout: {
        name: 'preset',
      },

      // so we can see the ids
      style: [
        {
          selector: 'node',
          style: {
            label: 'data(id)',
          },
        },
      ],
    });
  }

  exportSvg(): void {
    // @ts-ignore
    console.log(this.cy.svg());
  }
}
