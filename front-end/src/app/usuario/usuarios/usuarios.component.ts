import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/auth/interfaces/interfaces';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  @Input() usuarios: Usuario[] = [];

  @Input() editar: boolean = false;

  @Input() eliminar: boolean = false;

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';
 

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    });
  }

  //Emite lo que tiebe termino fuera del componente
  buscar() {
    this.onEnter.emit( this.termino );
  }
 //Emite las teclas que se presiono
  teclaPresionada() {
    this.debouncer.next( this.termino );
  }
  
  onRegresar(){
     this.router.navigateByUrl('/dashboard');
  }

    
  onAgregar(){
    this.router.navigateByUrl('usuario/agregar');
 }

  
}
