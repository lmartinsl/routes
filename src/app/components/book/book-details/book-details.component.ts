import { switchMap, tap, map } from 'rxjs/operators';
import { BookService } from './../../../services/book/book.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  public book$: Observable<Book>;
  public authors: string[] = [];
  public index: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.book$ = this.activatedRoute.paramMap
      .pipe(
        tap((params: ParamMap) => this.index = +params.get('index')),
        switchMap((params: ParamMap) => this.bookService.get(+params.get('index'))),
        tap((book: Book) => this.authors = (book) ? book.authors : [])
      )
  }

  public remove(): void {
    this.bookService.remove(this.index)
    this.router.navigateByUrl('books')
  }

  public goAuthors(): void {
    let url = `/books/${this.index}/authors`;
    this.router.navigate([url, { authors: this.authors }])
  }
}
