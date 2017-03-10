import { TestBed, inject } from '@angular/core/testing';

import { ShowEventService } from './show-event.service';

describe('ShowEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowEventService]
    });
  });

  it('should ...', inject([ShowEventService], (service: ShowEventService) => {
    expect(service).toBeTruthy();
  }));
});
