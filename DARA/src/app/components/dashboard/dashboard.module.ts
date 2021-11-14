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
import { MenuResponsiveComponent } from './navbar/menu-responsive/menu-responsive.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ServicesLinesComponent,
    DaraProjectsComponent,
    CostumersComponent,
    MainComponent,
    MenuResponsiveComponent,
    CarruselComponent,
    MainfooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
