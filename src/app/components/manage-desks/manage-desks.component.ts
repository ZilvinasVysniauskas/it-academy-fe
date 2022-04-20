import { Component, OnInit } from '@angular/core';
import {DeskReservationService} from "../../service/reservations/desk-reservation.service";
import {Room} from "../../interfaces/room";

@Component({
  selector: 'app-manage-desks',
  templateUrl: './manage-desks.component.html',
  styleUrls: ['./manage-desks.component.scss']
})
export class ManageDesksComponent implements OnInit {

  listOfRooms!: Room[];

  constructor(private deskService: DeskReservationService) {
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

  }
}
