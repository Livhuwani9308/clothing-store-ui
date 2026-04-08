import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PRODUCTS } from '../../../../../assets/data/products.data';
import { Product } from '../../../../interfaces/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-preview',
  standalone: true,
  templateUrl: './product-preview.component.html',
  styleUrl: './product-preview.component.scss',
  imports: [RouterModule, CommonModule]
})
export class ProductPreviewComponent implements OnInit {

  product!: Product;
  selectedImage = '';
  selectedSize = '';
  selectedColor = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = PRODUCTS.find(p => p.id === id)!;

    this.selectedImage = this.product.imageUrl;

    // default selections
    if (this.product.variants.length) {
      this.selectedColor = this.product.variants[0].color.name;
      this.selectedSize = this.product.variants[0].sizes[0];
    }
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  addToCart(product: Product) {
    console.log('Added to cart:', product);
  }
}