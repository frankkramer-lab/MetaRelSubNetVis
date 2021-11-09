import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThresholdSliderComponent } from './threshold-slider.component';

describe('ThresholdSliderComponent', () => {
  let component: ThresholdSliderComponent;
  let fixture: ComponentFixture<ThresholdSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThresholdSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThresholdSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
