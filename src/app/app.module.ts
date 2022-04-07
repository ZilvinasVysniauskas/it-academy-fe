import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HerokuTestComponent } from './heroku-test/heroku-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContentComponent } from './components/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    HerokuTestComponent,
    LoginComponent,
    CalendarComponent,
    HeaderComponent,
    HomeComponent,
    ReservationsComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
