import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BuildingRequest} from "../../../interfaces/buildingRequest";
import {FloorRequest} from "../../../interfaces/floorRequest";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-new-floor',
  templateUrl: './add-new-floor.component.html',
  styleUrls: ['./add-new-floor.component.scss']
})
export class AddNewFloorComponent {

  @Input() buildingId!: number;
  @Output() addFloor: EventEmitter<FloorRequest> = new EventEmitter<FloorRequest>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();


  floorRequestForm: FormGroup;
  selectedFile?: File;

  get getFloorNumber() {
    return this.floorRequestForm.get('number')
  }
  get getFloorName() {
    return this.floorRequestForm.get('name')
  }
  get getFloorPlan() {
    return this.floorRequestForm.get('plan')
  }

  constructor(private httpClient: HttpClient) {
    this.floorRequestForm = new FormGroup({
        name: new FormControl('', {
          validators:
            [Validators.required]
        }),
        number: new FormControl('', {
          validators:
            [Validators.required]
        }),
        plan: new FormControl('',{validators: [Validators.required]})
      }
    );
  }

  addNewFloor(): void {
    const floor: FloorRequest = {
      floorName: this.getFloorName?.value!,
      floorNumber: this.getFloorNumber?.value!,
      buildingId: this.buildingId,
      floorPlan: this.getFloorPlan?.value!
    }
    this.addFloor.emit(floor)
  }

  onFileUpload(event: any){
    this.selectedFile = event.target.files[0];
  }
  OnUploadFile() {
    this.httpClient.post('api/v1/images', this.selectedFile);
  }


}
