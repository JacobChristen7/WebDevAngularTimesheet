import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from '../components/departments/departments';
import { TimesheetComponent } from '../components/timesheet/timesheet';
import { Analytics } from '../components/analytics/analytics';

const routes: Routes = [
    { path: '',   redirectTo: 'departments', pathMatch: 'full' },
    { path: 'departments', component: DepartmentsComponent },
    { path: 'timesheet', component: TimesheetComponent },
    { path: 'analytics', component: Analytics }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
