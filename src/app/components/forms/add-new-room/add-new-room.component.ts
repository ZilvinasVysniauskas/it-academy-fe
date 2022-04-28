import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {RoomRequest} from "../../../interfaces/RoomRequest";
import {FormControl, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RoomService} from "../../../service/rooms/room.service";

@Component({
  selector: 'app-add-new-room',
  templateUrl: './add-new-room.component.html',
  styleUrls: ['./add-new-room.component.scss']
})
export class AddNewRoomComponent{

  floorId!: number;

  roomName = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) public data: { floorId: number },
              public dialogRef: MatDialogRef<AddNewRoomComponent>, private roomService: RoomService) {
    this.floorId = data.floorId;
    this.roomName.setValidators(Validators.required)
  }

  addNewRoom(): void {
    const room: RoomRequest = {
      roomName: this.roomName.value,
      floorId: this.floorId
    }
    this.roomService.addRoom(room).subscribe(a=> this.dialogRef.close())
  }

  closeForm() {
    this.dialogRef.close();
  }
}
