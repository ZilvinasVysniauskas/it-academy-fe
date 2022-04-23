import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Notification} from "../../../interfaces/notification";

@Component({
  selector: 'app-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.scss']
})
export class NotificationMessageComponent {

  @Input() notification!: Notification;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }
}
