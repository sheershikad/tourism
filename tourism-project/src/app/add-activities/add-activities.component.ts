import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivitiesService } from '../activities.service';


@Component({
  selector: 'app-add-activities',
  templateUrl: './add-activities.component.html',
  styleUrls: ['./add-activities.component.scss']
})
export class AddActivitiesComponent implements OnInit {
  addActivityFormGroup!: FormGroup;


  constructor(private fb: FormBuilder,private activityService:ActivitiesService) { }

  ngOnInit(): void {
    this.addActivityFormGroup=this.fb.group({
      activities:this.fb.array([]),
    });
  }
  get activities(): FormArray{
    return (this.addActivityFormGroup.get('activities')) as FormArray;
  }
  addActivity(): void{

    this.activities.push(new FormGroup({

      id: new FormControl(null,[Validators.required]),
      imageSource:new FormControl(null,[Validators.required]),
      title:new FormControl(null,[Validators.required]),
      description:new FormControl(null,[Validators.required]),
      price:new FormControl(null,[Validators.required]),
      reviewCount:new FormControl(null,[Validators.required]),
      address:new FormControl(null,[Validators.required]),
      activitytype:new FormControl(null,[Validators.required]),


    }));
  }

  saveActivities():void{
      if(this.addActivityFormGroup?.value){
        this.activityService.addActivity(this.addActivityFormGroup?.value.activities);
      }
    // console.log("form group",this.addActivityFormGroup.value);
  }


}
