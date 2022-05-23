import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDownloadFormComponent } from './sidebar-download-form.component';

describe('SidebarDownloadFormComponent', () => {
  let component: SidebarDownloadFormComponent;
  let fixture: ComponentFixture<SidebarDownloadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarDownloadFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDownloadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
