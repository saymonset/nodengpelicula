import { Resp } from './../interfaces/imovies';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { of, Observable } from 'rxjs';

import {  catchError, map, tap} from 'rxjs/operators';
import { IMovie, IMovies } from '../interfaces/imovies';
import { RootUsuarios } from 'src/app/auth/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = environment.baseUrl;
   
  constructor(private http: HttpClient) {
    
   }

 

  movies():Observable<IMovies>{
    const url = `${ this.baseUrl }/movie`;
      return this.http.get<IMovies>( url);
  }
 



  registro (title:string, description:string){
 
    const url = `${this.baseUrl}/movie/new`
    const body = {title, description}
    console.log('-------------------'+body)
    return this.http.post<Resp>(url, body)
     .pipe(
       //Muta la respyuesta
       tap ( resp => {
       } ),
       map( resp => resp.ok),
       catchError (err => of(err.error.msg))
     )
}
 

  
}
