import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {BuildingRequest} from "../../../interfaces/buildingRequest";
import {FloorRequest} from "../../../interfaces/floorRequest";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FloorService} from "../../../service/floor/floor.service";

import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-add-new-floor',
  templateUrl: './add-new-floor.component.html',
  styleUrls: ['./add-new-floor.component.scss']
})
export class AddNewFloorComponent {

  buildingId!: number;

  floorRequestForm: FormGroup;

  departments = [
    'SALES', 'MARKETING', 'DEVELOPERS', 'MANAGEMENT', 'JOINED'
  ]

  selectedFile?: any;
  imgURL!:  any;


  get getFloorNumber() {
    return this.floorRequestForm.get('number')
  }

  get getFloorName() {
    return this.floorRequestForm.get('name')
  }
  get getFloorPlan() {
    return this.floorRequestForm.get('plan')
  }

  get getFloorDepartment() {
    return this.floorRequestForm.get('department')
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { buildingId: number },
    public dialogRef: MatDialogRef<AddNewFloorComponent>, private floorService: FloorService,
    private httpClient: HttpClient) {
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
        }),
        plan: new FormControl('')
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
      department: this.getFloorDepartment?.value!,
    }

    const uploadData = new FormData();
    uploadData.append("myFile", this.selectedFile, this.selectedFile.name)
    uploadData.set("floorName", this.getFloorName?.value!)
    uploadData.set("floorNumber", this.getFloorNumber?.value!)
    uploadData.set("buildingId", this.buildingId.toString())
    uploadData.set("department", this.getFloorDepartment?.value)
    this.floorService.addFloor(uploadData).subscribe(a => {
      this.closeForm();
    });

  }

  onFileUpload(event: any){
    this.selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    }
  }

}
