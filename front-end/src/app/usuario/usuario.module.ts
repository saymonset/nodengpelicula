import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { AgregarComponent } from './agregar/agregar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MainPageComponent, AgregarComponent, UsuariosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    UsuarioRoutingModule,
    SharedModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class UsuarioModule { }
