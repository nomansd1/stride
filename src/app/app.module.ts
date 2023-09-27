import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { TextFieldModule } from '@angular/cdk/text-field';


import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './layout/home/home.component';
import { NotificationsComponent } from './layout/notifications/notifications.component';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';
import { LineupTasksComponent } from './components/home/lineup-tasks/lineup-tasks.component';
import { TrendingTasksComponent } from './components/home/trending-tasks/trending-tasks.component';
import { MyWorkComponent } from './components/home/my-work/my-work.component';
import { NotificationHeaderComponent } from './components/notifications/notification-header/notification-header.component';
import { NotificationListComponent } from './components/notifications/notification-list/notification-list.component';
import { NewNotificationsComponent } from './components/notifications/new-notifications/new-notifications.component';
import { EverythingSpaceComponent } from './layout/everything-space/everything-space.component';
import { SpaceHeaderComponent } from './components/spaces/space-header/space-header.component';
import { SpaceSearchComponent } from './components/spaces/space-search/space-search.component';
import { SpaceProjectComponent } from './components/spaces/space-project/space-project.component';
import { TeamspaceComponent } from './layout/teamspace/teamspace.component';
import { Project1Component } from './layout/project1/project1.component';
import { Project2Component } from './layout/project2/project2.component';
import { SpaceProject2Component } from './components/spaces/space-project2/space-project2.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { TaskSelectionHeaderComponent } from './components/layout/task-selection-header/task-selection-header.component';
import { FormsModule } from '@angular/forms';
import { TaskDetailComponent } from './components/spaces/task-detail/task-detail.component';
import { CommentBoxComponent } from './components/spaces/comment-box/comment-box.component';
import { CreateDocComponent } from './components/docs/create-doc/create-doc.component';
import { ScheduleMeetingComponent } from './components/spaces/schedule-meeting/schedule-meeting.component';

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
    LineupTasksComponent,
    TrendingTasksComponent,
    MyWorkComponent,
    NotificationHeaderComponent,
    NotificationListComponent,
    NewNotificationsComponent,
    EverythingSpaceComponent,
    SpaceHeaderComponent,
    SpaceSearchComponent,
    SpaceProjectComponent,
    TeamspaceComponent,
    Project1Component,
    Project2Component,
    SpaceProject2Component,
    ProjectsComponent,
    TaskSelectionHeaderComponent,
    TaskDetailComponent,
    CommentBoxComponent,
    CreateDocComponent,
    ScheduleMeetingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatMenuModule,
    MatTabsModule,
    MatTooltipModule,
    FormsModule,
    MatDialogModule,
    TextFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
