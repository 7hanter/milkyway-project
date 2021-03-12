import { Component, OnInit } from '@angular/core';
import { TripLocation } from '@models/location.model';
import { MOCK_TRIPS, Trip } from '@models/trip.model';
import { MapService } from '@services/map.service';

@Component({
  selector: 'milkyway-trips-page',
  templateUrl: './trips-page.component.html',
  styleUrls: ['./trips-page.component.scss']
})
export class TripsPageComponent implements OnInit {
  public tripList: Array<Trip> = MOCK_TRIPS;
  constructor(private mapService: MapService) { }

  ngOnInit(): void {
  }

  public flyToLocation(location: TripLocation): void {
    const flyOptions: mapboxgl.FlyToOptions = {
      center: [location.lng, location.lat],
      essential: true
    };
    this.mapService.flyTo(flyOptions);
  }
}
