import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { SelectDestinationComponent } from './select-destination/select-destination.component';
import { DestinationInfoComponent } from './destination-info/destination-info.component';
import { ListComponent } from './list/list.component';
import { ListService } from './list.service';


@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponent,
    SelectDestinationComponent,
    DestinationInfoComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,


  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
