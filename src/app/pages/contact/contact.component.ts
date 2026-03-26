import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
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
