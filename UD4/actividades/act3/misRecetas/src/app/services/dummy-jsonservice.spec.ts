import { TestBed } from '@angular/core/testing';

import { DummyJSONService } from './dummy-jsonservice';

describe('DummyJSONService', () => {
  let service: DummyJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
