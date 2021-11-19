import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNodesComponent } from './sidebar-nodes.component';

describe('SidebarNodesComponent', () => {
  let component: SidebarNodesComponent;
  let fixture: ComponentFixture<SidebarNodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarNodesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
