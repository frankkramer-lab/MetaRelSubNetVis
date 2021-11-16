import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GraphService } from '../services/graph.service';
import { NodeColorBy, NodeSizeBy, SidebarVisibility, UtilService } from '../services/util.service';
import { RoutingConfig } from '../models/routing-config';
import { DownloadConfig } from '../models/download-config';

@Injectable({
  providedIn: 'root',
})
export class RoutingGuard implements CanActivate {
  constructor(private graphService: GraphService, private utilService: UtilService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (route.params.data) {
      const { visualizationConfig } = this.graphService;
      const imageDownloadConfig: DownloadConfig = { extension: '', scale: 0, transparent: false };
      const routingConfig: RoutingConfig = {
        sidebarVisibility: this.utilService.sidebarVisibility.full,
        loadAndSelectMeta: null,
        loadAndSelectNonmeta: null,
        triggerImageDownload: false,
        selectedNodes: null,
        imageDownloadConfig,
        visualizationConfig,
      };

      const { data } = route.params;
      const routeParts: string[] = data.split('&');

      routeParts.forEach((part) => {
        const keyValuePair: string[] = part.split('-');
        switch (keyValuePair[0]) {
          case 'sb':
            routingConfig.sidebarVisibility = Number(keyValuePair[1]) as SidebarVisibility;
            break;
          case 'dwn':
            // todo
            routingConfig.triggerImageDownload = keyValuePair[1] === 'true';
            break;
          case 'img':
            // todo
            const imgConfigItems = keyValuePair[1].split('%');
            const scale = Number(imgConfigItems[1]);
            routingConfig.imageDownloadConfig.extension = imgConfigItems[0];
            routingConfig.imageDownloadConfig.scale = Number.isNaN(scale) ? 1 : scale;
            routingConfig.imageDownloadConfig.transparent = imgConfigItems[2] === 'true';
            break;
          case 'col':
            visualizationConfig.nodeColorBy = Number(keyValuePair[1]) as NodeColorBy;
            break;
          case 'size':
            visualizationConfig.nodeSizeBy = Number(keyValuePair[1]) as NodeSizeBy;
            break;
          case 'pm':
            routingConfig.loadAndSelectMeta = keyValuePair[1];
            break;
          case 'pn':
            routingConfig.loadAndSelectNonmeta = keyValuePair[1];
            break;
          case 'sel':
            routingConfig.selectedNodes = keyValuePair[1].split(',') ?? null;
            break;
          case 'all':
            visualizationConfig.showAllNodes = keyValuePair[1] === 'true';
            break;
          case 'mtb':
            visualizationConfig.showMtbResults = keyValuePair[1] === 'true';
            break;
          case 'shared':
            visualizationConfig.showOnlySharedNodes = keyValuePair[1] === 'true';
            break;
          case 'th':
            visualizationConfig.thresholdDefined = Number(keyValuePair[1]);
            break;
          default:
            console.log(`Key not found! ${keyValuePair[0]}`);
            break;
        }
      });

      console.log(routingConfig);
      this.graphService.setRoutingConfig(routingConfig);

      // todo sidebar visibility
      // todo trigger image

      this.router
        .navigate([''])
        .then()
        .catch((e) => console.error(e));
    }
    return true;
  }
}
