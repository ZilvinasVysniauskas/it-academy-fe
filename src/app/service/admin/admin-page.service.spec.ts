import { TestBed } from '@angular/core/testing';

import { AdminPageService } from './admin-page.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ReservationHistoryService} from "../reservation-history/reservation-history.service";
import {AuthService} from "../authentification/auth.service";

describe('AdminPageService', () => {
  let service: AdminPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [AdminPageService, HttpClientTestingModule]
      }
    );
    service = TestBed.inject(AdminPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
