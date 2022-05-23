import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGeneratorComponentVisibilityComponent } from './sidebar-generator-component-visibility.component';

describe('SidebarGeneratorComponentVisibilityComponent', () => {
  let component: SidebarGeneratorComponentVisibilityComponent;
  let fixture: ComponentFixture<SidebarGeneratorComponentVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarGeneratorComponentVisibilityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarGeneratorComponentVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
