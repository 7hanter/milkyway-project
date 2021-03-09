import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { TripLocation } from '@models/location.model';
import { Trip } from '@models/trip.model';
import { DropdownConfig, FILTER_BY, ORDER_BY } from 'models/dropdown.model';

@Component({
  selector: 'milkyway-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public tripList: Array<Trip>;
  @Output() tripClickEvent = new EventEmitter<TripLocation>();

  public orderByDropdown: DropdownConfig = ORDER_BY;
  public filterByDropdown: DropdownConfig = FILTER_BY;

  constructor() {
    this.tripList = [];
  }

  ngOnInit(): void {
  }

  public onTripClick(location: TripLocation): void {
    this.tripClickEvent.emit(location);
  }
}
