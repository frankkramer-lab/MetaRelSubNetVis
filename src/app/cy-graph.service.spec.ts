import { TestBed } from '@angular/core/testing';

import { CyGraphService } from './cy-graph.service';

describe('CyGraphService', () => {
  let service: CyGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
