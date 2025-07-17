import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartStore } from '../../store/cart-store';
import { CartItem } from './cart-item/cart-item';

@Component({
  selector: 'app-cart',
  imports: [CartItem],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // TODO: Voir si c'est nécessaire pour les composants sans inputs de type page
})
export default class CartPage {
  #cartService = inject(CartStore);

  cart = this.#cartService.cart;
}
