import { TestBed } from '@angular/core/testing';

import { DirectiveService } from './directive.service';

describe('DirectiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectiveService = TestBed.get(DirectiveService);
    expect(service).toBeTruthy();
  });
});
