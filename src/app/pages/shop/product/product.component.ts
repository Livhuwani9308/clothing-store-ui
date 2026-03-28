import { Component } from '@angular/core';
import { PRODUCTS } from '../../../data/products.data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products: any[] = [];
  filteredProducts: any[] = [];

  categoryTitle = '';

  maxPrice = 5000;
  selectedSizes: string[] = [];
  selectedColors: string[] = [];

  sizes = ['XS', 'S', 'M', 'L', 'XL'];
  colors = ['Black', 'White', 'Beige', 'Navy', 'Grey'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');
    this.categoryTitle = category?.toUpperCase() || '';

    this.products = PRODUCTS.filter(p => p.category === category);
    this.filteredProducts = [...this.products];
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(product =>
      product.price <= this.maxPrice
    );
  }

  toggleSize(size: string) {
    this.selectedSizes.includes(size)
      ? this.selectedSizes = this.selectedSizes.filter(s => s !== size)
      : this.selectedSizes.push(size);
  }

  toggleColor(color: string) {
    this.selectedColors.includes(color)
      ? this.selectedColors = this.selectedColors.filter(c => c !== color)
      : this.selectedColors.push(color);
  }
}
