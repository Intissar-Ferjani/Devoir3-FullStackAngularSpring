import { TestBed } from '@angular/core/testing';

import { EcrivainService } from './ecrivain.service';

describe('EcrivainService', () => {
  let service: EcrivainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcrivainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
