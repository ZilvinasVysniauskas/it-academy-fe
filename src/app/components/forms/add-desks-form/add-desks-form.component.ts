import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";1
import {DeskRequest} from "../../../interfaces/deskRequest";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeskService} from "../../../service/desks/desk.service";

@Component({
  selector: 'app-add-desks-form',
  templateUrl: './add-desks-form.component.html',
  styleUrls: ['./add-desks-form.component.scss']
})
export class AddDesksFormComponent {


  roomId!: number;

  deskName = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) public data: { roomId: number },
              public dialogRef: MatDialogRef<AddDesksFormComponent>, private deskService: DeskService) {
    this.roomId = data.roomId;
    this.deskName.setValidators(Validators.required)
  }

  addNewDesk(): void {
    const desk: DeskRequest = {
      deskName: this.deskName.value,
      roomId: this.roomId
    }
    this.deskService.addNewDesk(desk).subscribe(a=> this.dialogRef.close())
  }

  closeForm() {
    this.dialogRef.close();
  }
}
