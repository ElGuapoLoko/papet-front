import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-list-professionals',
    templateUrl: './list-professionals.component.html',
    styleUrls: ['./list-professionals.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListProfessionalsComponent implements OnInit {

    loading: boolean = false;
    valueSelected: any[] = [10, 5000];
    searchText: string = 'Veterinário'
    location: string = 'Goiânia'
    dateStart: number = 21;
    dateEnd: number = 10;

    constructor() {
    }

    ngOnInit(): void {
    }

    search(): void {
        this.loading = true;

        console.log(this.valueSelected)
    }

}
