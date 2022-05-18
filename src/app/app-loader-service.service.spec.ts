import { TestBed } from '@angular/core/testing';

import { AppLoaderServiceService } from './app-loader-service.service';

describe('AppLoaderServiceService', () => {
  let service: AppLoaderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppLoaderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
