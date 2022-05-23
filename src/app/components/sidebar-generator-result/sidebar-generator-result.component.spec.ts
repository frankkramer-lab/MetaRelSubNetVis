import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGeneratorResultComponent } from './sidebar-generator-result.component';

describe('SidebarGeneratorResultComponent', () => {
  let component: SidebarGeneratorResultComponent;
  let fixture: ComponentFixture<SidebarGeneratorResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarGeneratorResultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarGeneratorResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
