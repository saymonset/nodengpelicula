import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AgregarComponent } from './agregar/agregar.component';

const routes : Routes =[
  {
    path:'',
    children:[
            {path:'movies', component: MainPageComponent} ,
            {path:'agregar', component: AgregarComponent} ,
            {path:'**', redirectTo: 'movies'}
    ]
  }
]
 


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
