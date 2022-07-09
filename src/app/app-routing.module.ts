import { BookAuthorsComponent } from './components/book/book-authors/book-authors.component';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { DvdFormComponent } from './components/dvd/dvd-form/dvd-form.component';
import { DvdDetailsComponent } from './components/dvd/dvd-details/dvd-details.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookComponent } from './components/book/book.component';
import { DvdComponent } from './components/dvd/dvd.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: 'dvds', component: DvdComponent },
  {
    path: 'books', component: BookComponent,
    children: [
      {
        path: ':index', component: BookDetailsComponent,
        children: [
          { path: 'authors', component: BookAuthorsComponent }
        ]
      }
    ]
  },
  {
    path: 'electronics',
    loadChildren: () => import('./modules/electronics/electronics.module').then(m => m.ElectronicsModule)
  },
  { path: 'dvds/new', component: DvdFormComponent },
  { path: 'dvds/:index', component: DvdDetailsComponent },

  { path: '', pathMatch: 'full', redirectTo: 'dvds' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
