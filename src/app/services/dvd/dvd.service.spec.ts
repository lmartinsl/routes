import { TestBed } from '@angular/core/testing';

import { DvdService } from './dvd.service';

describe('DvdService', () => {
  let service: DvdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DvdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
