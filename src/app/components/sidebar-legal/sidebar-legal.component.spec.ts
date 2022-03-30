import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLegalComponent } from './sidebar-legal.component';

describe('SidebarLegalComponent', () => {
  let component: SidebarLegalComponent;
  let fixture: ComponentFixture<SidebarLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarLegalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
