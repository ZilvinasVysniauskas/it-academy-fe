import {Component, OnInit} from '@angular/core';
import {Room} from "../../interfaces/room";
import {MatDialog} from "@angular/material/dialog";
import {AddingDeskDialogComponent} from "../modals/adding-desk-dialog/adding-desk-dialog.component";
import {DeskService} from "../../service/desks/desk.service";
import {AddRoomDialogComponent} from "../modals/add-room-dialog/add-room-dialog.component";
import {RoomService} from "../../service/rooms/room.service";

@Component({
  selector: 'app-manage-desks',
  templateUrl: './manage-desks.component.html',
  styleUrls: ['./manage-desks.component.scss']
})
export class ManageDesksComponent implements OnInit {

  listOfRooms!: Room[];

  constructor(private deskService: DeskService, private roomService: RoomService, private matDialog: MatDialog) {
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
    this.matDialog.open(AddingDeskDialogComponent, {data: { roomId }})
      .afterClosed()
      .subscribe((result) => {
        this.getDesks();
      });
  }
  addRoom() {
    let floorId = 1
    this.matDialog.open(AddRoomDialogComponent, {data: { floorId }})
      .afterClosed()
      .subscribe((result) => {
        this.getDesks();
      });
  }

  deleteRoom(roomId: number) {
    this.roomService.deleteRoom(roomId).subscribe(a => this.getDesks());
  }
}
