import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { EmptyExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage.getItem('email') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          'Authorization': sessionStorage.getItem('token') as string,
        }
      });
    }
    return next.handle(req).pipe(catchError(err=>this.handleAuthError(err)));
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if(err.status === 401 || err.status === 403){
      this.router.navigate(['login']);
      return new Observable<any>();
    }
    return throwError(()=>new Error('NOT 403 AND NOT 401'));
  }
}
