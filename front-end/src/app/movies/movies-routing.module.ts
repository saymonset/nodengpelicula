import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes : Routes =[
  {
    path:'',
    children:[
            {path:'movies', component: MainPageComponent} ,
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
