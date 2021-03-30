import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AgregarComponent, MainPageComponent, MoviesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MoviesRoutingModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class MoviesModule { }
