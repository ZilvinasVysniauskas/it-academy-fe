import { TestBed } from '@angular/core/testing';

import { DeskReservationService } from './desk-reservation.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RoomService} from "../rooms/room.service";

describe('DeskReservationService', () => {
  let service: DeskReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [DeskReservationService, HttpClientTestingModule]
      }
    );
    service = TestBed.inject(DeskReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
