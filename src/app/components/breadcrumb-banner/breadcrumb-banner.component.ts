import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-banner',
  standalone: false,
  templateUrl: './breadcrumb-banner.component.html',
  styleUrl: './breadcrumb-banner.component.scss'
})
export class BreadcrumbBannerComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() showBreadcrumb: boolean = true;
}
