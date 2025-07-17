import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { BooksApi } from './books-api';

describe('BooksService', () => {
  let service: BooksApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient()],
    });
    service = TestBed.inject(BooksApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
