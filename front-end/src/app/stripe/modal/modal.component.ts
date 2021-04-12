import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    public activeModal: NgbActiveModal,
    private paymentService: PaymentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  confirmar(id: number): void {
   this.paymentService.confirmar(id).subscribe(
      ({id}) => {
         this.toastrService.success
        ('pago confirmado', 'se ha confirmado el pago con id ' + id, {positionClass: 'toast-top-center', timeOut: 3000});
        // this.activeModal.close(); 
      },
      err => {
        console.log(err);
        this.activeModal.close();
      }
    ); 
  }

  cancelar(id: number): void {
   this.paymentService.cancelar(id).subscribe(
      ({id}) => {
      this.toastrService.success
        ('pago cancelado', 'se ha cancelado el pago con id ' + id, {positionClass: 'toast-top-center', timeOut: 3000}); 
     //   this.activeModal.close();
      }
      ,
      err => {
        console.log(err);
        this.activeModal.close();
      }
    );
 
  }

}
