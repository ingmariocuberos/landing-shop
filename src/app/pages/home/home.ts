import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeroImageFooter } from '@components/hero-image-footer/hero-image-footer';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    HeroImageFooter
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
