import { map } from 'rxjs/operators';
import { Electronic } from './../../interfaces/electronic';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {

  public electronicSubject$: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([]);
  public electronic$ = this.electronicSubject$.asObservable();

  constructor(

  ) {
    timer(1000)
      .subscribe(() => {
        this.electronicSubject$.next([
          { name: 'name 1', brand: 'brand 1', price: 200, description: 'description 1' },
          { name: 'name 2', brand: 'brand 2', price: 300, description: 'description 2' },
          { name: 'name 3', brand: 'brand 3', price: 500, description: 'description 3' },
          { name: 'name 4', brand: 'brand 4', price: 700, description: 'description 4' }
        ])
      })
  }

  public get(i: number): Observable<Electronic> {
    return this.electronic$
      .pipe(
        map((eletronics) => (i >= 0 && i < eletronics.length) ? eletronics[i] : null)
      )
  }
}
