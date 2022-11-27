import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

    msgs1: any[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.msgs1 = [
            {severity: 'success', summary: 'Sucesso', detail: 'O veterinario informou que sua consulta foi realizada, agora é só agurardar o resultado dos exames'},
            {severity: 'info', summary: 'Lembrete', detail: 'Seu pet Theo possui uma consulta no dia 30/11/2022 ás 11:30 '},
            {severity: 'warn', summary: 'Lembre-se', detail: 'Lembre-se de dar os remedios do seu pet pós cirurgia nos horários corretos'},
          {severity: 'success', summary: 'Sucesso', detail: 'O veterinario informou que seu pet Theo foi vacinado, agora cumpra o repouso de 7 dias'},
        ];
    }

}
