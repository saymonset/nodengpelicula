import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interface';
 

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  usuarios : Usuario[] = [];

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.usuarios().subscribe(resp=>{
      this.usuarios =[...resp.usuarios];
    });

  }

}
