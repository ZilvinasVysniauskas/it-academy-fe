import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ReservationHistoryService} from "../reservation-history/reservation-history.service";

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [NotificationService, HttpClientTestingModule]
      }
    );
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
