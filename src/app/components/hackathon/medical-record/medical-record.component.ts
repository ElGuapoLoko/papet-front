import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit {
  records: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor() {
  }

  ngOnInit() {
    this.loading = false;

    this.records = [{}];

  }

}