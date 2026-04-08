import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-banner',
  standalone: true,
  templateUrl: './breadcrumb-banner.component.html',
  styleUrl: './breadcrumb-banner.component.scss',
  imports: [CommonModule, RouterModule]
})
export class BreadcrumbBannerComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() showBreadcrumb: boolean = true;
}
