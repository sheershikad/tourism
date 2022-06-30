import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivitiesService } from '../activities.service';
import { Activity } from '../activity/activity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activities?:Activity[]=[];

  constructor(private activityService:ActivitiesService,private router:Router){

  }

  ngOnInit(): void {
    this.activityService['activities'].subscribe((activities:Activity[]) => {
      this.activities=activities;
    } );
  }

  showActivityDetails(activity:Activity): void{
    this.router.navigate(["/details",activity.id]);
  


  }

}
