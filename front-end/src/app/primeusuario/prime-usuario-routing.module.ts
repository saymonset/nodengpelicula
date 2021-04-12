import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';


const rutas: Routes = [
  {
    path: '',
    /* Este HomeComponent es la ruta Padre */
    /* Las rutas hijas son los children y para ser llamados las rutas hijas,necesita
    llamar el <router-outlet></router-outlet>.. Si no se coloca , No trabajara */
   // component: HomeComponent,
    children: [
      { path: 'HomeComponent', component: HomeComponent },
      { path: 'listar', component: ListarComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: UsuarioComponent },
      { path: '**', redirectTo: 'HomeComponent' }


 
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
     /* No olvidar de exportar el RouterModule */
     RouterModule
  ]
})
export class PrimeUsuarioRoutingModule { }
