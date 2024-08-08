import { Component, HostListener } from '@angular/core';
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TestimonialsComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Life Organization and Wellness Platform';

  showScrollBtn: boolean = false;

  // isMenuOpen = false;

  constructor() {}
  
  ngOnInit(): void {}
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollBtn = window.pageYOffset > 300; // Show the button when scrolled 300px down
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
}
