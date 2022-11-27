import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RegisterService} from "./services/register.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [MessageService]
})
export class RegisterComponent implements OnInit {

    optionsTypes: any[] = [
        {id: 1, name: 'Veterinário', value: 'MEDIC'},
        {id: 2, name: 'Dono de pet', value: 'OWNER'},
    ];
    name: string = '';
    cpf: string = '';
    telefone: string = '';
    email: string = '';
    password: string = '';
    selectedType: any = null;

    constructor(private registerService: RegisterService, private router: Router, private messageService: MessageService) {
        this.selectedType = this.optionsTypes[0]
    }

    ngOnInit(): void {
    }

    register(): void {
        const payload = {
            name: this.name,
            cpf: this.cpf,
            telefone: this.telefone,
            email: this.email,
            password: this.password,
            selectedType: this.selectedType.value
        };

        this.registerService.register(payload).subscribe((response) => {
            if (response.status == 'success') {
                this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário criado'});
                this.router.navigate(['/login']);
            }
            if (response.status == 'error') {
                this.messageService.add({severity: 'error', summary: 'Erro', detail: response.message});
            }
        });

    }
}
