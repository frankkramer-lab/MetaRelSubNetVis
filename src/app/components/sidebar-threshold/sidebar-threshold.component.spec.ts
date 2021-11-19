import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarThresholdComponent } from './sidebar-threshold.component';

describe('SidebarThresholdComponent', () => {
  let component: SidebarThresholdComponent;
  let fixture: ComponentFixture<SidebarThresholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarThresholdComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarThresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
