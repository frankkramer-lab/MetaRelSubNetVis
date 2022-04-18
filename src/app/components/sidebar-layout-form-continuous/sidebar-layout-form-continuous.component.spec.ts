import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLayoutFormContinuousComponent } from './sidebar-layout-form-continuous.component';

describe('SidebarLayoutFormContinuousComponent', () => {
  let component: SidebarLayoutFormContinuousComponent;
  let fixture: ComponentFixture<SidebarLayoutFormContinuousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarLayoutFormContinuousComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLayoutFormContinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
