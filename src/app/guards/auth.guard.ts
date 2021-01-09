// Import modules
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs";

// Import >> Auth service <<
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | Observable<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this.authService.user.subscribe(
        user => {
          if (user) {
            return resolve(true);
          } else {
            this.router.navigate(["/login"]);
            return resolve(false);
          }
        },

        err => {
          return reject(err);
        }
      )
    });
  }
}
