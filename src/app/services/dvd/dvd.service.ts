import { map, delay } from 'rxjs/operators';
import { Dvd } from './../../interfaces/dvd';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  public dvdSubject$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([])
  public dvds$ = this.dvdSubject$.asObservable()

  constructor() {
    timer(1500)
      .subscribe(() => {

        this.dvdSubject$.next([
          { title: 'DVD 1', year: 1998, genre: 'Music' },
          { title: 'DVD 2', year: 2000, genre: 'Movie' },
          { title: 'DVD 3', year: 2005, genre: 'Serie' },
        ])
      })
  }

  public add(d: Dvd): void {
    let dvds = this.dvdSubject$.getValue()
    dvds.push(d)
  }

  public remove(i: number): void {
    let dvds = this.dvdSubject$.getValue()
    if (i >= 0 && i < dvds.length) {
      dvds.splice(i, 1)
    }
  }

  public get(i: number): Observable<Dvd> {
    return this.dvds$
      .pipe(
        map(dvds => (i >= 0 && i < dvds.length) ? dvds[i] : null),
        delay(1000)
      )
  }
}
