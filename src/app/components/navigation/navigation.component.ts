import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BookService } from 'src/app/services/book.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isUserLoggedIn: boolean  = false;


  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
      this.checkUserLoggedIn();
  }
  checkUserLoggedIn(): void {
    if(this.authenticationService.isUserLoggedIn()){
      this.isUserLoggedIn = true;
    }else{
      this.isUserLoggedIn = false;
    };
  }

  logout(): void {
    this.authenticationService.logout();
    this.isUserLoggedIn = false;
    this.router.navigate(['/home']);
  }

  // test(){
  // this.bookService.addBook().subscribe(
  //   (response) => {
  //     console.log(response);

  //     return response;
  // });

  // }
}
