import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {BuildingRequest} from "../../../interfaces/buildingRequest";
import {FloorRequest} from "../../../interfaces/floorRequest";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FloorService} from "../../../service/floor/floor.service";

@Component({
  selector: 'app-add-new-floor',
  templateUrl: './add-new-floor.component.html',
  styleUrls: ['./add-new-floor.component.scss']
})
export class AddNewFloorComponent {

  buildingId!: number;

  floorRequestForm: FormGroup;
  departments = [
    'SALES', 'MARKETING', 'DEVELOPERS', 'MANAGEMENT'
  ]
  get getFloorNumber() {
    return this.floorRequestForm.get('number')
  }

  get getFloorName() {
    return this.floorRequestForm.get('name')
  }

  get getFloorDepartment() {
    return this.floorRequestForm.get('department')
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { buildingId: number },
    public dialogRef: MatDialogRef<AddNewFloorComponent>, private floorService: FloorService) {
    this.buildingId = data.buildingId;
    this.floorRequestForm = new FormGroup({
        name: new FormControl('', {
          validators:
            [Validators.required]
        }),
        number: new FormControl('', {
          validators:
            [Validators.required]
        }),
        department: new FormControl('', {
          validators:
            [Validators.required]
        })
      }
    );
  }

  closeForm() {
    this.dialogRef.close();
  }

  addNewFloor(): void {
    const floor: FloorRequest = {
      floorName: this.getFloorName?.value!,
      floorNumber: this.getFloorNumber?.value!,
      buildingId: this.buildingId,
      department: this.getFloorDepartment?.value!
    }
    this.floorService.addFloor(floor).subscribe(a => this.dialogRef.close())
  }


}
