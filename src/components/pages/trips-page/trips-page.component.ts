import { Component, OnInit } from '@angular/core';
import { TripLocation } from '@models/location.model';
import { MOCK_TRIPS, Trip } from '@models/trip.model';

@Component({
  selector: 'milkyway-trips-page',
  templateUrl: './trips-page.component.html',
  styleUrls: ['./trips-page.component.scss']
})
export class TripsPageComponent implements OnInit {
  public tripList: Array<Trip> = MOCK_TRIPS;
  constructor() { }

  ngOnInit(): void {
  }

  public setClickedTrip(trip: TripLocation): void {
    console.log(trip);
  }
}
