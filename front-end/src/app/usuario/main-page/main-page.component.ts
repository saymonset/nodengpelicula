import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/auth/interfaces/interfaces';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {



  termino : string = '';
  hayError: boolean = false;
  usuario: Usuario = {};

  //const { name, email, password} = this.miFormulario.value;
  
  constructor(private usuarioService : UsuarioService) { }

  
  storedUsuarios: Usuario[] = []

  onPostAdded(event: Usuario) {
    this.storedUsuarios.push(event);
  }

  ngOnInit(): void {
    this.usuarioService.usuarios().subscribe(resp=>{
      this.storedUsuarios =[...resp.usuarios];
    });
  
  }

}
