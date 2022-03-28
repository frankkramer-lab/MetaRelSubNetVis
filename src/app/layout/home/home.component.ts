import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from '../../data/service/api.service';
import { AppState } from '../../data/state/app.state';
import { NetworkSearchItem } from '../../data/schema/network-search-item';
import {
  selectIsLoading,
  selectNetworks,
  selectSampleNetworks,
} from '../../data/state/home/home.selectors';
import { loadNetworkSummaries, loadSampleSummaries } from '../../data/state/home/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sampleNetworks$!: Observable<NetworkSearchItem[]>;

  networks$!: Observable<NetworkSearchItem[]>;

  isLoading$!: Observable<boolean>;

  constructor(private apiService: ApiService, private store: Store<AppState>) {}

  /**
   * By default, we load two exemplary networks - one illustrating the basic data structure,
   * the other was used to generate data for a ML task.
   */
  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectIsLoading);
    this.sampleNetworks$ = this.store.select(selectSampleNetworks);
    this.networks$ = this.store.select(selectNetworks);

    this.store.dispatch(loadSampleSummaries());


    // this.requestInProgress = true;
    // this.apiService.loadNetworkSummary('a420aaee-4be9-11ec-b3be-0ac135e8bacf').subscribe(
    //   (data: NetworkSearchItem) => {
    //     this.exampleNetwork = data;
    //     this.networkSelected = this.exampleNetwork;
    //   },
    //   (error) => console.error(error),
    // );
    //
    // this.apiService.loadNetworkSummary('140d01f0-acfe-11ec-b3be-0ac135e8bacf').subscribe(
    //   (data: NetworkSearchItem) => {
    //     this.dummyNetwork = data;
    //     this.requestInProgress = false;
    //   },
    //   (error) => console.error(error),
    // );
  }

  /**
   * Triggers the search on NDEx via search term.
   */
  searchNdex(searchTerm: string | null) {
    if (searchTerm === null) {
      return;
    }

    this.store.dispatch(loadNetworkSummaries({ searchTerm }))

    // this.store.dispatch()
    // this.requestInProgress = true;
    // this.apiService.searchNdex(this.keyword).subscribe(
    //   (data) => {
    //     if (data.networks.length > 0) {
    //       this.networks = data.networks;
    //     } else {
    //       console.log('Empty result');
    //     }
    //     this.requestInProgress = false;
    //   },
    //   (error) => console.error(error),
    // );
  }


  /**
   * Starts loading and parsing the network.
   */
  setupWorkspace(uuid: string) {
    // if (this.networkSelected !== null) {
    //   this.requestInProgress = true;
    //   this.store.dispatch(
    //     loadQueryParams({
    //       params: {
    //         uuid: this.networkSelected.externalId,
    //       },
    //     }),
    //   );
    // }
  }
}
