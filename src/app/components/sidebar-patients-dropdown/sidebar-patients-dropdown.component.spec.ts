import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPatientsDropdownComponent } from './sidebar-patients-dropdown.component';

describe('SidebarPatientsDropdownComponent', () => {
  let component: SidebarPatientsDropdownComponent;
  let fixture: ComponentFixture<SidebarPatientsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarPatientsDropdownComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPatientsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
