import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingDeskDialogComponent } from './adding-desk-dialog.component';

describe('AddingDeskDialogComponent', () => {
  let component: AddingDeskDialogComponent;
  let fixture: ComponentFixture<AddingDeskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingDeskDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingDeskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
