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

  // TODO: Idée de sujet -> faire un simple filter dans un 1er temps puis fixer avec IA
  removeFromCart(book: Book) {
    this.#cart.update((cart) => {
      const index = cart.findIndex((item) => item.id === book.id);
      if (index !== -1) {
        return cart.reduce((acc, item, i) => (i === index ? acc : [...acc, item]), [] as Book[]);
      }
      return cart;
    });
  }
}
