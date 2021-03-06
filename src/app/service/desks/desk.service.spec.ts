import { TestBed } from '@angular/core/testing';

import { DeskService } from './desk.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ReservationService} from "../reservation-history/reservation.service";

describe('DeskService', () => {
  let service: DeskService;



  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [DeskService, HttpClientTestingModule]
      }
    );
    service = TestBed.inject(DeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
