import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    user: any = {
        name: '',
        cpf: '',
        telefone: '',
        type: '',


    };
    sex_selected: null;
    sexes: any[] = [
        {id: 1, name: 'Másculino', type: 'masc'},
        {id: 2, name: 'Feminino', type: 'fem'}
    ];
    name: string = '';
    cpf: string = '';
    phone1: string = '';
    phone2: string = '';
    type: string = '';

    //Adrress
    address: string = '';
    cep: string = '';
    complement: string = '';
    number: string = '';

    constructor() {
    }

    ngOnInit(): void {
        const aux = localStorage.getItem('user');
        this.user = JSON.parse(aux);

        this.sex_selected = this.sexes[0];

        this.user.type = this.user.type == 'OWNER' ? 'Dono de pet' : 'Veterinário'
    }
}
