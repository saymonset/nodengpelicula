import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { MoviesModule } from '../movies/movies.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    UsuarioModule,
    MoviesModule
  ]
})
export class ProtectedModule { }
