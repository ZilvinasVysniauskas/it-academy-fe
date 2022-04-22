import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FloorRequest} from "../../../interfaces/floorRequest";
import {FloorService} from "../../../service/floor/floor.service";

@Component({
  selector: 'app-add-floor-dialog',
  templateUrl: './add-floor-dialog.component.html',
  styleUrls: ['./add-floor-dialog.component.scss']
})
export class AddFloorDialogComponent {

  buildingId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { buildingId: number },
    public dialogRef: MatDialogRef<AddFloorDialogComponent>, private floorService: FloorService) {
    this.buildingId = data.buildingId;
  }

  addFloor($event: FloorRequest) {
    this.floorService.addFloor($event).subscribe(a => this.dialogRef.close())
  }

  closeForm() {
    this.dialogRef.close();
  }
}
