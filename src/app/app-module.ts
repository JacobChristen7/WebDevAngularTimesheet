import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './modules/app-routing-module';
import { App } from './app';
import { DepartmentsComponent } from './components/departments/departments';
import { TimesheetComponent } from './components/timesheet/timesheet';
import { Analytics } from './components/analytics/analytics';
import { TopNavbar } from './components/top-navbar/top-navbar';
import { AnalyticsTable } from './components/analytics-table/analytics-table';
import { MaterialModule } from './modules/material-module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    DepartmentsComponent,
    TimesheetComponent,
    Analytics,
    TopNavbar,
    AnalyticsTable
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
