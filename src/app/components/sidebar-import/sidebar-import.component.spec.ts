import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarImportComponent } from './sidebar-import.component';

describe('SidebarImportComponent', () => {
  let component: SidebarImportComponent;
  let fixture: ComponentFixture<SidebarImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
