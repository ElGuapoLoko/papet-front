import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {

    optionsTypes: any[] = [
        {name: 'Veterinário', id: 1},
        {name: 'Dono de pet', id: 2},
    ];

    selectedType: any = null;


    constructor() {

        this.selectedType = this.optionsTypes[0]
    }

    ngOnInit(): void {
    }

    register(): void {


    }


}
