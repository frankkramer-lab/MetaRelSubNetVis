import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGeneratorBoolVisibilityComponent } from './sidebar-generator-bool-visibility.component';

describe('SidebarGeneratorBoolVisibilityComponent', () => {
  let component: SidebarGeneratorBoolVisibilityComponent;
  let fixture: ComponentFixture<SidebarGeneratorBoolVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarGeneratorBoolVisibilityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarGeneratorBoolVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
