import { TestBed } from '@angular/core/testing';
import { ApiEditorialService } from './api-editorial.service';

describe('ApiEditorialService', () => {
  let service: ApiEditorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEditorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
