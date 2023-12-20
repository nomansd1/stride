import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { HomeComponent } from './layout/home/home.component';
import { NotificationsComponent } from './layout/notifications/notifications.component';
import { EverythingSpaceComponent } from './layout/everything-space/everything-space.component';
import { TeamspaceComponent } from './layout/teamspace/teamspace.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { Project1Component } from './layout/project1/project1.component';
import { Project2Component } from './layout/project2/project2.component';
import { DocsListingComponent } from './layout/docs-listing/docs-listing.component';
import { SapQaModuleComponent } from './layout/sap-qa-module/sap-qa-module.component';
import { ItTicketsComponent } from './layout/it-tickets/it-tickets.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'app', component: LayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'everything', component: EverythingSpaceComponent },
      { path: 'SAPQAModule', component: SapQaModuleComponent },
      { path: 'IT-Tickets', component: ItTicketsComponent },
      { path: 'teamspace', component: TeamspaceComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'project1', component: Project1Component },
      { path: 'project2', component: Project2Component },
      { path: 'docs', component: DocsListingComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
