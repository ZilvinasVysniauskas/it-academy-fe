import { TestBed } from '@angular/core/testing';
import { HerokuService } from './heroku.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClientModule} from "@angular/common/http";


describe('HerokuService', () => {
  let service: HerokuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule]
    });
    service = TestBed.inject(HerokuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
