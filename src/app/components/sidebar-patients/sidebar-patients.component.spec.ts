import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPatientsComponent } from './sidebar-patients.component';

describe('SidebarPatientsComponent', () => {
  let component: SidebarPatientsComponent;
  let fixture: ComponentFixture<SidebarPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarPatientsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
