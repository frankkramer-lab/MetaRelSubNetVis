import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLayoutFormDiscreteComponent } from './sidebar-layout-form-discrete.component';

describe('SidebarLayoutFormDiscreteComponent', () => {
  let component: SidebarLayoutFormDiscreteComponent;
  let fixture: ComponentFixture<SidebarLayoutFormDiscreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarLayoutFormDiscreteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLayoutFormDiscreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
