import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeskService} from "../../../service/desks/desk.service";
import {DeskRequest} from "../../../interfaces/deskRequest";
import {RoomService} from "../../../service/rooms/room.service";
import {RoomRequest} from "../../../interfaces/RoomRequest";

@Component({
  selector: 'app-add-room-dialog',
  templateUrl: './add-room-dialog.component.html',
  styleUrls: ['./add-room-dialog.component.scss']
})
export class AddRoomDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { floorId: number },
              public dialogRef: MatDialogRef<AddRoomDialogComponent>, private roomService: RoomService) {
  }
  ngOnInit(): void {
  }

  addRoom($event: RoomRequest) {
    this.roomService.addRoom($event).subscribe(a=> this.dialogRef.close())
  }

  closeForm() {
    this.dialogRef.close();
  }
}
