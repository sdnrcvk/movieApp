import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  //localhost:4200/detail/2

  @Input() movie:Movie;

  constructor(private movieService:MovieService,
    private route:ActivatedRoute,
    private location:Location) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie():void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
          .subscribe(movie=>this.movie = movie);
  }

  save():void{
    this.movieService.update(this.movie).subscribe(()=>{
      this.location.back();
    });
  }
}

