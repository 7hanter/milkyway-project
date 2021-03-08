import { Component, OnInit } from '@angular/core';
import { MapService } from '@services/map.service';

@Component({
  selector: 'milkyway-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private map: MapService) { }

  ngOnInit() {
    this.map.buildMap();
  }

}