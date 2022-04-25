import { TestBed } from '@angular/core/testing';

import { BuildingService } from './building.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ReservationHistoryService} from "../reservation-history/reservation-history.service";

describe('BuildingService', () => {
  let service: BuildingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [BuildingService, HttpClientTestingModule]
      }
    );
    service = TestBed.inject(BuildingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
