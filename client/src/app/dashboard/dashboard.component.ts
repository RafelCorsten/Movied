import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { IMovie } from '../IMovieType';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  constructor(private apiClientService: ApiClientService) {}
  boxOfficeMovies : IMovie[] = [];
  actionMovies : IMovie[] = [];
  
  ngOnInit(): void {
    this.apiClientService.getDiscoverMovies().subscribe((movies) => {
      this.boxOfficeMovies = movies;
    });
    this.apiClientService.getCategoryMovies(28).subscribe((movies) => {
      this.actionMovies = movies;
    });
  }
}
