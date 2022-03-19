import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarImportFormComponent } from './sidebar-import-form.component';

describe('SidebarImportFormComponent', () => {
  let component: SidebarImportFormComponent;
  let fixture: ComponentFixture<SidebarImportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarImportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarImportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
