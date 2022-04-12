import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSuccessfulComponent } from './reservation-successful.component';

describe('ReservationSuccessfulComponent', () => {
  let component: ReservationSuccessfulComponent;
  let fixture: ComponentFixture<ReservationSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
