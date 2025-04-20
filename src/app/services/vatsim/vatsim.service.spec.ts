import { TestBed } from '@angular/core/testing';

import { VatsimService } from './vatsim.service';

describe('VatsimService', () => {
  let service: VatsimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VatsimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
