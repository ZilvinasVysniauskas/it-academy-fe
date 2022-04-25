import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BuildingRequest} from "../../../interfaces/buildingRequest";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {BuildingService} from "../../../service/building/building.service";

@Component({
  selector: 'app-add-new-building',
  templateUrl: './add-new-building.component.html',
  styleUrls: ['./add-new-building.component.scss']
})
export class AddNewBuildingComponent {

  buildingRequestForm: FormGroup;


  get getName() {
    return this.buildingRequestForm.get('name')
  }
  get getCity() {
    return this.buildingRequestForm.get('city')
  }

  get getStreetName() {
    return this.buildingRequestForm.get('streetName')
  }

  get getBuildingNumber() {
    return this.buildingRequestForm.get('buildingNumber')
  }

  constructor(public dialogRef: MatDialogRef<AddNewBuildingComponent>,
              private buildingService: BuildingService) {
    this.buildingRequestForm = new FormGroup({
        name: new FormControl('', {
          validators:
            [Validators.required]
        }),
        city: new FormControl('', {
          validators:
            [Validators.required]
        }),
        streetName: new FormControl('', {
          validators:
            [Validators.required]
        }),
        buildingNumber: new FormControl('', {
          validators:
            [Validators.required]
        })
      }
    );
  }

  addNewBuilding(): void {
    const building: BuildingRequest = {
      buildingNumber: this.getBuildingNumber?.value!,
      name: this.getName?.value!,
      streetName: this.getStreetName?.value!,
      city: this.getCity?.value!
    }
    this.buildingService.addBuilding(building).subscribe(a=> this.dialogRef.close())
  }

  closeForm() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }


}
