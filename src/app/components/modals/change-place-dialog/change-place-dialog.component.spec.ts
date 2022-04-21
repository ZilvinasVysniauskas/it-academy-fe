import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePlaceDialogComponent } from './change-place-dialog.component';

describe('ChangePlaceDialogComponent', () => {
  let component: ChangePlaceDialogComponent;
  let fixture: ComponentFixture<ChangePlaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePlaceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePlaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
