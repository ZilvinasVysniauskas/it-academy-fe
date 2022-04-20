import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-click-to-edit',
  templateUrl: './click-to-edit.component.html',
  styleUrls: ['./click-to-edit.component.scss']
})
export class ClickToEditComponent implements OnInit {

  @Input() value!: string;
  @Output() cancelEvents: EventEmitter<any> = new EventEmitter<any>();
  @Output() valueChangeEvents: EventEmitter<string> = new EventEmitter<string>();

  public pendingValue: string = "";

  constructor() {}

  public cancel() : void {
    this.cancelEvents.emit();
  }

  public ngOnInit() : void {
    this.pendingValue = this.value;
  }

  public processChanges() : void {
    if ( this.pendingValue === this.value ) {
      this.cancelEvents.emit();
    } else {
      this.valueChangeEvents.emit( this.pendingValue );
    }
  }
}
