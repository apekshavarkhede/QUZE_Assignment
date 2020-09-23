import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesNameComponent } from './components/courses-name/courses-name.component';
import { ShowCourseDetailsComponent } from './components/show-course-details/show-course-details.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: CoursesNameComponent },
    ]
  },

  { path: 'details', component: ShowCourseDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
