import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("paso por el interceptor")
    const token = sessionStorage.getItem("token")
    if (token) {
      const authReq = req.clone({
        headers: req.headers.set(
          'Authorization', `Token token=${token}`
        )
      })
      return next.handle(authReq)
    }
    return next.handle(req)
  }
}
