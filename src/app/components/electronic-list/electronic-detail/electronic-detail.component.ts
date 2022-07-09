import { ActivatedRoute, Router } from '@angular/router';
import { ElectronicService } from './../../../services/electronic/electronic.service';
import { Electronic } from './../../../interfaces/electronic';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronic-detail',
  templateUrl: './electronic-detail.component.html',
  styleUrls: ['./electronic-detail.component.scss']
})
export class ElectronicDetailComponent implements OnInit {

  public electronic$: Observable<Electronic>

  constructor(
    private electronicService: ElectronicService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let i: number = +this.route.snapshot.paramMap.get('index');
    this.electronic$ = this.electronicService.get(i);
  }

  public back(): void {
    this.router.navigate(['..'], { relativeTo: this.route })
  }

}
