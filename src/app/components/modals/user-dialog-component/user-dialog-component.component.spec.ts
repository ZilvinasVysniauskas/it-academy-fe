import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogComponentComponent } from './user-dialog-component.component';

describe('UserDialogComponentComponent', () => {
  let component: UserDialogComponentComponent;
  let fixture: ComponentFixture<UserDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDialogComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});