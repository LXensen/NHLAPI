import { TestBed } from '@angular/core/testing';

import { ProspectService } from './prospect.service';

describe('ProspectserviceService', () => {
  let service: ProspectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProspectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
