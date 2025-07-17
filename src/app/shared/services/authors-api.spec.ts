import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AuthorsApi } from './authors-api';

describe('AuthorsService', () => {
  let service: AuthorsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient()],
    });
    service = TestBed.inject(AuthorsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
