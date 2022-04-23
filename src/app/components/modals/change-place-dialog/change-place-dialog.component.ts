import {Component, Inject, OnInit} from '@angular/core';
import {AdminPageService} from "../../../service/admin/admin-page.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Floor} from "../../../interfaces/floor";

@Component({
  selector: 'app-change-place-dialog',
  templateUrl: './change-place-dialog.component.html',
  styleUrls: ['./change-place-dialog.component.scss']
})
export class ChangePlaceDialogComponent implements OnInit {

  floor?: Floor;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { floorInject?: Floor },
    private adminService: AdminPageService, private dialogRef: MatDialogRef<ChangePlaceDialogComponent>) {
  }

  ngOnInit(): void {
  }

  changeSelectedFloor($event: Floor) {
    this.dialogRef.close( {floor: $event})
  }

  closeForm() {
    this.dialogRef.close();
  }
}
