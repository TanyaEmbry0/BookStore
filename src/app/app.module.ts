import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CatalogComponent } from './components/catalog/catalog.component';
<<<<<<< HEAD
import { FavoritesComponent } from './components/favorites/favorites.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ErrorComponent } from './components/error/error.component';
import { BookCardComponent } from './components/book-card/book-card.component';
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> 10b695c8e415cf71007b6ca97217677dc6b8ed1f

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent,
    CatalogComponent,
    FavoritesComponent,
    BookDetailsComponent,
    ErrorComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
