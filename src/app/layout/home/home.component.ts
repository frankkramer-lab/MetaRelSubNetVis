import { Component } from '@angular/core';
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
export class HomeComponent {
  keyword!: string;

  networks!: NetworkSearchItem[];

  networkDetailsIndex: number | null = null;

  requestInProgress = false;

  constructor(private apiService: ApiService, private store: Store<AppState>) {}

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
    if (this.networkDetailsIndex !== null) {
      return `${this.apiService.ndexPublicDomain}${
        this.networks[this.networkDetailsIndex].externalId
      }`;
    }
    return '#';
  }

  setupWorkspace() {
    if (this.networkDetailsIndex !== null) {
      this.store.dispatch(
        loadQueryParams({
          params: {
            uuid: 'a420aaee-4be9-11ec-b3be-0ac135e8bacf',
          },
        }),
      );
    }
  }
}
