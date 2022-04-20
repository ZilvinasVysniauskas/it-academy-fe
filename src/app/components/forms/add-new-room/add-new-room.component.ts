import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomRequest} from "../../../interfaces/RoomRequest";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-new-room',
  templateUrl: './add-new-room.component.html',
  styleUrls: ['./add-new-room.component.scss']
})
export class AddNewRoomComponent{

  @Input() floorId!: number;
  @Output() addRoom: EventEmitter<RoomRequest> = new EventEmitter<RoomRequest>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  roomName = new FormControl();

  constructor() { }

  addNewRoom(): void {
    const room: RoomRequest = {
      roomName: this.roomName.value,
      floorId: this.floorId
    }
    this.addRoom.emit(room)
  }


}
