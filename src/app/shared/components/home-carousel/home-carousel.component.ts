import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss',
  imports: [CommonModule, RouterModule]
})
export class HomeCarouselComponent implements OnInit, OnDestroy {
  images = [
    '/assets/images/slider/slider-1.jpg',
    '/assets/images/slider/slider-2.jpg',
    '/assets/images/slider/slider-3.jpg',
    '/assets/images/slider/slider-4.jpg',
    '/assets/images/slider/slider-5.jpg',
    '/assets/images/slider/slider-6.jpg'
  ];

  activeSlideIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  setActiveSlide(index: number) {
    this.activeSlideIndex = index;
    // Reset timer when manually changing slides
    this.stopTimer();
    this.startTimer();
  }

  private startTimer() {
    this.intervalId = setInterval(() => {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.images.length;
    }, 5000); // 4 seconds
  }

  private stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
