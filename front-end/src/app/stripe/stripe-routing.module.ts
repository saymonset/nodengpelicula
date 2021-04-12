import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleArticuloComponent } from './articulo/detalle-articulo.component';
import { ListaArticuloComponent } from './articulo/lista-articulo.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './menu/principal.component';

const routes: Routes = [
  {
    path:'',
    component: PrincipalComponent,
    children: [
      {path: 'inicio', component: PrincipalComponent},
      {path: 'lista', component: ListaArticuloComponent},
      {path: 'detalle/:id', component: DetalleArticuloComponent},
      {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
    ]
  }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StripeRoutingModule { }
