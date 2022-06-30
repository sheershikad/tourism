import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ActivitiesService } from '../activities.service';
import { Activity } from '../activity/activity';//new

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
   id?:string;
   activities?: Activity;

  constructor(private activatedroute:ActivatedRoute, public activitiesService:ActivitiesService) {
    
   }

  ngOnInit(): void
   {
    this.activatedroute.params.subscribe((params:Params) => {this.id=params?.["id"]});
    this.activitiesService['activities'].subscribe((activities:Activity[]) => {
      if(this.id)
      this.activities = activities.filter((activities: Activity) => activities.id === this.id)?.[0];
    });
  }
}