import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BreadcrumbBannerComponent } from './shared/components/breadcrumb-banner/breadcrumb-banner.component';
import { ProductCardComponent } from './frontend/components/shop/product-card/product-card.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { ShopComponent } from './frontend/components/shop/shop.component';
import { CartComponent } from './frontend/components/cart/cart.component';
import { AboutComponent } from './shared/pages/about/about.component';
import { ContactComponent } from './shared/pages/contact/contact.component';
import { HomeCarouselComponent } from './shared/components/home-carousel/home-carousel.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './frontend/components/shop/product-list/product-list.component';
import { ProductPreviewComponent } from './frontend/components/shop/product-preview/product-preview.component';
import { ProductFormComponent } from './frontend/components/shop/product-form/product-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FrontendComponent } from './frontend/frontend.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './shared/modules/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthenticationInterceptor } from './interceptors/authentication/authentication.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    // ProductCardComponent,
    // ShopComponent,
    // CartComponent,
    // AboutComponent,
    // ContactComponent,
    // ProductListComponent,
    // ProductPreviewComponent,
    // ProductFormComponent,
    // FrontendComponent,
    // AdminComponent,
    // RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
            closeButton: true,
            timeOut: 2000,
            extendedTimeOut: 2000,
        })
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
