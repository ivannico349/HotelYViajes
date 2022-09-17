import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgCollection: Array<object> = [
    {
      image: './assets/img/habitacion1.jpg',
      thumbImage: './assets/img/habitacion1.jpg',
      alt: 'Image 1',
      title: 'Village Waikiki'
    }, {
      image: './assets/img/habitacion2.jpg',
      thumbImage: './assets/img/habitacion2.jpg',
      title: 'Ocean View',
      alt: 'Image 2'
    }, {
      image: './assets/img/habitacion3.jpg',
      thumbImage: './assets/img/habitacion3.jpg',
      title: 'Junior Suite',
      alt: 'Image 3'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 6',
      alt: 'Image 6'
    }
];
}
