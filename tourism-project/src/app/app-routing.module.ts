import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActivitiesComponent } from './add-activities/add-activities.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:AddActivitiesComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'details/:id',
    component:DetailsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
