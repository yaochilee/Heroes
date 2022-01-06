import { TestBed, inject } from '@angular/core/testing';

import { BasicAuthHtppInterceptorService } from './basic-auth-htpp-interceptor.service';

describe('BasicAuthHtppInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicAuthHtppInterceptorService]
    });
  });

  it('should be created', inject([BasicAuthHtppInterceptorService], (service: BasicAuthHtppInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
