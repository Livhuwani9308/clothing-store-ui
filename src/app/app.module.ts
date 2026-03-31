import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbBannerComponent } from './components/breadcrumb-banner/breadcrumb-banner.component';
import { ProductCardComponent } from './pages/shop/product-card/product-card.component';
import { HomeComponent } from './frontend/components/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutComponent } from './frontend/components/about/about.component';
import { ContactComponent } from './frontend/components/contact/contact.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './pages/shop/product-list/product-list.component';
import { ProductPreviewComponent } from './pages/shop/product-preview/product-preview.component';
import { ProductFormComponent } from './pages/shop/product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FrontendComponent } from './frontend/frontend/frontend.component';
import { AdminComponent } from './admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BreadcrumbBannerComponent,
    ProductCardComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    AboutComponent,
    ContactComponent,
    HomeCarouselComponent,
    ProductListComponent,
    ProductPreviewComponent,
    ProductFormComponent,
    NavbarComponent,
    FrontendComponent,
    AdminComponent
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
