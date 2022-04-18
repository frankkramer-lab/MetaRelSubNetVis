import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NetworkSearchItem } from '../../data/schema/network-search-item';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
})
export class HomeContentComponent {
  @Input() isLoading!: boolean | null;

  @Input() setupInProgress!: boolean | null;

  @Input() sampleNetworks!: NetworkSearchItem[] | null;

  @Input() networks!: NetworkSearchItem[] | null;

  @Input() selectedNetwork!: NetworkSearchItem | null;

  @Input() lastTermWasEmpty!: boolean | null;

  @Input() lastResultWasEmpty!: boolean | null;

  @Output() networkDetailsEmitter: EventEmitter<NetworkSearchItem> =
    new EventEmitter<NetworkSearchItem>();

  @Output() loadNetwork: EventEmitter<string> = new EventEmitter<string>();

  @Output() searchNdex: EventEmitter<string | null> = new EventEmitter<string | null>();

  @Output() showModal: EventEmitter<void> = new EventEmitter<void>();

  searchTerm: string | null = null;
}
