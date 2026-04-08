import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbBannerComponent } from '../../components/breadcrumb-banner/breadcrumb-banner.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [RouterModule, FormsModule, BreadcrumbBannerComponent, CommonModule]
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;

  submitContactForm() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    setTimeout(() => {
      console.log('Contact form submitted', this.contact);
      
      this.contact = {
        name: '',
        email: '',
        message: ''
      };
      
      this.isSubmitting = false;
    }, 1500);
  }
}
