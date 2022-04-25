import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'home', component: HomeComponent },

  { path: 'favorites', component: FavoritesComponent },
  {path: 'addBook', component: AddBookComponent},
  {
    path: 'catalog',
    component: CatalogComponent,
    children: [
      {path: '', 
      component: CatalogListComponent,
       pathMatch: 'full'},

      {
        path: 'details/:id',
        component: BookDetailsComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
