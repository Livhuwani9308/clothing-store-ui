import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeCarouselComponent } from '../../components/home-carousel/home-carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [RouterModule, FormsModule, HomeCarouselComponent, CommonModule]
})
export class HomeComponent implements OnInit {
  featuredProducts = [
    { id: 1, name: 'Leather Jacket', image: 'https://livhuwani.sirv.com/MKclothing/featured-products/leather-jacket.jpg', price: 120 },
    { id: 2, name: 'Sneakers', image: 'https://livhuwani.sirv.com/MKclothing/featured-products/sneaker.jpg', price: 80 },
    { id: 3, name: 'Denim Jeans', image: 'https://livhuwani.sirv.com/MKclothing/featured-products/denim-jean.jpg', price: 65 }
  ];

  newsletterEmail: string = '';

  constructor() {}

  ngOnInit() {
    // Animation initialization can go here if needed
  }

  subscribeNewsletter() {
    if (this.newsletterEmail && this.newsletterEmail.includes('@')) {
      // Here you would typically send the email to your backend
      alert('Thank you for subscribing! You\'ll receive our latest updates soon.');
      this.newsletterEmail = '';
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
