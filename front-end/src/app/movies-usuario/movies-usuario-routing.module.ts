import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { MainPageComponent } from './main-page/main-page.component';



const routes: Routes = [
  {
    path:'',
    component: MainPageComponent,
    children:[
            {path:'agregar/:email', component: AgregarComponent},
            {path:'**', redirectTo: ''},
    ]  
  }
];


 



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesUsuarioRoutingModule { }
