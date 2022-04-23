import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ErrorComponent } from './components/error/error.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptors } from './interceptors/auth.interceptors';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent,
    CatalogComponent,
    FavoritesComponent,
    BookDetailsComponent,
    ErrorComponent,
    BookCardComponent,
    NavigationComponent,
    CatalogListComponent,
    DropdownDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptors, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
