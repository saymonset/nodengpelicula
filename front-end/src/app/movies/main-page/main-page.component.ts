import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/auth/interfaces/interfaces';
import { IMovie, IMovies } from '../interfaces/imovies';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent implements OnInit {

  storedMovies: IMovie[] = []


  //const { name, email, password} = this.miFormulario.value;
  
  constructor(private service : MoviesService) { }

  
  onPostAdded(event: IMovie) {
    this.storedMovies.push(event);
  }

  ngOnInit(): void {
    this.service.movies().subscribe(resp=>{
      console.log(resp.movies);
      this.storedMovies = resp.movies  || [];
    });
  
  }



}
