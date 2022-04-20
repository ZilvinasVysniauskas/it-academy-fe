import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeskReservationService} from "../../../service/reservations/desk-reservation.service";
import {DeskRequest} from "../../../interfaces/deskRequest";
import {DeskService} from "../../../service/desks/desk.service";

@Component({
  selector: 'app-adding-desk-dialog',
  templateUrl: './adding-desk-dialog.component.html',
  styleUrls: ['./adding-desk-dialog.component.scss']
})
export class AddingDeskDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { roomId: number },
              public dialogRef: MatDialogRef<AddingDeskDialogComponent>, private deskService: DeskService) {
  }
  ngOnInit(): void {
  }

  addDesk($event: DeskRequest) {
    this.deskService.addNewDesk($event).subscribe(a=> this.dialogRef.close())
  }

  closeForm() {
    this.dialogRef.close();
  }
}
