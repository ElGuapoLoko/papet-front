import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: any = {
    name: '',
    cpf: '',
    telefone: '',
    type: 'OWNER'
  };

  constructor() {
  }

  ngOnInit(): void {
    const aux = localStorage.getItem('user');
    this.user = JSON.parse(aux);
  }
}