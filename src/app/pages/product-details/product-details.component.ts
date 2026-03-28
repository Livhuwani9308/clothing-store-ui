import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Product } from '../../models/product.model';
// import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  // product!: Product;

  // constructor(
  //   private route: ActivatedRoute,
  //   private cartService: CartService
  // ) {}

  // ngOnInit() {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   const dummyProducts: Product[] = [
  //     {
  //       id: 1,
  //       name: 'Black Hoodie',
  //       imageUrl: 'https://livhuwani.sirv.com/MKclothing/products/hoodie1.jpg',
  //       price: 45.00
  //     },
  //     {
  //       id: 2,
  //       name: 'White T-shirt',
  //       imageUrl: 'https://livhuwani.sirv.com/MKclothing/products/tshirt1.jpg',
  //       price: 25.00
  //     },
  //     {
  //       id: 3,
  //       name: 'MK Denim Jacket',
  //       imageUrl: 'https://livhuwani.sirv.com/MKclothing/products/jacket1.jpg',
  //       price: 60.00
  //     },
  //     {
  //       id: 4,
  //       name: 'MK Cap',
  //       imageUrl: 'https://livhuwani.sirv.com/MKclothing/products/cap1.jpg',
  //       price: 15.00
  //     }
  //   ];

  //   this.product = dummyProducts.find(p => p.id === id)!;
  // }

  // addToCart() {
  //   this.cartService.addToCart(this.product);
  //   alert(`${this.product.name} added to cart!`);
  // }
}
