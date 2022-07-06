import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdDetailsComponent } from './dvd-details.component';

describe('DvdDetailsComponent', () => {
  let component: DvdDetailsComponent;
  let fixture: ComponentFixture<DvdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
