import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGeneratorFormComponent } from './sidebar-generator-form.component';

describe('SidebarGeneratorFormComponent', () => {
  let component: SidebarGeneratorFormComponent;
  let fixture: ComponentFixture<SidebarGeneratorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarGeneratorFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarGeneratorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
