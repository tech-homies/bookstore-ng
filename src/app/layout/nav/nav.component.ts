import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartService } from '../../store/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  imports: [
    MatToolbar,
    MatSidenav,
    MatIcon,
    MatSidenavContainer,
    MatSidenavContent,
    MatNavList,
    MatListItem,
    MatIconButton,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    MatBadge,
    CurrencyPipe,
  ],
})
export class NavComponent {
  #breakpointObserver = inject(BreakpointObserver);
  #cartService = inject(CartService);

  cart = this.#cartService.cart;
  cartPrice = this.#cartService.cartPrice;

  isHandset$: Observable<boolean> = this.#breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay(),
  );
}
