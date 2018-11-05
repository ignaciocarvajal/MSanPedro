import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

  showNavigationIndicators = true;
  showNavigationArrows = false;

  images = [
    './assets/img/image-01.jpg',
    './assets/img/image-02.jpg',
    './assets/img/image-03.jpg',
    './assets/img/image-04.jpg',
    './assets/img/image-05.jpg',
    './assets/img/image-06.jpg',
  ];


}
