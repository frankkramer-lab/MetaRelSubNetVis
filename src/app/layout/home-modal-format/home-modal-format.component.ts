import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState } from '../../data/state/app.state';

@Component({
  selector: 'app-home-modal-format',
  templateUrl: './home-modal-format.component.html',
  styleUrls: ['./home-modal-format.component.scss'],
})
export class HomeModalFormatComponent {
  constructor(public activeModal: NgbActiveModal, private store: Store<AppState>) {}
}
