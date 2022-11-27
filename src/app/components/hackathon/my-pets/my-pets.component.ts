import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-my-pets',
    templateUrl: './my-pets.component.html',
    styleUrls: ['./my-pets.component.scss']
})
export class MyPetsComponent implements OnInit {

    displayModalPetInformation: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    show(): void {
        this.displayModalPetInformation = true;
    }

}
