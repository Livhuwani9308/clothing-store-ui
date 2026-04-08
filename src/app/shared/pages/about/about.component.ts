import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbBannerComponent } from '../../components/breadcrumb-banner/breadcrumb-banner.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  imports: [CommonModule, RouterModule, BreadcrumbBannerComponent]
})
export class AboutComponent {

}
