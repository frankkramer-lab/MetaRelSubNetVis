import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NetworkSearchItem } from '../../data/schema/network-search-item';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent {

  @Input() isLoading!: boolean | null;

  @Input() sampleNetworks!: NetworkSearchItem[] | null;

  @Input() networks!: NetworkSearchItem[] | null;

  @Output() loadNetwork: EventEmitter<string> = new EventEmitter<string>();

  @Output() searchNdex: EventEmitter<string | null> = new EventEmitter<string | null>();

  searchTerm: string | null = null;

  selectedNetwork: NetworkSearchItem | null = null;



}
