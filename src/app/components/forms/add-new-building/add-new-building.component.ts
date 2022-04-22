import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeskRequest} from "../../../interfaces/deskRequest";
import {BuildingRequest} from "../../../interfaces/buildingRequest";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-new-building',
  templateUrl: './add-new-building.component.html',
  styleUrls: ['./add-new-building.component.scss']
})
export class AddNewBuildingComponent {

  @Output() addBuilding: EventEmitter<BuildingRequest> = new EventEmitter<BuildingRequest>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();


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

  constructor() {
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
    this.addBuilding.emit(building)
  }

  ngOnInit(): void {
  }


}
