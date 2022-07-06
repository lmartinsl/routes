import { Dvd } from './../../../interfaces/dvd';
import { Observable } from 'rxjs';
import { DvdService } from './../../../services/dvd/dvd.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dvd-details',
  templateUrl: './dvd-details.component.html',
  styleUrls: ['./dvd-details.component.scss']
})
export class DvdDetailsComponent implements OnInit {

  public dvd$: Observable<Dvd>
  public title: string = null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dvdService: DvdService
  ) { }

  ngOnInit(): void {

    let index: number = +this.route.snapshot.paramMap.get('index')
    this.dvd$ = this.dvdService.get(index)
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        if (params.has('title')) {
          this.title = params.get('title')
        }
      })

    /* this.route.paramMap
      .subscribe((params: ParamMap) => console.log(params.get('index'))) */
  }

  public goBack(): void {
    this.router.navigate(['/dvds'])
  }

}
