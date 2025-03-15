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
import { CartService } from '../../../store/cart.service';

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
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {
  book = input.required<Book>();

  #cartService = inject(CartService);

  addToCart() {
    this.#cartService.addToCart(this.book());
  }

  removeFromCart() {
    this.#cartService.removeFromCart(this.book());
  }
}
