import {Component, OnDestroy, ViewChild} from '@angular/core';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {MenuItem} from 'primeng/api';
import {OverlayPanel} from "primeng/overlaypanel";
import {NavigationStart, Router} from "@angular/router";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items: MenuItem[];
    actualRouteString: string = 'dashboard';
    showButtonsLogin: boolean = true;
    noShowLoginButtons: string[] = ['/dashboard', '/history', '/account', '/next-consults', '/feedbacks' , '/pets' , '/alerts'];
    @ViewChild('op') overlayPanel: OverlayPanel;

    constructor(public appMain: AdminLayoutComponent, private router: Router) {
        this.resolveLoginButtons();
    }

    logout(): void {
        localStorage.clear();
        this.router.navigate(['/start'])
    }

    resolveLoginButtons(): void {
        this.actualRouteString = this.router.url.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s/g, '_')
            .toLowerCase();

        if (this.noShowLoginButtons.includes(this.actualRouteString)) {
            this.showButtonsLogin = false;
        } else {
            this.showButtonsLogin = true;
        }

        this.router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                this.actualRouteString = event.url.normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .replace(/\s/g, '_')
                    .toLowerCase();

                if (this.noShowLoginButtons.includes(this.actualRouteString)) {
                    this.showButtonsLogin = false;
                } else {
                    this.showButtonsLogin = true;
                }
            }
        });
    }


}
