import { AuthService } from 'src/app/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private AuthService: AuthService, private router: Router){}
  canActivate(): Observable<boolean> {
    return this.AuthService.isAuthenticated().pipe(
      take(1),
      tap(isAuth => {
        if (!isAuth) {
          this.router.navigate(['']);
        }
      })
    );
  }

}
