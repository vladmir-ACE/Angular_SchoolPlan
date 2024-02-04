import { TestBed } from '@angular/core/testing';

import { AnneService } from './anne.service';

describe('AnneService', () => {
  let service: AnneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
