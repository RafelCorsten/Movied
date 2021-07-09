import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public movieDetail : any;
  
  constructor(private router: ActivatedRoute, private apiClientService : ApiClientService) {  }

  ngOnInit(): void {
    let id = Number(this.router.snapshot.paramMap.get('movieId'));

    this.apiClientService.getDetailsbyMovie(id).subscribe((movies) => {
      this.movieDetail =  movies;
    });
  }

}
