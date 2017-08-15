import { TestBed, inject } from '@angular/core/testing';

import { Demo2Service } from './demo2.service';

describe('Demo2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Demo2Service]
    });
  });

  it('should be created', inject([Demo2Service], (service: Demo2Service) => {
    expect(service).toBeTruthy();
  }));
});
