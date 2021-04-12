import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {


/**.. Se inicializa el on, Nombre por standar : exampe: onEnter*/
/* Permite emitir el evento y devuelve el tipo que sta procesando
/* Tipo EventEmitter.. El tipo de EventEmitter tipo string o
puede ser un objeto si se desea */
@Output() onEnter   : EventEmitter<string> = new EventEmitter();

/* Emitimos un string ... Se emite cuando la persona deja de escribir */
@Output() onDebounce: EventEmitter<string> = new EventEmitter();

/* Recibimos el placeHolder del quien llama al componente */
@Input() placeholder: string = '';
/* Subject ...Creamos un observable llamado debouncer manualmente tipo string... ES de rxjs..
*/
debouncer: Subject<string> = new Subject();

termino: string = '';

ngOnInit() {
  /* Se disparauna sola vez */
  /* this.debouncer, Nos suscribimos a los valores que emite con el suscribe*/
  /* Me suscribo a su valor */
  this.debouncer
    /* Operadores rx.. Pipe permite transformar
    la salida de este suscribe  */
    /* debounceTime es  un operador rxjs y le decimos que 
    espere 300 milesimas de segundos para recibir un suscribe*/
    .pipe(debounceTime(300))
    .subscribe( valor => {
    /* Emitimos el valor que proporciona con next el metodo teclaPresionada() */
      this.onDebounce.emit( valor );
    });
}

buscar() {
  this.onEnter.emit( this.termino );
}

teclaPresionada() {
  /* LLamamos  debouncer que es un observable y emitimos el valor de entrada
   */
  /* Se dispara el .suscribe que esta en el ngOnInit y se emite el valor */
  this.debouncer.next( this.termino );
}

/* teclaPresionada(event: any) {
  const valor = event.target.value;
  console.log(valor);
  this.debouncer.next( this.termino );
}
 */

}
