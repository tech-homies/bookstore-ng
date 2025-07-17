import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItem {
  item = input.required<Book>();
}
