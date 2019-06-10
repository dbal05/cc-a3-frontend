import { TestBed } from '@angular/core/testing';

import { SailsService } from './sails.service';

describe('SailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SailsService = TestBed.get(SailsService);
    expect(service).toBeTruthy();
  });
});
