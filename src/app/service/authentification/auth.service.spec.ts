import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ReservationService} from "../reservation-history/reservation.service";
import {RouterTestingModule} from "@angular/router/testing";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: {} },
      ]
      }
    );
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
