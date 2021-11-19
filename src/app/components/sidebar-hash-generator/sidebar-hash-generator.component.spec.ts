import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHashGeneratorComponent } from './sidebar-hash-generator.component';

describe('SidebarHashGeneratorComponent', () => {
  let component: SidebarHashGeneratorComponent;
  let fixture: ComponentFixture<SidebarHashGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarHashGeneratorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHashGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
