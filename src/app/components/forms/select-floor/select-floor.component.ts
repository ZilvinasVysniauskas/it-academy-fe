import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {BuildingService} from "../../../service/building/building.service";
import {FloorService} from "../../../service/floor/floor.service";
import {Building} from "../../../interfaces/building";
import {Floor} from "../../../interfaces/floor";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdminPageService} from "../../../service/admin/admin-page.service";

@Component({
  selector: 'app-select-floor',
  templateUrl: './select-floor.component.html',
  styleUrls: ['./select-floor.component.scss']
})
export class SelectFloorComponent implements OnInit {

  buildings!: Building[];
  currentBuilding?: Building;
  currentFloors?: Floor[];
  currentFloor?: Floor;
  selectFloorForm: FormGroup;
  chooseReplacementOnDelete: boolean;
  floor?: Floor;
  isAddNewUserForm: boolean;
  department?: string;

  get getBuilding() {
    return this.selectFloorForm.get('building')
  }

  get getFloor() {
    return this.selectFloorForm.get('floor')
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { floorInject: Floor, chooseReplacementOnDelete: boolean, department: string },
    private adminService: AdminPageService, private dialogRef: MatDialogRef<SelectFloorComponent>,
    private buildingService: BuildingService,
    private floorService: FloorService) {
    this.isAddNewUserForm = data.floorInject == undefined;
    this.floor = data.floorInject;
    this.department = data.department;
    this.chooseReplacementOnDelete = data.chooseReplacementOnDelete;
    buildingService.getAllBuilding().subscribe(a => this.buildings = a);
    this.selectFloorForm = new FormGroup({
      building: new FormControl('', {validators:
          [Validators.required]
      }),
      floor: new FormControl('', {validators:
          [Validators.required]
      })
    });
  }

  changeCurrentBuilding() {
    this.currentBuilding = this.getBuilding?.value!;
    this.floorService.getFloorsByBuildingId(this.currentBuilding!.id)
      .subscribe(floors => {
        if (this.chooseReplacementOnDelete) {
          this.currentFloors = floors.filter(floor => floor.floorName !== this.floor?.floorName);
        } else {
          this.currentFloors = floors
        }
      });
  }

  changeCurrentFloor() {
    this.currentFloor = this.getFloor?.value!;
  }

  changeFloor() {
    this.dialogRef.close({floor: this.currentFloor})
  }

  closeForm() {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

  validateFloor(floor: Floor): boolean {
    if (floor.department !== this.department) {
      if (this.chooseReplacementOnDelete) {
        return true;
      }
      return floor.department != 'JOINED';
    }
    return false;
  }
}
