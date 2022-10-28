import { TestBed } from '@angular/core/testing';

import { WhatWeDoService } from './what-we-do.service';

describe('WhatWeDoService', () => {
  let service: WhatWeDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatWeDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
