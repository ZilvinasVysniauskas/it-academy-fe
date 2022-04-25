import {Component, OnInit} from '@angular/core';
import {Room} from "../../interfaces/room";
import {MatDialog} from "@angular/material/dialog";
import {DeskService} from "../../service/desks/desk.service";
import {RoomService} from "../../service/rooms/room.service";
import {RoomRequest} from "../../interfaces/RoomRequest";
import {Desk} from "../../interfaces/desk";
import {DeskRequest} from "../../interfaces/deskRequest";
import {Floor} from "../../interfaces/floor";
import {FloorService} from "../../service/floor/floor.service";
import {Building} from "../../interfaces/building";
import {BuildingService} from "../../service/building/building.service";
import {Entities} from "../../enums/entities";
import {BuildingRequest} from "../../interfaces/buildingRequest";
import {FloorRequest} from "../../interfaces/floorRequest";
import {AddNewBuildingComponent} from "../forms/add-new-building/add-new-building.component";
import {AddNewFloorComponent} from "../forms/add-new-floor/add-new-floor.component";
import {AddNewRoomComponent} from "../forms/add-new-room/add-new-room.component";
import {AddDesksFormComponent} from "../forms/add-desks-form/add-desks-form.component";
import {SelectFloorComponent} from "../forms/select-floor/select-floor.component";


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
  selectedBuilding: Building | null;
  display = Entities.BUILDINGS;
  selectedFloor: Floor | null;

  constructor(private deskService: DeskService, private roomService: RoomService, private matDialog: MatDialog,
              private floorService: FloorService, private buildingService: BuildingService) {
    this.selectedRoom = null;
    this.selectedDesk = null
    this.selectedBuilding = null;
    this.selectedFloor = null;
    this.getBuilding();
  }

  getBuilding(): void {
    this.buildingService.getAllBuilding().subscribe(buildings => this.buildings = buildings);
  }

  private getFloors() {
    this.floorService.getFloorsByBuildingId(this.selectedBuilding?.id!).subscribe(floors => this.floors = floors);
  }

  getRooms(): void {
    this.deskService.getRooms(this.selectedFloor!.id).subscribe(desks => {
      this.listOfRooms = desks;
    })
  }

  deleteDesk(id: number): void {
    this.deskService.deleteDesk(id).subscribe(a => this.getRooms());
  }

  ngOnInit(): void {
  }

  addTable(roomId: number) {
    this.matDialog.open(AddDesksFormComponent, {data: {roomId}})
      .afterClosed()
      .subscribe((result) => {
        this.getRooms();
      });
  }

  get Entities() {
    return Entities;
  }

  addRoom() {
    let floorId = this.selectedFloor?.id!;
    this.matDialog.open(AddNewRoomComponent, {data: {floorId}})
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
    const building: BuildingRequest = {
      id: this.selectedBuilding?.id,
      name: $event
    }
    this.buildingService.editBuilding(building).subscribe(a => this.getBuilding())
  }

  changeFloorName($event: string) {
    const floor: FloorRequest = {
      id: this.selectedFloor?.id,
      floorName: $event,
      department: this.selectedFloor?.department!
    }
    this.floorService.editFloor(floor).subscribe(a => this.getFloors())
  }

  selectBuilding(building: Building) {
    this.selectedBuilding = building;
    this.display = Entities.FLOORS;
    this.getFloors()
  }

  selectFloor(floor: Floor) {
    this.selectedFloor = floor;
    this.display = Entities.ROOMS;
    this.deskService.getRooms(floor.id).subscribe(rooms => this.listOfRooms = rooms);
  }

  addNewBuilding() {
    this.matDialog.open(AddNewBuildingComponent)
      .afterClosed()
      .subscribe((result) => {
        this.getBuilding();
      });
  }

  addNewFloor() {
    let buildingId = this.selectedBuilding?.id!;
    this.matDialog.open(AddNewFloorComponent, {data: {buildingId}})
      .afterClosed()
      .subscribe((result) => {
        this.getFloors();
      });
  }

  deleteFloor(floorInject: Floor) {
    let chooseReplacementOnDelete = true;
    let department = floorInject.department;
    this.matDialog.open(SelectFloorComponent, {data: {floorInject, chooseReplacementOnDelete, department}})
      .afterClosed()
      .subscribe((floor) => {
        this.floorService.deleteFloor(floorInject.id, floor.floor.id).subscribe(a => {
            this.getFloors();
          }
        )
      });
  }

  setDeskUnavailable(id: number) {
    this.deskService.setDeskUnavailableById(id).subscribe(a => this.getRooms())
  }

  setDeskAvailable(id: number) {
    this.deskService.setDeskAvailableById(id).subscribe(a => this.getRooms())
  }
}
