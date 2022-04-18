import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from '../../data/service/api.service';
import { AppState } from '../../data/state/app.state';
import { NetworkSearchItem } from '../../data/schema/network-search-item';
import {
  selectIsLoading,
  selectLastResultEmpty,
  selectLastTermEmpty,
  selectNetworks,
  selectNetworkSummary,
  selectSampleNetworks,
  selectSetupInProgress,
} from '../../data/state/home/home.selectors';
import {
  loadNetworkSummaries,
  loadSampleSummaries,
  showModalFormat,
  showNetworkDetails,
} from '../../data/state/home/home.actions';
import { loadQueryParams } from '../../data/state/hydrator/hydrator.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sampleNetworks$!: Observable<NetworkSearchItem[]>;

  networks$!: Observable<NetworkSearchItem[]>;

  selectedNetwork$!: Observable<NetworkSearchItem | null>;

  isLoading$!: Observable<boolean>;

  setupInProgress$!: Observable<boolean>;

  lastTermWasEmpty$!: Observable<boolean>;

  lastResultWasEmpty$!: Observable<boolean>;

  constructor(private apiService: ApiService, private store: Store<AppState>) {}

  /**
   * By default, we load two exemplary networks - one illustrating the basic data structure,
   * the other was used to generate data for a ML task.
   */
  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectIsLoading);
    this.setupInProgress$ = this.store.select(selectSetupInProgress);
    this.sampleNetworks$ = this.store.select(selectSampleNetworks);
    this.networks$ = this.store.select(selectNetworks);
    this.selectedNetwork$ = this.store.select(selectNetworkSummary);
    this.lastTermWasEmpty$ = this.store.select(selectLastTermEmpty);
    this.lastResultWasEmpty$ = this.store.select(selectLastResultEmpty);

    this.store.dispatch(loadSampleSummaries());
  }

  /**
   * Triggers the search on NDEx via search term.
   */
  searchNdex(searchTerm: string | null) {
    this.store.dispatch(loadNetworkSummaries({ searchTerm }));
  }

  /**
   * Starts loading and parsing the network.
   */
  setupWorkspace(uuid: string) {
    this.store.dispatch(
      loadQueryParams({
        params: {
          uuid,
        },
      }),
    );
  }

  selectNetwork(selectedNetwork: NetworkSearchItem) {
    this.store.dispatch(showNetworkDetails({ selectedNetwork }));
  }

  showModal() {
    this.store.dispatch(showModalFormat());
  }
}
