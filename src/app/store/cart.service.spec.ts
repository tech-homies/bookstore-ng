import { TestBed } from '@angular/core/testing';

import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { Book } from '../models/book';
import { aBookMock } from '../models/book.mock';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideExperimentalZonelessChangeDetection()],
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should remove a book from the cart', () => {
    const book: Book = aBookMock();
    service.addToCart(book);
    expect(service.cart().length).toBe(1);

    service.removeFromCart(book);
    expect(service.cart().length).toBe(0);
  });
  it('should remove one instance of a book if added twice', () => {
    const book: Book = aBookMock();
    service.addToCart(book);
    service.addToCart(book);
    expect(service.cart().length).toBe(2);

    service.removeFromCart(book);
    expect(service.cart().length).toBe(1);
  });
});
