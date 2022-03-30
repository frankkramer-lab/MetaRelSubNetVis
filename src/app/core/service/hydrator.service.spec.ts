import { TestBed } from '@angular/core/testing';

import { HydratorService } from './hydrator.service';

describe('HydratorService', () => {
  let service: HydratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HydratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
