import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-click-to-edit',
  templateUrl: './click-to-edit.component.html',
  styleUrls: ['./click-to-edit.component.scss']
})
export class ClickToEditComponent implements OnInit {

  @Input() value!: string;
  @Output() cancelEvents: EventEmitter<any> = new EventEmitter<any>();
  @Output() valueChangeEvents: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('EditTextElement') menu!: ElementRef;

  public pendingValue: string = "";


  constructor(private renderer: Renderer2) {
    let i = 0;
    this.renderer.listen('window', 'click', (e:Event) => {
      if (e.target !== this.menu.nativeElement) {
        if (i > 0) {
          this.cancel()
        }
        i++;
      }
    })
  }

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
