import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { BreadcrumbBannerComponent } from '../../../shared/components/breadcrumb-banner/breadcrumb-banner.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  imports: [RouterModule, BreadcrumbBannerComponent]
})
export class ShopComponent implements OnInit {

  categories: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategories()
      .subscribe(data => this.categories = data);
  }
}