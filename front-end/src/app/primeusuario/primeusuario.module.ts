import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './pages/listar/listar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { PrimeUsuarioRoutingModule } from './prime-usuario-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';



@NgModule({
  declarations: [ListarComponent, AgregarComponent, BuscarComponent, UsuarioComponent, HomeComponent, UsuariosComponent],
  imports: [
    CommonModule,
    PrimeUsuarioRoutingModule,
    PrimeNgModule

  ],
  exports:[
    
  ]
})
export class PrimeusuarioModule { }
