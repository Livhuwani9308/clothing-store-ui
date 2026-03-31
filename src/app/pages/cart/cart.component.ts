import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.model';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  // cartItems = [
  //   { id: 1, name: 'Slim Fit Shirt', price: 45 },
  //   { id: 2, name: 'Chelsea Boots', price: 95 }
  // ];

  // removeItem(item: any) {
  //   this.cartItems = this.cartItems.filter(i => i.id !== item.id);
  // }

  // getTotal() {
  //   return this.cartItems.reduce((total, item) => total + item.price, 0);
  // }
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getItems();
  }

  getTotal(): number {
    return this.cartService.getTotalPrice();
  }
}
