import { TestBed } from '@angular/core/testing';

import { DeleteRequest } from './delete-request';

describe('DeleteRequest', () => {
  let service: DeleteRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
