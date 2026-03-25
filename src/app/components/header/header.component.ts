import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;
  isMenuOpen: boolean = false;

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.updateCartCount();
    this.subscribeToCartChanges();
    this.subscribeToRouteChanges();
  }

  private updateCartCount(): void {
    this.cartItemCount = this.cartService.getItems().length;
  }

  private subscribeToCartChanges(): void {
    this.cartService.cart$.subscribe(() => {
      this.updateCartCount();
    });
  }

  private subscribeToRouteChanges(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Close mobile menu when navigating
      this.isMenuOpen = false;
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
