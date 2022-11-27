import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {
  feedbacks: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor() {
  }

  ngOnInit() {
    this.loading = false;

    this.feedbacks = [{}];

  }

}