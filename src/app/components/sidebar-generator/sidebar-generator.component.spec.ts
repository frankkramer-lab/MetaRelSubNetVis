import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGeneratorComponent } from './sidebar-generator.component';

describe('SidebarGeneratorComponent', () => {
  let component: SidebarGeneratorComponent;
  let fixture: ComponentFixture<SidebarGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarGeneratorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
