import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Genre } from '../genre.enum';
import { Rating } from '../rating.enum';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {

  movie = new Movie();
  public genreEnum = Genre;
  public ratingEnum = Rating;

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];
    this.dataService.getMovieById(id).subscribe(
      data => {
        this.movie = data;
      }
    )

  }

  editMovieButton(){
    this.dataService.addMovie(this.movie).subscribe(
      data => {
        this.router.navigate(['movielist']);
      }
    );
  }

  goBackToList() {
    this.router.navigate(['movielist']);
  }

}
