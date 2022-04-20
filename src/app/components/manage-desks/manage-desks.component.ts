import {Component, OnInit} from '@angular/core';
import {Room} from "../../interfaces/room";
import {MatDialog} from "@angular/material/dialog";
import {AddingDeskDialogComponent} from "../modals/adding-desk-dialog/adding-desk-dialog.component";
import {DeskService} from "../../service/desks/desk.service";
import {AddRoomDialogComponent} from "../modals/add-room-dialog/add-room-dialog.component";
import {RoomService} from "../../service/rooms/room.service";
import {RoomRequest} from "../../interfaces/RoomRequest";
import {Desk} from "../../interfaces/desk";
import {DeskRequest} from "../../interfaces/deskRequest";

@Component({
  selector: 'app-manage-desks',
  templateUrl: './manage-desks.component.html',
  styleUrls: ['./manage-desks.component.scss']
})
export class ManageDesksComponent implements OnInit {

  listOfRooms!: Room[];
  selectedRoom: Room | null;
  selectedDesk: Desk | null;

  constructor(private deskService: DeskService, private roomService: RoomService, private matDialog: MatDialog) {
    this.selectedRoom = null;
    this.selectedDesk = null
  }

  getDesks(): void {
    this.deskService.getDesks().subscribe(desks => {
      this.listOfRooms = desks;
    })
  }

  deleteDesk(id: number): void {
    this.deskService.deleteDesk(id).subscribe(a => this.getDesks());
  }

  ngOnInit(): void {
    this.getDesks();
  }

  addTable(roomId: number) {
    this.matDialog.open(AddingDeskDialogComponent, {data: {roomId}})
      .afterClosed()
      .subscribe((result) => {
        this.getDesks();
      });
  }

  addRoom() {
    let floorId = 1
    this.matDialog.open(AddRoomDialogComponent, {data: {floorId}})
      .afterClosed()
      .subscribe((result) => {
        this.getDesks();
      });
  }

  deleteRoom(roomId: number) {
    this.roomService.deleteRoom(roomId).subscribe(a => this.getDesks());
  }

  changeRoomName($event: string) {
    const room: RoomRequest = {
      id: this.selectedRoom?.roomId!,
      roomName: $event
    }
    this.roomService.editRoom(room).subscribe(a => this.getDesks());
  }

  changeDeskName($event: string) {
    const desk: DeskRequest = {
      id: this.selectedDesk!.id,
      deskName: $event,
    }
    this.deskService.editDest(desk).subscribe(a => this.getDesks())
  }
}
