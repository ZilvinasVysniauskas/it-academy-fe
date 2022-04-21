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
import {Floor} from "../../interfaces/floor";
import {FloorService} from "../../service/floor/floor.service";
import {Building} from "../../interfaces/building";
import {BuildingService} from "../../service/building/building.service";
import {Entities} from "../../enums/entities";

@Component({
  selector: 'app-manage-desks',
  templateUrl: './manage-desks.component.html',
  styleUrls: ['./manage-desks.component.scss']
})
export class ManageDesksComponent implements OnInit {

  listOfRooms!: Room[];
  selectedRoom: Room | null;
  selectedDesk: Desk | null;
  buildings?: Building[];
  floors?: Floor[];
  floor!: Floor;
  selectedBuilding: Building | null;
  display = Entities.BUILDINGS;
  selectedFloor: Floor | null;

  constructor(private deskService: DeskService, private roomService: RoomService, private matDialog: MatDialog,
              private floorService: FloorService, buildingService: BuildingService) {
    this.selectedRoom = null;
    this.selectedDesk = null
    this.selectedBuilding = null;
    this.selectedFloor = null;
    buildingService.getAllBuilding().subscribe(buildings => this.buildings = buildings);
  }

  getRooms(): void {
    this.deskService.getRooms(this.floor.id).subscribe(desks => {
      this.listOfRooms = desks;
    })
  }

  deleteDesk(id: number): void {
    this.deskService.deleteDesk(id).subscribe(a => this.getRooms());
  }

  ngOnInit(): void {
    this.getRooms();
  }


  addTable(roomId: number) {
    this.matDialog.open(AddingDeskDialogComponent, {data: {roomId}})
      .afterClosed()
      .subscribe((result) => {
        this.getRooms();
      });
  }

  get Entities() {
    return Entities;
  }

  addRoom() {
    let floorId = 1
    this.matDialog.open(AddRoomDialogComponent, {data: {floorId}})
      .afterClosed()
      .subscribe((result) => {
        this.getRooms();
      });
  }

  deleteRoom(roomId: number) {
    this.roomService.deleteRoom(roomId).subscribe(a => this.getRooms());
  }

  changeRoomName($event: string) {
    const room: RoomRequest = {
      id: this.selectedRoom?.roomId!,
      roomName: $event
    }
    this.roomService.editRoom(room).subscribe(a => this.getRooms());
  }

  changeDeskName($event: string) {
    const desk: DeskRequest = {
      id: this.selectedDesk!.id,
      deskName: $event,
    }
    this.deskService.editDest(desk).subscribe(a => this.getRooms())
  }

  changeBuildingName($event: string) {

  }

  selectBuilding(building: Building) {
    this.selectedBuilding = building;
    this.display = Entities.FLOORS;
    this.floorService.getFloorsByBuildingId(building.id).subscribe(floors => this.floors = floors);
  }

  selectFloor(floor: Floor) {
    this.selectedFloor = floor;
    this.display = Entities.ROOMS;
    this.deskService.getRooms(floor.id).subscribe(rooms => this.listOfRooms = rooms);
  }
}
