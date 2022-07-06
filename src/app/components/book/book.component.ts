import { Book } from './../../interfaces/book';
import { Observable } from 'rxjs';
import { BookService } from './../../services/book/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  public books$: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books$ = this.bookService.books$;
  }

}
