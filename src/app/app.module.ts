import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './layout/home/home.component';
import { NotificationsComponent } from './layout/notifications/notifications.component';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    CalendarComponent,
    LayoutComponent,
    HomeComponent,
    NotificationsComponent,
    HomeHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
