import { DvdDetailsComponent } from './components/dvd/dvd-details/dvd-details.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookComponent } from './components/book/book.component';
import { DvdComponent } from './components/dvd/dvd.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: 'dvds', component: DvdComponent },
  { path: 'books', component: BookComponent },
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
