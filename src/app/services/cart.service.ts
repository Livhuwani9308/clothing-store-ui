import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.cartSubject.next(this.cartItems);
  }

  getItems(): Product[] {
    return [...this.cartItems];
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}
