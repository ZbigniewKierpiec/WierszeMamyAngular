import { TestBed } from '@angular/core/testing';

import { WierszeService } from './wiersze.service';

describe('WierszeService', () => {
  let service: WierszeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WierszeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
