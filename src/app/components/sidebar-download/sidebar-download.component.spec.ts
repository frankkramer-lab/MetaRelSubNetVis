import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDownloadComponent } from './sidebar-download.component';

describe('SidebarDownloadComponent', () => {
  let component: SidebarDownloadComponent;
  let fixture: ComponentFixture<SidebarDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarDownloadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
