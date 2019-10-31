import { TestBed } from '@angular/core/testing';

import { TrendingRequestService } from './trending-request.service';

describe('TrendingRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrendingRequestService = TestBed.get(TrendingRequestService);
    expect(service).toBeTruthy();
  });
});
