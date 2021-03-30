import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/auth/interfaces/interfaces';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  @Input() usuarios: Usuario[] = [];
 

  constructor(private router: Router) { }

  ngOnInit(): void {

    

  }
  
  onRegresar(){
     this.router.navigateByUrl('/dashboard');
  }
}
