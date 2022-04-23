import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { FormGroup } from "@angular/forms";
import { IUserInterface } from "../interfaces/user.interface";
import { map, Observable, Subject } from "rxjs";
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  isUserLoggedInState: boolean | undefined;

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) { }

  login(formGroup: FormGroup): Observable<IUserInterface> {
    return this.httpClient.post<IUserInterface>('https://murmuring-cliffs-61613.herokuapp.com/auth/login', formGroup.value)
    .pipe(
      map((response) =>{
        this.cookieService.set('token', response.token);
        this.isUserLoggedIn();
        return response;
    })

    );

  }


  isUserLoggedIn(): boolean {
    return this.cookieService.check('token');
  }

  register(formGroup: FormGroup) {
    return this.httpClient.post('https://murmuring-cliffs-61613.herokuapp.com/auth/register', formGroup.value);
  }

  logout() {
    this.cookieService.delete('token');
    this.isUserLoggedIn();
  }


}


