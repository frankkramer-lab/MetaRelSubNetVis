import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from '../../data/service/api.service';
import { NetworkSearchItem } from '../../data/schema/network-search-item';
import { AppState } from '../../data/state/app.state';
import { loadQueryParams } from '../../data/state/hydrator/hydrator.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  keyword!: string;

  networks!: NetworkSearchItem[];

  exampleNetwork: NetworkSearchItem | null = null;

  networkSelected: NetworkSearchItem | null = null;

  requestInProgress = false;

  constructor(private apiService: ApiService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.requestInProgress = true;
    this.apiService.loadNetworkSummary('a420aaee-4be9-11ec-b3be-0ac135e8bacf').subscribe(
      (data: NetworkSearchItem) => {
        this.exampleNetwork = data;
        this.requestInProgress = false;
      },
      (error) => console.error(error),
    );
  }

  searchNdex() {
    if (!this.keyword) {
      return;
    }
    this.requestInProgress = true;
    this.apiService.searchNdex(this.keyword).subscribe(
      (data) => {
        if (data.networks.length > 0) {
          this.networks = data.networks;
        } else {
          console.log('Empty result');
        }
        this.requestInProgress = false;
      },
      (error) => console.error(error),
    );
  }

  getLinkToNdexNetwork(): string {
    if (this.networkSelected !== null) {
      return `${this.apiService.ndexPublicDomain}${this.networkSelected.externalId}`;
    }
    return '#';
  }

  setupWorkspace() {
    if (this.networkSelected !== null) {
      this.store.dispatch(
        loadQueryParams({
          params: {
            uuid: this.networkSelected.externalId,
          },
        }),
      );
    }
  }
}
