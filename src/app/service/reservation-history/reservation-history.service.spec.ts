import { TestBed } from '@angular/core/testing';

import { ReservationHistoryService } from './reservation-history.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DeskReservationService} from "../reservations/desk-reservation.service";

describe('ReservationHistoryService', () => {
  let service: ReservationHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ReservationHistoryService, HttpClientTestingModule]
      }
    );
    service = TestBed.inject(ReservationHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
