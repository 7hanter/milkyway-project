import { Injectable } from '@angular/core';
import { environment } from '@environments';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private mapbox = mapboxgl as typeof mapboxgl;
  private map!: mapboxgl.Map;

  constructor() {
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  public buildMap(mapOptions: mapboxgl.MapboxOptions): void {
    this.map = new mapboxgl.Map(mapOptions);
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  public setMarker(
    lng: number,
    lat: number,
    popup?: mapboxgl.Popup,
    options?: mapboxgl.MarkerOptions
  ): void {
    new mapboxgl.Marker(options || {})
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(this.map);
  }

  public setStyle(layer: string): void {
    this.map.setStyle('mapbox://styles/mapbox/' + layer);
  }

  public flyTo(options: mapboxgl.FlyToOptions): void {
    this.map.flyTo(options);
  }
}
