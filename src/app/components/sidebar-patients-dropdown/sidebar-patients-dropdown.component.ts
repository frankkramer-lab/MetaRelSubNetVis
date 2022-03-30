import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Patient } from '../../data/schema/patient';

@Component({
  selector: 'app-sidebar-patients-dropdown',
  templateUrl: './sidebar-patients-dropdown.component.html',
  styleUrls: ['./sidebar-patients-dropdown.component.scss'],
})
export class SidebarPatientsDropdownComponent {
  @Input() patients!: Patient[] | null;

  @Input() patient!: Patient | null;

  @Input() label!: string | null;

  @Input() labelFallback!: string;

  @Output() patientSelected: EventEmitter<Patient> = new EventEmitter<Patient>();

  @Output() patientReset: EventEmitter<void> = new EventEmitter<void>();
}
