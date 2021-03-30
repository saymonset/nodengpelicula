import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { MainPageComponent } from './usuario/main-page/main-page.component';

const routes: Routes = [

  /***En el modulo de rutas principal, voy a definir mis rutas hijas */
    {
      /**Cuando presionen auth.. Se carga el modulo de auth */
      path: 'auth',
      loadChildren: () => import ('./auth/auth.module').then( m => m.AuthModule)
    },
   
    {
      /**Cuando presionen auth.. Se carga el modulo de auth */
      path: 'movies',
      loadChildren: () => import ('./movies/movies.module').then( m => m.MoviesModule)
    },
    {
      /**Cuando presionen auth.. Se carga el modulo de auth */
      path: 'usuario',
      loadChildren: () => import ('./usuario/usuario.module').then( m => m.UsuarioModule)
    },
    {
      /**Cuando presionen dashboard.. Se carga el modulo de dashboard */
      path: 'dashboard',
      loadChildren: () => import ('./protected/protected.module').then( m => m.ProtectedModule),
      canActivate:  [ ValidarTokenGuard],
      canLoad:[ ValidarTokenGuard ]
    },
    {
      /**Cuando presionen cualquier ruta no definida*/
      path: '**',
      redirectTo:'auth'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
