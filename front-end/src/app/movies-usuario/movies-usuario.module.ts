import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AlquilerComponent } from './alquiler/alquiler.component';



@NgModule({
  declarations: [AgregarComponent, MainPageComponent, AlquilerComponent],
  imports: [
    CommonModule
  ]
})
export class MoviesUsuarioModule { }
