import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarThresholdSelectorComponent } from './sidebar-threshold-selector.component';

describe('SidebarThresholdSelectorComponent', () => {
  let component: SidebarThresholdSelectorComponent;
  let fixture: ComponentFixture<SidebarThresholdSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarThresholdSelectorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarThresholdSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
