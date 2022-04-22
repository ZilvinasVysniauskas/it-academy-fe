import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BuildingService} from "../../../service/building/building.service";
import {BuildingRequest} from "../../../interfaces/buildingRequest";

@Component({
  selector: 'app-add-building-dialog',
  templateUrl: './add-building-dialog.component.html',
  styleUrls: ['./add-building-dialog.component.scss']
})
export class AddBuildingDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddBuildingDialogComponent>, private buildingService: BuildingService) {
  }
  ngOnInit(): void {
  }

  addBuilding($event: BuildingRequest) {
    this.buildingService.addBuilding($event).subscribe(a=> this.dialogRef.close())
  }

  closeForm() {
    this.dialogRef.close();
  }
}
