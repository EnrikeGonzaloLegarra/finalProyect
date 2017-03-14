import { TestBed, inject } from '@angular/core/testing';

import { ControlGuardService } from './control-guard.service';

describe('ControlGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlGuardService]
    });
  });

  it('should ...', inject([ControlGuardService], (service: ControlGuardService) => {
    expect(service).toBeTruthy();
  }));
});
