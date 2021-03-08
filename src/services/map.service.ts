import { Injectable } from '@angular/core';
import { environment } from '@environments';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private mapbox = (mapboxgl as typeof mapboxgl);
  private map: mapboxgl.Map | undefined;
  private style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  private lat = 43.1746;
  private lng = -2.4125;
  private zoom = 15;
  
  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapBoxToken;
  }
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    }
}