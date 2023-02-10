import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  authenticate(email: string, password: string) {
    return this.http.post<any>("http://localhost:8080/api/v1/auth/authenticate", { email, password }).pipe(
      map(token => {
        sessionStorage.setItem("email", email);
        let tokenStr = "Bearer " + token.token;
        sessionStorage.setItem("token", tokenStr);
        return token;
      })
    );
  }

  register(email: string, password: string, firstName: string, lastName: string) {
    return this.http.post<any>("http://localhost:8080/api/v1/auth/register", { firstName, lastName, email, password }).pipe(
      map(token => {
        sessionStorage.setItem("email", email);
        let tokenStr = "Bearer " + token.token;
        sessionStorage.setItem("token", tokenStr);
        return token;
      })
    );
  }

  demo() {
    return this.http.get("http://localhost:8080/api/v1/demo-controller", { responseType: 'text' });
  }

  logout() {
    return this.http.post<any>("http://localhost:8080/api/v1/logout", sessionStorage.getItem('token')).pipe(
      map(token => {
        sessionStorage.clear();
        return token;
      })
    );
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}


