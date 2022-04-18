import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModalFormatComponent } from './home-modal-format.component';

describe('HomeModalFormatComponent', () => {
  let component: HomeModalFormatComponent;
  let fixture: ComponentFixture<HomeModalFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeModalFormatComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeModalFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
