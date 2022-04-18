import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarThresholdSelectorRangeComponent } from './sidebar-threshold-selector-range.component';

describe('SidebarThresholdSelectorRangeComponent', () => {
  let component: SidebarThresholdSelectorRangeComponent;
  let fixture: ComponentFixture<SidebarThresholdSelectorRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarThresholdSelectorRangeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarThresholdSelectorRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
