import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { HomeComponent } from '../shared/pages/home/home.component';
import { BreadcrumbBannerComponent } from '../shared/components/breadcrumb-banner/breadcrumb-banner.component';
import { HomeCarouselComponent } from '../shared/components/home-carousel/home-carousel.component';


@NgModule({
  declarations: [FrontendComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BreadcrumbBannerComponent,
    HomeCarouselComponent
  ]
})
export class FrontendModule { }
