import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDropdownComponent } from './patient-dropdown.component';

describe('PatientDropdownComponent', () => {
  let component: PatientDropdownComponent;
  let fixture: ComponentFixture<PatientDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
