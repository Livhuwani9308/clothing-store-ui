import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  products: Product[] = [];

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'Classic Black Hoodie',
        imageUrl: 'https://livhuwani.sirv.com/MKclothing/shop-now/black-hoodie.jpg',
        price: 650.00
      },
      {
        id: 2,
        name: 'Premium White T-shirt',
        imageUrl: 'https://livhuwani.sirv.com/MKclothing/shop-now/white-tshirt.jpg',
        price: 250.00
      },
      {
        id: 3,
        name: 'Vintage Denim Jacket',
        imageUrl: 'https://livhuwani.sirv.com/MKclothing/shop-now/denim-jacket.jpg',
        price: 1200.00
      },
      {
        id: 4,
        name: 'Adjustable Logo Cap',
        imageUrl: 'https://livhuwani.sirv.com/MKclothing/shop-now/cap.jpg',
        price: 180.00
      },
      {
        id: 5,
        name: 'Nike Air Max Sneakers',
        imageUrl: 'https://livhuwani.sirv.com/MKclothing/shop-now/nike-air-max.jpg',
        price: 2400.00
      },
      {
        id: 6,
        name: 'Adidas Superstar Shoes',
        imageUrl: 'https://livhuwani.sirv.com/MKclothing/shop-now/adidas-shoe.jpg',
        price: 2100.00
      },
      {
        id: 7,
        name: 'Lacoste Classic Polo Shirt',
        imageUrl: 'https://livhuwani.sirv.com/MKclothing/shop-now/lacoste-polo-shirt.jpg',
        price: 950.00
      },
      {
        id: 8,
        name: '2-Piece Athletic Tracksuit',
        imageUrl: 'https://livhuwani.sirv.com/MKclothing/shop-now/two-piece-tracksuit.jpg',
        price: 1100.00
      },
      {
        id: 9,
        name: 'Elegant Golf Shirt',
        imageUrl: 'https://livhuwani.sirv.com/MKclothing/shop-now/elegant-golf-shirt.jpg',
        price: 600.00
      },
      {
        id: 10,
        name: 'Sweater Knit Pullover',
        imageUrl: 'https://livhuwani.sirv.com/MKclothing/shop-now/sweater-pullover.jpg',
        price: 700.00
      },
      {
        id: 11,
        name: 'Adidas Essential Hoodie',
        imageUrl: 'https://livhuwani.sirv.com/MKclothing/shop-now/adidas-hoodie.jpg',
        price: 1200.00
      },
      {
        id: 12,
        name: 'Nike Sportswear Joggers',
        imageUrl: 'https://livhuwani.sirv.com/MKclothing/shop-now/nike-joggers.jpg',
        price: 850.00
      }
    ];
  }
}
