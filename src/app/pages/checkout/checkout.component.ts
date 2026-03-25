import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
    order = {
    name: '',
    address: '',
    email: '',
    phone: ''
  };

  constructor(private cartService: CartService) {}

  submitOrder(form: NgForm) {
    if (form.valid) {
      const orderDetails = {
        ...this.order,
        items: this.cartService.getItems(),
        total: this.cartService.getTotalPrice()
      };
      console.log('Order Placed:', orderDetails);
      alert('Order placed successfully!');
      this.cartService.clearCart();
      form.resetForm();
    }
  }
}
