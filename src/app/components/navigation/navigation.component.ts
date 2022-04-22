import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isUserLoggedIn: boolean | undefined;


  constructor(private bookService: BookService,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
      if(this.authenticationService.isUserLoggedIn()){
        this.isUserLoggedIn = true;
      }else{
        this.isUserLoggedIn = false;
      };

  }

  logout(): void {
    this.authenticationService.logout();
    this.isUserLoggedIn = false;
  }

  // test(){
  // this.bookService.addBook().subscribe(
  //   (response) => {
  //     console.log(response);

  //     return response;
  // });

  // }
}
