import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../../store/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // TODO: Voir si c'est nécessaire pour les composants sans inputs de type page
})
export default class CartComponent {
  #cartService = inject(CartService);

  cart = this.#cartService.cart;
}
