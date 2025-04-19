import { TestBed } from '@angular/core/testing';

import { AtisService } from './atis.service';

describe('AtisService', () => {
  let service: AtisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
