import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@modules/app-routing.module';
import { AppComponent } from '@components/app/app.component';
import { MapComponent } from '@components/map/map.component';
import { MapService } from '@services/map.service';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ MapService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
