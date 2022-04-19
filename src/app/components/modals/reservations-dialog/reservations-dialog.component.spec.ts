import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsDialogComponent } from './reservations-dialog.component';

describe('ReservationsDialogComponent', () => {
  let component: ReservationsDialogComponent;
  let fixture: ComponentFixture<ReservationsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
