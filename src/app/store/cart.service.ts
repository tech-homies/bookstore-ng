import { computed, Injectable, signal } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  #cart = signal<Book[]>([]);
  cart = this.#cart.asReadonly();

  cartPrice = computed(() => this.cart().length * 8);

  addToCart(book: Book) {
    this.#cart.update((cart) => cart.concat(book));
  }

  removeFromCart(book: Book) {
    this.#cart.update((cart) => cart.filter((b) => b.id !== book.id));
  }
}
