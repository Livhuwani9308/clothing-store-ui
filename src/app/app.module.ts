import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbBannerComponent } from './components/breadcrumb-banner/breadcrumb-banner.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccountComponent } from './pages/account/account.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './pages/shop/product-list/product-list.component';
import { ProductPreviewComponent } from './pages/shop/product-preview/product-preview.component';
import { ProductFormComponent } from './pages/shop/product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbBannerComponent,
    ProductCardComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    CheckoutComponent,
    AboutComponent,
    ContactComponent,
    AccountComponent,
    AdminComponent,
    HomeCarouselComponent,
    ProductListComponent,
    ProductPreviewComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
