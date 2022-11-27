import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    user: any = {
        name: ''
    };

    constructor() {
    }

    ngOnInit(): void {
        const aux = localStorage.getItem('user');
        this.user = JSON.parse(aux);
    }

}
