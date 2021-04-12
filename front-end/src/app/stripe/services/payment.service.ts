import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PaymentIntentLocal } from '../interfaces/interface';
import { PaymentIntentDto } from '../model/payment-intent-dto';


const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  stripeURL = 'http://localhost:8080/stripe/';

  /* 
    articuloURL = 'http://localhost:8080/articulo/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Articulo[]> {
    return this.httpClient.get<Articulo[]>(this.articuloURL + 'lista', cabecera);
  }
  */

  constructor(private httpClient: HttpClient) {}

  public pagar(paymentIntentDto: PaymentIntentDto): Observable<PaymentIntentLocal> {

   
    console.log('----------1------------------------------', JSON.stringify(paymentIntentDto))
    console.log({paymentIntentDto});
    console.log('----------2------------------------------')
    //return of("");
    return this.httpClient.post<PaymentIntentLocal>(this.stripeURL + 'paymentintent', 
    JSON.stringify(paymentIntentDto), cabecera);
  }

  public confirmar(id: number): Observable<PaymentIntentLocal> {
    return this.httpClient.post<PaymentIntentLocal>(this.stripeURL + `confirm/${id}`, {}, cabecera);
  }

  public cancelar(id: number): Observable<PaymentIntentLocal> {
    return this.httpClient.post<PaymentIntentLocal>(this.stripeURL + `cancel/${id}`, {}, cabecera);
  }
}
