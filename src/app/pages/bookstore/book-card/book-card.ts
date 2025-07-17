import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Book } from '../../../models/book';
import { CartStore } from '../../../store/cart-store';

@Component({
  selector: 'app-book-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    MatCardAvatar,
    MatIcon,
  ],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCard {
  book = input.required<Book>();

  #cartService = inject(CartStore);

  addToCart() {
    this.#cartService.addToCart(this.book());
  }

  removeFromCart() {
    this.#cartService.removeFromCart(this.book());
  }
}
