import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DaraProjectsComponent } from './dara-projects/dara-projects.component';
import { ServicesLinesComponent } from './services-lines/services-lines.component';
import { CostumersComponent } from './costumers/costumers.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    { path: '', component: MainComponent },
    { path: 'projects', component: DaraProjectsComponent },
    { path: 'serviceslines', component: ServicesLinesComponent },
    { path: 'clients', component: CostumersComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
