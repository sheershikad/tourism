import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Activity } from './activity/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService 
{

  activities:BehaviorSubject<Activity[]>;
  activities$:Observable<Activity[]>;
  constructor() 
  {
  this.activities =new BehaviorSubject<Activity[]>([]);
  this.activities$=this.activities.asObservable();
  }
  public addActivity(activities: Activity[]):void
  {
    this.activities.next(activities);
  }
 
}
