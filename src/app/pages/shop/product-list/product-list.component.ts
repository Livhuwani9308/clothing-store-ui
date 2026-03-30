import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../../../assets/data/products.data';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  categoryTitle = '';

  maxPrice = 5000;
  selectedSizes: string[] = [];
  selectedColors: string[] = [];

  availableSizes: string[] = [];
  availableColors: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');

    // this.categoryTitle = category?.toUpperCase() || '';
    this.categoryTitle = category
      ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
      : '';

    this.products = PRODUCTS.filter(p => p.category === category);
    this.filteredProducts = [...this.products];

    this.extractAvailableFilters();
  }

  extractAvailableFilters() {
    const sizes = new Set<string>();
    const colors = new Set<string>();

    this.products.forEach(product => {
      product.variants.forEach(variant => {
        colors.add(variant.color.name);
        variant.sizes.forEach(size => sizes.add(size));
      });
    });

    this.availableSizes = Array.from(sizes);
    this.availableColors = Array.from(colors);
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(product => {

      const priceMatch = product.price <= this.maxPrice;

      const colorMatch =
        this.selectedColors.length === 0 ||
        product.variants.some(v =>
          this.selectedColors.includes(v.color.name)
        );

      const sizeMatch =
        this.selectedSizes.length === 0 ||
        product.variants.some(v =>
          v.sizes.some(size =>
            this.selectedSizes.includes(size)
          )
        );

      return priceMatch && colorMatch && sizeMatch;
    });
  }

  toggleSize(size: string) {
    this.selectedSizes.includes(size)
      ? this.selectedSizes = this.selectedSizes.filter(s => s !== size)
      : this.selectedSizes.push(size);

    this.applyFilters();
  }

  toggleColor(color: string) {
    this.selectedColors.includes(color)
      ? this.selectedColors = this.selectedColors.filter(c => c !== color)
      : this.selectedColors.push(color);

    this.applyFilters();
  }

  resetFilters() {
    this.maxPrice = 5000;
    this.selectedSizes = [];
    this.selectedColors = [];
    this.filteredProducts = [...this.products];
  }
}