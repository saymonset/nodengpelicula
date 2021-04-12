import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from '../interfaces/imovies';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {

 
  @Input() movies: IMovie[] = [];

  
  @Input() editar: boolean = false;

  @Input() eliminar: boolean = false;
 

  constructor(private router: Router) { }

  ngOnInit(): void {

    

  }
  
  onRegresar(){
     this.router.navigateByUrl('/dashboard');
  }

   
   
 onAgregar(){
   this.router.navigateByUrl('movies/agregar');
}


}
