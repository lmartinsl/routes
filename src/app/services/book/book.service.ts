import { Injectable } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.bookSubject$.asObservable();

  constructor() {

    timer(600)
      .subscribe(() => {
        this.bookSubject$.next([
          { title: 'Book 1', pages: 200, authors: ['Lucas', 'Larissa'] },
          { title: 'Book 2', pages: 300, authors: ['Jhon', 'Mary'] },
          { title: 'Book 3', pages: 400, authors: ['Louis', 'Emma'] }
        ])
      })
  }

  public add(b: Book): void {
    let books = this.bookSubject$.getValue()
    books.push(b)
  }

  public remove(i: number): void {
    let books = this.bookSubject$.getValue()
    if (i >= 0 && i < books.length) {
      books.splice(i, 1)
    }
  }

  public get(i: number): Observable<Book> {
    return this.books$
      .pipe(
        map(books => (i >= 0 && i < books.length) ? books[i] : null),
        delay(600)
      )
  }

}
