import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { of, Observable } from 'rxjs';

import {  catchError, map, tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario ;

  get usuario(){
           return {...this._usuario}
  }

  constructor(private http: HttpClient) { }

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

  login(email: string, password:string){
      
        const url = `${this.baseUrl}/auth`
        const body = {email, password}
        return this.http.post<AuthResponse>(url, body)
         .pipe(
           //Muta la respyuesta
           tap ( resp => {
              if (resp.ok){
                localStorage.setItem('token',resp.token!);
              }
             console.log(resp)
           } ),
           map( resp => resp.ok),
           catchError (err => of(err.error.msg))
         )
  }


 

  validarToken():Observable<any>{

    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );

      return this.http.get<AuthResponse>( url, { headers } )
      .pipe(
        map ( resp => {

          localStorage.setItem('token',resp.token!);
          this._usuario = {
            name: resp.name!,
            uid: resp.uid!,
            email: resp.email!
          }

           return resp.ok;
        } ),
        catchError (err => of(false))
      )

  }

  logout(){
    localStorage.clear();
  }


}
