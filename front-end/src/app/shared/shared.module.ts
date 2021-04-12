import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { UsuarioModule } from '../usuario/usuario.module';
import { BuscarComponent } from './buscar/buscar.component';




@NgModule({
  declarations: [SideMenuComponent, BuscarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    SideMenuComponent,
    BuscarComponent
  ]
})
export class SharedModule { }
