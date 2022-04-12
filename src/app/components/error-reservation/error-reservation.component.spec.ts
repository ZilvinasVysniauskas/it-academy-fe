import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorReservationComponent } from './error-reservation.component';

describe('ErrorReservationComponent', () => {
  let component: ErrorReservationComponent;
  let fixture: ComponentFixture<ErrorReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
