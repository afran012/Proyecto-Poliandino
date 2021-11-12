import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesLinesComponent } from './services-lines/services-lines.component';
import { DaraProjectsComponent } from './dara-projects/dara-projects.component';
import { CostumersComponent } from './costumers/costumers.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ServicesLinesComponent,
    DaraProjectsComponent,
    CostumersComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
