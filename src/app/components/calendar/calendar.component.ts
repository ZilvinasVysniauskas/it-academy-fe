import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import * as moment from 'moment';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
    @Input() date: moment.Moment | null = null;
    @Output() onDateChange: EventEmitter<moment.Moment> =
        new EventEmitter<moment.Moment>();

    constructor(private dateAdapter: DateAdapter<Date>) {
        this.dateAdapter.setLocale('en-GB');
    }

    minDate!: moment.Moment;
    today : number = Date.now();

    ngOnInit(): void {
      this.minDate = moment();
    }
}
