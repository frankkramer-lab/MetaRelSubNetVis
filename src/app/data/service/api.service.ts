import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NetworkSearch } from '../schema/network-search';
import { NetworkSearchItem } from '../schema/network-search-item';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /**
   * Public NDExBio API.
   * @private
   */
  private readonly ndexPublicApi = 'https://public.ndexbio.org/v2/';
  /**
   * Public NDExBio domain
   */
  readonly ndexPublicDomain = 'https://www.ndexbio.org/viewer/networks/';

  /**
   * Constructor
   * @param http Loading network.ts and patient data via HTTP
   */
  constructor(private http: HttpClient) {
  }

  searchNdex(keyword: string): Observable<NetworkSearch> {
    const sanitizedSearchTerm = keyword.trim();

    if (sanitizedSearchTerm.length === 0) {
      return new Observable<NetworkSearch
        >((o) => o.next());
    }

    const body: any = {
      searchString: sanitizedSearchTerm,
    };

    const url = `${this.ndexPublicApi}search/network?size=10`;
    return this.http.post(url, body) as Observable<NetworkSearch>;
  }

  /**
   * Loading data from NDEx by a specified UUID.
   * @param uuid identifier for the network of interest
   */
  loadNetwork(uuid: string): Observable<any[]> {
    return this.http.get(`${this.ndexPublicApi}network/${uuid}`) as Observable<any[]>;
  }

  loadNetworkSummary(uuid: string): Observable<NetworkSearchItem> {
    return this.http.get(`${this.ndexPublicApi}network/${uuid}/summary`) as Observable<NetworkSearchItem>;
  }


}
