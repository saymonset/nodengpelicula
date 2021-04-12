import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../auth/interfaces/interfaces';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { MoviesService } from '../services/movies.service';
import { IMovie } from '../interfaces/imovies';
 

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
 
  
  @Input() movie: IMovie = {};

  @Output() movieCreated = new EventEmitter<IMovie>();


 
    
  miFormulario: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]] 
  });

   
  


  constructor(private fb: FormBuilder,private router: Router, private service: MoviesService) {
      this.movie = {} as IMovie;
     }


  ngOnInit(): void {
  }


  
  onRegresar(){
    this.router.navigateByUrl('/movies');
 }
  
  
  register(){
    
    const { title, description} = this.miFormulario.value;
     this.service.registro(title, description)
     .subscribe( ok =>{
       if (ok === true){
        this.movieCreated.emit(this.miFormulario.value);
        Swal.fire('Sucess', ok,'info')
         
       }else{
         //Todo Mostrar mensaje de error
         Swal.fire('Error', ok,'error')
       }
     }); 
    }
}
