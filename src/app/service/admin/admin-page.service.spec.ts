import { TestBed } from '@angular/core/testing';

import { AdminPageService } from './admin-page.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ReservationService} from "../reservation-history/reservation.service";
import {AuthService} from "../authentification/auth.service";
import {HttpClient} from "@angular/common/http";

describe('AdminPageService', () => {
  let service: AdminPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [AdminPageService, HttpClientTestingModule, HttpClient]
      }
    );
    service = TestBed.inject(AdminPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
