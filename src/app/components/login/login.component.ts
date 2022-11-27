import {Component, OnInit, OnDestroy} from '@angular/core';
import {ConfigService} from '../../service/app.config.service';
import {AppConfig} from '../../api/appconfig';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";
import {LoginService} from "./services/login.service";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [MessageService]
})
export class LoginComponent implements OnInit, OnDestroy {

    valCheck: string[] = ['remember'];
    password: string;
    email: string;
    config: AppConfig;
    subscription: Subscription;

    constructor(public configService: ConfigService,
                private loginService: LoginService,
                private messageService: MessageService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    login(): void {
            const payload = {
                email: this.email,
                password: this.password,
            };

            this.loginService.login(payload).subscribe((response) => {
                if (response.status == 'success') {
                    localStorage.setItem('user', response.data);
                    this.router.navigate(['/dashboard']);
                }
                if (response.status == 'error') {
                    this.messageService.add({severity:'error', summary: 'Error', detail: 'Login ou senha incorretos'});
                }
            });
    }

}
