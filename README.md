<!-- TODO -->
COMPONENTS
- header (nav - catalog,// logIn, register, // add-book, favourites, logOut)
- footer
- pages
  - home
  - catalog
    - details
  - my favourite books
  - 

- log in
- register 
- error-component ?
- add-book
- card-book

SERVICES

PIPES

INTERFACES
  - cardBook
  data from back-end: 
  "_id": "",
        "title": "",
        "author": "",
        "genre": "",
        "description": "",
        "imageUrl": "",
        "likes": [],
        "addedBy": "",
        "comments": [],
        "__v": 12

BACK-END: 
GET ALL BOOKS :GET https://murmuring-cliffs-61613.herokuapp.com/books;
GET SINGLE BOOK : GET https://murmuring-cliffs-61613.herokuapp.com/books/61c1d50a1168b32c49c0c32c

REGISTER:  POST https://murmuring-cliffs-61613.herokuapp.com/auth/register
-body: {"email": "desinkata@abv.bg", "password": "123456", "rePass": "123456"}
-pattern: email: /[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]+/g
-pattern password: type: String,
    minlength: [4, "password must be minimum 4 characters long"],
    required: [true, "Password is required!"],

LOGIN: POST https://murmuring-cliffs-61613.herokuapp.com/auth/login
-body: {"email": "desinkata@abv.bg", "password": "123456" }  


CREATE BOOK: https://murmuring-cliffs-61613.herokuapp.com/books/create
-https pattern for image: /^https?/


# BookStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


