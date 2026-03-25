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
    
    // Simulate API call
    setTimeout(() => {
      console.log('Contact form submitted', this.contact);
      alert('Thank you for contacting us! We\'ll get back to you soon.');
      
      // Reset form
      this.contact = {
        name: '',
        email: '',
        message: ''
      };
      
      this.isSubmitting = false;
    }, 1500);
  }
}
