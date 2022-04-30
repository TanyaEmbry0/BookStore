import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { Observable } from 'rxjs';
// import { exhaustMap, take } from 'rxjs/operators';
// import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})

export class AuthInterceptors implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.cookieService.get('token');

    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    });
    return next.handle(authReq);
  }

}
// export class AuthInterceptors implements HttpInterceptor {
//   constructor(private authServices: AuthenticationService) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     return this.authServices.currentUser$.pipe(
//       take(1),
//       exhaustMap((user) => {
//         if (!user) {
//           return next.handle(req);
//         }
//         const authReq = req.clone({
//           headers: req.headers.set('Authorization', 'Bearer ' + user.token),
//         });
//         return next.handle(authReq);
//       })
//     );
//   }
// }
