import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent } from './shared/pages/about/about.component';
// import { CartComponent } from './frontend/components/cart/cart.component';
// import { ContactComponent } from './shared/pages/contact/contact.component';
// import { HomeComponent } from './shared/pages/home/home.component';
// import { ShopComponent } from './frontend/components/shop/shop.component';
// import { ProductFormComponent } from './frontend/components/shop/product-form/product-form.component';
// import { ProductListComponent } from './frontend/components/shop/product-list/product-list.component';
// import { ProductPreviewComponent } from './frontend/components/shop/product-preview/product-preview.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/modules/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./shared/modules/login/login.component').then(m => m.LoginComponent),
    data: { isAdmin: true },
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./frontend/frontend.module').then(m => m.FrontendModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
  // { path: '', component: HomeComponent },
  // { path: 'shop', component: ShopComponent },
  // { path: 'products/:category', component: ProductListComponent },
  // { path: 'product/form', component: ProductFormComponent },
  // { path: 'product/:id', component: ProductPreviewComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
