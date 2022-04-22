import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BuildingRequest} from "../../../interfaces/buildingRequest";
import {FloorRequest} from "../../../interfaces/floorRequest";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-new-floor',
  templateUrl: './add-new-floor.component.html',
  styleUrls: ['./add-new-floor.component.scss']
})
export class AddNewFloorComponent {

  @Input() buildingId!: number;
  @Output() addFloor: EventEmitter<FloorRequest> = new EventEmitter<FloorRequest>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();


  floorRequestForm: FormGroup;

  get getFloorNumber() {
    return this.floorRequestForm.get('number')
  }
  get getFloorName() {
    return this.floorRequestForm.get('name')
  }

  constructor() {
    this.floorRequestForm = new FormGroup({
        name: new FormControl('', {
          validators:
            [Validators.required]
        }),
        number: new FormControl('', {
          validators:
            [Validators.required]
        })
      }
    );
  }

  addNewFloor(): void {
    const floor: FloorRequest = {
      floorName: this.getFloorName?.value!,
      floorNumber: this.getFloorNumber?.value!,
      buildingId: this.buildingId
    }
    this.addFloor.emit(floor)
  }


}
