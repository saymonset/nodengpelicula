import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { StripeRoutingModule } from './stripe-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';
import { PaymentComponent } from './payment/payment.component';
import { ListaArticuloComponent } from './articulo/lista-articulo.component';
import { DetalleArticuloComponent } from './articulo/detalle-articulo.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
// Import the library
import { NgxStripeModule } from 'ngx-stripe';



import { PrincipalComponent } from './menu/principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MenuComponent, ModalComponent, 
    PaymentComponent, ListaArticuloComponent, DetalleArticuloComponent, PrincipalComponent],
  imports: [
    
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule,
    NgxStripeModule.forChild('pk_test_51Hf9gJH6FU0hzi3Y9Pq5MctFLILmIo1nbJuc2QXNSdHtaUuf2V3XAZzcwdAkTQrZmhbgsc2zoUH1LdQhvaDXVkJO00v8KALJOO'),
    StripeRoutingModule,
    ReactiveFormsModule 
    
    
  ] ,
  entryComponents: [ModalComponent]
})
export class StripeModule { }
