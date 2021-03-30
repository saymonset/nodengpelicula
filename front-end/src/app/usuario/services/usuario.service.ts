import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {  Usuario, RootUsuarios, AuthResponse } from '../../auth/interfaces/interfaces';
import { of, Observable } from 'rxjs';

import {  catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = environment.baseUrl;
   
  constructor(private http: HttpClient) {
    
   }

 

  usuarios():Observable<RootUsuarios>{
    const url = `${ this.baseUrl }/auth`;
      return this.http.get<RootUsuarios>( url);
  }


  registro (name:string, email:string, password:string){
 
    const url = `${this.baseUrl}/auth/new`
    const body = {email, password,name}
    console.log('-------------------'+body)
    return this.http.post<AuthResponse>(url, body)
     .pipe(
       //Muta la respyuesta
       tap ( resp => {
          if (resp.ok){
            localStorage.setItem('token',resp.token!);
          
          }
         
       } ),
       map( resp => resp.ok),
       catchError (err => of(err.error.msg))
     )
}
 

  
}
