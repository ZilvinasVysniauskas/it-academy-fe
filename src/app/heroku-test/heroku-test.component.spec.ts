import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerokuTestComponent } from './heroku-test.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";



describe('HerokuTestComponent', () => {
  let component: HerokuTestComponent;
  let fixture: ComponentFixture<HerokuTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerokuTestComponent, HttpClientTestingModule ]
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
