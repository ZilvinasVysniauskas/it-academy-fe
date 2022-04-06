import { TestBed } from '@angular/core/testing';
import { HerokuService } from './heroku.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('HerokuService', () => {
  let service: HerokuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HerokuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
