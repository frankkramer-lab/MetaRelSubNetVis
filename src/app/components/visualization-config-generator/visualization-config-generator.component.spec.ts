import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationConfigGeneratorComponent } from './visualization-config-generator.component';

describe('VisualizationConfigGeneratorComponent', () => {
  let component: VisualizationConfigGeneratorComponent;
  let fixture: ComponentFixture<VisualizationConfigGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizationConfigGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationConfigGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
