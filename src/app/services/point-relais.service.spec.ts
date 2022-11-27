import { TestBed } from '@angular/core/testing';

import { PointRelaisService } from './point-relais.service';

describe('PointRelaisService', () => {
  let service: PointRelaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointRelaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
