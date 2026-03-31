import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {

  categories: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategories()
      .subscribe(data => this.categories = data);
  }
}