import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    user: any = null;
    sex_selected: null;
    sexes: any[] = [
        {id: 1, name: 'Másculino', type: 'masc'},
        {id: 2, name: 'Feminino', type: 'fem'}
    ];

    constructor() {
    }

    ngOnInit(): void {
        const aux = localStorage.getItem('user');
        this.user = JSON.parse(aux);
    }
}
