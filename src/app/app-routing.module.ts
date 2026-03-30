import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductFormComponent } from './pages/shop/product-form/product-form.component';
import { ProductListComponent } from './pages/shop/product-list/product-list.component';
import { ProductPreviewComponent } from './pages/shop/product-preview/product-preview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'products/:category', component: ProductListComponent },
  { path: 'product/form', component: ProductFormComponent },
  { path: 'product/:id', component: ProductPreviewComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
