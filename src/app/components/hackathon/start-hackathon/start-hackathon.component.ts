import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import SwiperCore, {Pagination} from "swiper";
import {Router} from "@angular/router";

SwiperCore.use([Pagination]);

@Component({
    selector: 'app-start-hackathon',
    templateUrl: './start-hackathon.component.html',
    styleUrls: ['./start-hackathon.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class StartHackathonComponent implements OnInit {

    loading: boolean = false;

    constructor(public router: Router) {
    }


    ngOnInit(): void {

    }

    searchProfessionals(): void {
        this.loading = true;
        this.router.navigate(['/list-professionals']);
    }
}
