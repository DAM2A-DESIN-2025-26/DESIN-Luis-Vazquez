import { TestBed } from '@angular/core/testing';

import { DesfileService } from './desfile-service';

describe('DesfileService', () => {
  let service: DesfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
