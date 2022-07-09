import { ElectronicService } from './../../services/electronic/electronic.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Electronic } from 'src/app/interfaces/electronic';

@Component({
  selector: 'app-electronic-list',
  templateUrl: './electronic-list.component.html',
  styleUrls: ['./electronic-list.component.scss']
})
export class ElectronicListComponent implements OnInit {

  public electronics$: Observable<Electronic[]>;

  constructor(
    private electronicService: ElectronicService
  ) { }

  ngOnInit(): void {
    this.electronics$ = this.electronicService.electronic$;
  }

}
