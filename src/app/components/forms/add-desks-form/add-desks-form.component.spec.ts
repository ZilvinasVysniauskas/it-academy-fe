import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesksFormComponent } from './add-desks-form.component';

describe('AddDesksFormComponent', () => {
  let component: AddDesksFormComponent;
  let fixture: ComponentFixture<AddDesksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDesksFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
