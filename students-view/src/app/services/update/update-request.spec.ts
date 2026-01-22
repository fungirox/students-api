import { TestBed } from '@angular/core/testing';

import { UpdateRequest } from './update-request';

describe('UpdateRequest', () => {
  let service: UpdateRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
