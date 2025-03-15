import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCard, MatCardAvatar, MatCardContent } from '@angular/material/card';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-cart-item',
  imports: [MatCard, MatCardContent, MatCardAvatar],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  item = input.required<Book>();
}
