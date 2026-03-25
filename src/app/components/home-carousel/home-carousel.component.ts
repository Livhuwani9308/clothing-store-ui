import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  standalone: false,
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent implements OnInit, OnDestroy {
  images = [
    'https://livhuwani.sirv.com/MKclothing/slider/slider-1.jpg',
    'https://livhuwani.sirv.com/MKclothing/slider/slider-2.jpg',
    'https://livhuwani.sirv.com/MKclothing/slider/slider-3.jpg',
    'https://livhuwani.sirv.com/MKclothing/slider/slider-4.jpg',
    'https://livhuwani.sirv.com/MKclothing/slider/slider-5.jpg',
    'https://livhuwani.sirv.com/MKclothing/slider/slider-6.jpg'
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
