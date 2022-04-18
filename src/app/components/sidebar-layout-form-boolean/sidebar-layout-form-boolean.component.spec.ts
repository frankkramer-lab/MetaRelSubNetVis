import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLayoutFormBooleanComponent } from './sidebar-layout-form-boolean.component';

describe('SidebarLayoutFormBooleanComponent', () => {
  let component: SidebarLayoutFormBooleanComponent;
  let fixture: ComponentFixture<SidebarLayoutFormBooleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarLayoutFormBooleanComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLayoutFormBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
