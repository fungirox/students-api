import { TestBed } from '@angular/core/testing';

import { GetRequest } from './get-request';

describe('GetRequest', () => {
  let service: GetRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
