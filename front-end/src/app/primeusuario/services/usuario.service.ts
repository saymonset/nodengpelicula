import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { of, Observable } from 'rxjs';

import {  catchError, map, tap} from 'rxjs/operators';
import { RootUsuarios } from '../interfaces/interface';
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

}
