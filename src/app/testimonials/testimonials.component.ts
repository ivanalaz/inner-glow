import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  imagePath: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  standalone: true,
  
  animations: [
    // trigger('fadeInOut', [
    //   transition(':enter', [
    //     style({ opacity: 0 }),
    //     animate('300ms', style({ opacity: 1 })),
    //   ]),
    //   transition(':leave', [
    //     animate('300ms', style({ opacity: 0 })),
    //   ]),
    // ]),
    trigger('testAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('300ms', style({ transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('300ms', style({ transform: 'scale(0)' })),
      ]),
    ]),
  ],
  imports: [CommonModule],
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    // {
    //   name: 'Sarah J.',
    //   quote: 'This platform has completely transformed my life. I feel more organized and in control than ever before!',
    //   avatar: 'sarah.jpg'
    // },
    // {
    //   name: 'Emily R.',
    //   quote: 'The menstrual cycle tracker is incredibly accurate and has helped me understand my body better.',
    //   avatar: 'emily.jpg'
    // },
    // {
    //   name: 'Lisa M.',
    //   quote: 'Setting and achieving my goals has never been easier. I love how everything is integrated into one platform.',
    //   avatar: 'lisa.jpg'
    // }
    {
      quote: "I've been using this platform for just a month, and it's completely transformed my daily routine. The cycle tracker and goal-setting features are game-changers, making me feel more in control and motivated than ever before. It's a perfect blend of practicality and inspiration, helping me achieve a balanced and empowered life.",
      author: "Samantha Lee",
      role: "Wellness Coach at Glow",
      imagePath: "../../assets/images/testimonial-image.jpg"
    },
    {
      quote: "This app has been a revelation for me. The daily planner helps me stay organized, while the cycle tracking feature has given me invaluable insights into my body. I feel more in tune with myself and more productive than ever. It's like having a personal assistant and a wellness guru all in one!",
      author: "Emily Chen",
      role: "Entrepreneur & Fitness Enthusiast",
      imagePath: "../../assets/images/testimonial-image-2.png"
    }
  ];

  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  show: boolean = true;

  toggleVisibility(): void {
    this.show = !this.show;
  }
}