import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';
@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = sessionStorage.getItem('token');
    if (token === null) {
      this.router.navigate(['login']);
      return false;
    }
    const tokenPayload: Jwttype = decode(token);
    if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

export class Jwttype {
  role: String;
  sub: String;
  iat: String;
  exp: String

  constructor(role: String,
    sub: String,
    iat: String,
    exp: String) {
    this.role = role;
    this.sub = sub;
    this.iat = iat;
    this.exp = exp;
  }
}