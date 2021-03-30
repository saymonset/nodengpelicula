import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router: Router){}

  canActivate( ): Observable<boolean>  | boolean  {
    console.log('CanActivate')
    return this.authService.validarToken()
    .pipe(
      tap( valid =>{
          if (!valid){
            this.router.navigateByUrl('/auth');
          }
      })
    )
  }
  canLoad( ): Observable<boolean> | boolean  {
    console.log('CanLoad')
    return this.authService.validarToken()
    .pipe(
      tap( valid =>{
          if (!valid){
            this.router.navigateByUrl('/auth');
          }
      })
    )
  }
}
