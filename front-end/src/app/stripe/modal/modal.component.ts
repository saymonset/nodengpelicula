import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() id: number = 0;
  @Input() nombre: string = '';
  @Input() descripcion: string = '';
  @Input() precio:number = 0;

    // UI
    cargando: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private paymentService: PaymentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  confirmar(id: number): void {
    this.cargando = true;
   this.paymentService.confirmar(id)
   .pipe(
    /* Con el pipe me permite Disparar efectos secundarios con
     el operador tap */
    /* El tap recibe la region .. Pero como no me interesa... Coloco un _ o
    cuaquier nombre 
    ( _ ) Es una nomenclatura standar de que no me interesa
    */
    tap( ( _ ) => {
      /* Aqui seteo las variables que me interesan o sus campos */
      /* Con el reset ponemos el campo a pristine */
     
    }) 
  )
   .subscribe(
      ({id}) => {
         this.toastrService.success
        ('pago confirmado', 'se ha confirmado el pago con id ' + id, {positionClass: 'toast-top-center', timeOut: 3000});
        this.cargando = false;
        this.activeModal.close(); 
      },
      err => {
        console.log(err);
        this.cargando = false;
        this.activeModal.close(); 

      }
    ); 
  }

  cancelar(id: number): void {
    this.cargando = true;
              this.paymentService.cancelar(id)
              .pipe(
                /* Con el pipe me permite Disparar efectos secundarios con
                el operador tap */
                /* El tap recibe la region .. Pero como no me interesa... Coloco un _ o
                cuaquier nombre 
                ( _ ) Es una nomenclatura standar de que no me interesa
                */
                tap( ( _ ) => {
                  /* Aqui seteo las variables que me interesan o sus campos */
                  /* Con el reset ponemos el campo a pristine */
                  
                }) 
              )
              .subscribe(
                  ({id}) => {
                  this.toastrService.success
                    ('pago cancelado', 'se ha cancelado el pago con id ' + id, {positionClass: 'toast-top-center', timeOut: 3000}); 
                    this.cargando = false;
                    this.activeModal.close(); 

                  }
                  ,
                  err => {
                    console.log(err);
                    this.cargando = false;
                    this.activeModal.close(); 

                  }
              );
  }

}
