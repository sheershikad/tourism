import { Component, Input, OnInit } from '@angular/core';
import { Activity } from './activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  
  @Input() activity?:Activity;

  constructor() { }

  ngOnInit(): void {
  }

}
