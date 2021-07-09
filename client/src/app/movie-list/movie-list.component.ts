import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../IMovieType';
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import { SwiperComponent } from "swiper/angular";

SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})

export class MovieListComponent implements OnInit {

  @Input() movies!:IMovie[];

  constructor() {}

  ngOnInit() {}
}
