import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
    @Input() date: Date | null = null;
    @Output() onDateChange: EventEmitter<Date | null> =
        new EventEmitter<Date | null>();

    constructor(private dateAdapter: DateAdapter<Date>) {
        this.dateAdapter.setLocale('en-GB');
    }

    today : number = Date.now();

    ngOnInit(): void {}
}