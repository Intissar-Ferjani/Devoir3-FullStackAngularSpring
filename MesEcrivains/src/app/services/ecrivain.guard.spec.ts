import { EcrivainGuard } from './ecrivain.guard';
import { TestBed } from '@angular/core/testing';


describe('EcrivainGuard', () => {
  let guard: EcrivainGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EcrivainGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});