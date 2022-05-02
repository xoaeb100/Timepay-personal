import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// For Powercharts , Widgets, and Maps
import * as PowerCharts from 'fusioncharts/fusioncharts.vml';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as Maps from 'fusioncharts/fusioncharts.maps';

import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries'; 
 import * as m from 'fusioncharts/fusioncharts.charts'
// Import timeseries
// Pass the fusioncharts library and chart modules
import * as usa from 'fusioncharts/maps/fusioncharts.usa';
 
FusionChartsModule.fcRoot(FusionCharts, Maps, PowerCharts, usa);

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    NgbModule,
    FusionChartsModule
  ]
})
export class DashboardModule { }
