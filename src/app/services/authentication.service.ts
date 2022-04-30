import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { IUserInterface } from '../interfaces/user.interface';
import {
 Observable,
  ReplaySubject,
 tap,
} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // private durationTimer: any;
  //purpose of Replay subj is to have initial value of null wihout errors..
  private currentUser = new ReplaySubject<IUserInterface | null>(1);
  currentUser$ = this.currentUser.asObservable();
  
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  //method that defines user
  handleCurrentUser(email: string, token: string, id: string) {
    const user: IUserInterface = { email, token, userId: id };
    if (user) {
      this.cookieService.set('token', token);
      this.cookieService.set('id', id);
      this.cookieService.set('email', email);
      this.currentUser.next(user);
    }
  }

  login(formGroup: FormGroup): Observable<IUserInterface> {
    return this.httpClient
      .post<IUserInterface>(
        'https://murmuring-cliffs-61613.herokuapp.com/auth/login',
        formGroup.value
      )
      .pipe(
        tap((responseData) => {
          this.handleCurrentUser(
            responseData.email,
            responseData.token,
            responseData.userId
          );
        })
      );
  }

  // login(formGroup: FormGroup): Observable<IUserInterface> {
  //   return this.httpClient
  //     .post<IUserInterface>(
  //       'https://murmuring-cliffs-61613.herokuapp.com/auth/login',
  //       formGroup.value
  //     )
  //     .pipe(
  //       map((response) => {
  //         this.cookieService.set('token', response.token);
  //         this.cookieService.set('id', response.userId);
  //         this.isUserLoggedIn();
  //         return response;
  //       })
  //     );
  // }
  get isLoggedIn(): boolean {
    let authToken = this.cookieService.get('access_token');
    return authToken !== null ? true : false;
  }

  isUserLoggedIn(): boolean {
    return this.cookieService.check('token');
  }

  register(formGroup: FormGroup) {
    return this.httpClient.post(
      'https://murmuring-cliffs-61613.herokuapp.com/auth/register',
      formGroup.value
    );
  }

  logout() {
    this.cookieService.delete('token');
    this.cookieService.delete('email');
    this.cookieService.delete('id');
    this.isUserLoggedIn();
    this.currentUser.next(null);
    // if(this.durationTimer){
    //   clearTimeout(this.durationTimer);
    //   this.durationTimer=null;
    // }
  }

  getUserId(): string {
    return this.cookieService.get('id');
  }
  
  getUserToken(): string {
    return this.cookieService.get('token');
  }
  
//   autoLogout(duration: number){
//     console.log(duration)
//    this.durationTimer= setTimeout(() => {
//   this.logout()
// }, duration);
//   }
}
