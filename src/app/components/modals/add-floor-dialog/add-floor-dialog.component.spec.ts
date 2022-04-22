import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFloorDialogComponent } from './add-floor-dialog.component';

describe('AddFloorDialogComponent', () => {
  let component: AddFloorDialogComponent;
  let fixture: ComponentFixture<AddFloorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFloorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFloorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
