import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-consults',
  templateUrl: './next-consults.component.html',
  styleUrls: ['./next-consults.component.scss']
})
export class NextConsultsComponent implements OnInit {
  consults: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor() {
  }

  ngOnInit() {
    this.loading = false;

    this.consults = [{}];

  }

}