import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdimAddUserComponent } from './adim-add-user.component';

describe('AdimAddUserComponent', () => {
  let component: AdimAddUserComponent;
  let fixture: ComponentFixture<AdimAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdimAddUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdimAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
