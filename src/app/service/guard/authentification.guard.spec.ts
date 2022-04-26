import { TestBed } from '@angular/core/testing';

import { AuthentificationGuard } from './authentification.guard';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ReservationService} from "../reservation-history/reservation.service";
import {RouterTestingModule} from "@angular/router/testing";
import {AuthService} from "../authentification/auth.service";

describe('AuthentificationGuard', () => {
  let guard: AuthentificationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientTestingModule],
        providers: [AuthentificationGuard, AuthService]
      }
    );
  });

  it('should be created', () => {
  });
});
