import { tap, map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-authors',
  templateUrl: './book-authors.component.html',
  styleUrls: ['./book-authors.component.scss']
})
export class BookAuthorsComponent implements OnInit {

  public authors$: Observable<string[]>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.authors$ = this.activatedRoute.paramMap
      .pipe(
        map((params: ParamMap) => params.get('authors').split(','))
      )
  }

}
