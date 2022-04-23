import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {BuildingService} from "../../../service/building/building.service";
import {FloorService} from "../../../service/floor/floor.service";
import {Building} from "../../../interfaces/building";
import {Floor} from "../../../interfaces/floor";
import {FormControl, FormGroup} from "@angular/forms";
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

  floor?: Floor;

  get getBuilding() {
    return this.selectFloorForm.get('building')
  }

  get getFloor() {
    return this.selectFloorForm.get('floor')
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { floorInject?: Floor },
    private adminService: AdminPageService, private dialogRef: MatDialogRef<SelectFloorComponent>,
    private buildingService: BuildingService,
              private floorService: FloorService) {
    buildingService.getAllBuilding().subscribe(a => this.buildings = a);
    this.selectFloorForm = new FormGroup({
      building: new FormControl(''),
      floor: new FormControl('')
    });
  }

  changeCurrentBuilding() {
    this.currentBuilding = this.getBuilding?.value!;
    this.floorService.getFloorsByBuildingId(this.currentBuilding!.id)
      .subscribe(floors => this.currentFloors = floors.filter(f => f.floorName !== this.floor?.floorName));
    console.log('here')
    console.log(this.currentFloors)
  }

  changeCurrentFloor() {
    this.currentFloor = this.getFloor?.value!;
  }

  changeFloor() {
    this.dialogRef.close( {floor: this.currentFloor})
  }

  closeForm() {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

}
