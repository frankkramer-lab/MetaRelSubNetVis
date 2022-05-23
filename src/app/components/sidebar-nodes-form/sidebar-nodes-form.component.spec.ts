import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNodesFormComponent } from './sidebar-nodes-form.component';

describe('SidebarNodesFormComponent', () => {
  let component: SidebarNodesFormComponent;
  let fixture: ComponentFixture<SidebarNodesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarNodesFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNodesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
