import { TestBed } from '@angular/core/testing';

import { FloorService } from './floor.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ReservationHistoryService} from "../reservation-history/reservation-history.service";

describe('FloorService', () => {
  let service: FloorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [FloorService, HttpClientTestingModule]
      }
    );
    service = TestBed.inject(FloorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
