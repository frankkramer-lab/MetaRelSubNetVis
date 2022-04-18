import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
   * Constructor
   * @param http Loading network.ts and patient data via HTTP
   */
  constructor(private http: HttpClient) {}

  /**
   * Query NDEx with a specified keyword
   * @param keyword Term that is queried
   */
  searchNdex(keyword: string): Observable<NetworkSearch> {
    const searchString = keyword.trim();

    if (searchString.length === 0) return of<NetworkSearch>();

    const url = `${this.ndexPublicApi}search/network?size=10`;
    return this.http.post<NetworkSearch>(url, { searchString });
  }

  /**
   * Loading data from NDEx by a specified UUID.
   * @param uuid identifier for the network of interest
   */
  loadNetwork(uuid: string): Observable<any[]> {
    const url = `${this.ndexPublicApi}network/${uuid}`;
    return this.http.get<any[]>(url);
  }

  /**
   * Loading a network's summary
   * @param uuid identifier for the network of interest
   */
  loadNetworkSummary(uuid: string): Observable<NetworkSearchItem> {
    const url = `${this.ndexPublicApi}network/${uuid}/summary`;
    return this.http.get<NetworkSearchItem>(url);
  }
}
