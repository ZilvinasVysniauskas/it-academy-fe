import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerokuTestComponent } from './heroku-test.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('HerokuTestComponent', () => {
  let component: HerokuTestComponent;
  let fixture: ComponentFixture<HerokuTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      declarations: [ HerokuTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerokuTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
