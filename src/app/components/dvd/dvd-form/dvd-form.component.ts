import { Router } from '@angular/router';
import { DvdService } from './../../../services/dvd/dvd.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dvd-form',
  templateUrl: './dvd-form.component.html',
  styleUrls: ['./dvd-form.component.scss']
})
export class DvdFormComponent implements OnInit {

  public formDvd: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dvdService: DvdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {

    const { } = Validators

    this.formDvd = this.fb.group({
      'title': [''],
      'year': [0],
      'genre': [0]
    })
  }

  public save(): void {
    this.dvdService.add(this.formDvd.value)
    this.goBack()
  }

  public goBack(): void {
    this.router.navigate(['/dvds'])
  }
}
