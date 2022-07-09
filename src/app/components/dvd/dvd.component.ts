import { Router } from '@angular/router';
import { DvdService } from './../../services/dvd/dvd.service';
import { Dvd } from './../../interfaces/dvd';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.scss']
})
export class DvdComponent implements OnInit {

  public dvds$: Observable<Dvd[]>;

  constructor(
    private dvdService: DvdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dvds$ = this.dvdService.dvds$
  }

  public goDetails(i: number, dvd: Dvd): void {
    this.router.navigate([`dvds/${i}`, { title: dvd.title }])
  }

  public remove(i: number): void {
    this.dvdService.remove(i)
  }

}
