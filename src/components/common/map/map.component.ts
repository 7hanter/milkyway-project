import { Component, Input, OnInit } from '@angular/core';
import { TripLocation } from '@models/location.model';
import { Trip } from '@models/trip.model';
import { MapService } from '@services/map.service';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'milkyway-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() tripList: Array<Trip>;

  private mapStyle: string = `mapbox://styles/mapbox/dark-v10`;
  private zoom = 9;

  constructor(private mapService: MapService) {
    this.tripList = [];
  }

  ngOnInit() {
    this.setMap();
    this.setMarkers();
  }

  private setMap(): void {
    const mapOptions: mapboxgl.MapboxOptions = {
      container: 'map',
      style: this.mapStyle,
      zoom: this.zoom,
      center: [this.tripList[0].location.lng, this.tripList[0].location.lat],
    };
    this.mapService.buildMap(mapOptions);
  }

  private setMarkers(): void {
    let locationsList: Array<TripLocation>;
    const markerOptions: mapboxgl.MarkerOptions = {
      color: '#00B8DB',
    };
    locationsList = this.tripList.map((trip: Trip) => trip.location) || [];
    locationsList.forEach((tripLocation: TripLocation) =>
      this.mapService.setMarker(
        tripLocation.lng,
        tripLocation.lat,
        markerOptions
      )
    );
  }

  public switchMapStyle(layer: string): void {
    this.mapService.setStyle(layer);
  }
}
