import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VisualizationConfig } from '../models/visualization-config';

@Injectable({
  providedIn: 'root',
})
export class RoutingGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // if (route.params.data) {
    //   const visualizationConfig: VisualizationConfig = {
    //     nodeColorBy: 0,
    //     nodeSizeBy: 0,
    //     patientDetailsMetastatic: undefined,
    //     patientDetailsNonmetastatic: undefined,
    //     patientMetastatic: undefined,
    //     patientNonmetastatic: undefined,
    //     patientsSelected: 0,
    //     selectedNodes: [],
    //     showAllNodes: false,
    //     showMtbResults: false,
    //     showOnlySharedNodes: false,
    //     thresholdDefined: 0,
    //     thresholdMax: 0,
    //     thresholdMin: 0,
    //   };
    //
    //   console.log();
    // }

    return true;
  }
}
