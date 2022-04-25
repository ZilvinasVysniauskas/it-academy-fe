import {Component, Inject, OnInit} from '@angular/core';
import {FloorService} from "../../../service/floor/floor.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Notification} from "../../../interfaces/notification";
import {Floor} from "../../../interfaces/floor";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  selectedFile: any;
  floor: Floor;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { floor: Floor },
    private floorService: FloorService, private dialogRef: MatDialogRef<UploadImageComponent>) {
    this.floor = data.floor;
  }

  updateFloorPlan() {
    const uploadData = new FormData();
    uploadData.append("floorPlan", this.selectedFile, this.selectedFile.name)
    uploadData.set("floorId", this.floor.id.toString())
    this.floorService.changeFloorPlan(uploadData).subscribe(a => this.closeDialog());
  }

  onFileUpload(event: any) {
    this.selectedFile = event.target.files[0];
  }

  closeDialog() {
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }

}
