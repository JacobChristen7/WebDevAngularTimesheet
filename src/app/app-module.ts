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
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

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
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
