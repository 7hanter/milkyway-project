import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@modules/app-routing.module';
import { AppComponent } from '@components/pages/master-page/app.component';
import { DropdownComponent } from '@components/common/dropdown/dropdown.component';
import { ListComponent } from '@components/common/list/list.component';
import { MapComponent } from '@components/common/map/map.component';
import { TripsPageComponent } from '@components/pages/trips-page/trips-page.component';

import { FilterPipe } from  '@pipes/filter.pipe';
import { OrderByPipe } from  '@pipes/order-by.pipe';

import { DataService } from '@services/data.service';
import { MapService } from '@services/map.service';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    FilterPipe,
    ListComponent,
    MapComponent,
    OrderByPipe,
    TripsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ DataService, MapService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
