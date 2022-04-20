import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";1
import {DeskRequest} from "../../../interfaces/deskRequest";

@Component({
  selector: 'app-add-desks-form',
  templateUrl: './add-desks-form.component.html',
  styleUrls: ['./add-desks-form.component.scss']
})
export class AddDesksFormComponent implements OnInit {


  @Input() roomId!: number;
  @Output() addDesk: EventEmitter<DeskRequest> = new EventEmitter<DeskRequest>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  deskName = new FormControl();

  constructor() {}

  addNewDesk(): void {
    const desk: DeskRequest = {
      deskName: this.deskName.value,
      roomId: this.roomId
    }
    this.addDesk.emit(desk)
  }

  ngOnInit(): void {
  }
}
