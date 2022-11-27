import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
    histories: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    constructor() {
    }

    ngOnInit() {
        this.loading = false;

        this.histories = [{}];

    }

}
