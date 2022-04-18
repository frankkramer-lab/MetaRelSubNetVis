import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLayoutFormComponent } from './sidebar-layout-form.component';

describe('SidebarLayoutFormComponent', () => {
  let component: SidebarLayoutFormComponent;
  let fixture: ComponentFixture<SidebarLayoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarLayoutFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLayoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
