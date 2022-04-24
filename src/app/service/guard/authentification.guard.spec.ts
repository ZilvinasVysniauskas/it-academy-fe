import { TestBed } from '@angular/core/testing';

import { AuthentificationGuard } from './authentification.guard';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ReservationHistoryService} from "../reservation-history/reservation-history.service";
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
