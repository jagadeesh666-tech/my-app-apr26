import { TestBed } from '@angular/core/testing';

import { WeatherhydService } from './weatherhyd.service';

describe('WeatherhydService', () => {
  let service: WeatherhydService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherhydService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
