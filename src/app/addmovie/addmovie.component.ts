import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Genre } from '../genre.enum';
import { Rating } from '../rating.enum';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
// we need an object
movie = new Movie();
public genreEnum = Genre;
public ratingEnum = Rating;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }


  submitMovieButton() {
    this.dataService.addMovie(this.movie).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['movielist']);
      }
    );
  }

  goBackToList() {
    this.router.navigate(['movielist']);
  }
}
