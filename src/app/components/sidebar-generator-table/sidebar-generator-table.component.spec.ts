import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGeneratorTableComponent } from './sidebar-generator-table.component';

describe('SidebarGeneratorTableComponent', () => {
  let component: SidebarGeneratorTableComponent;
  let fixture: ComponentFixture<SidebarGeneratorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarGeneratorTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarGeneratorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
