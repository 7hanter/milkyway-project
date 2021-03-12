import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TripLocation } from '@models/location.model';
import { FilterInfo, OrderByInfo, Trip, TRIP_TYPE } from '@models/trip.model';
import { DataService } from '@services/data.service';
import { DropdownConfig, ORDER_BY } from 'models/dropdown.model';

@Component({
  selector: 'milkyway-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() public tripList: Array<Trip>;
  @Output() tripClickEvent = new EventEmitter<TripLocation>();

  public orderByDropdown: DropdownConfig;
  public countryDropdown: DropdownConfig;
  public cityDropdown: DropdownConfig;
  public typeDropdown: DropdownConfig;
  public filterInfo: FilterInfo;
  public ascendentOrder: boolean;
  public orderFilter: OrderByInfo;

  constructor(private dataService: DataService) {
    const defaultDropdown = {
      title: 'filter',
      options: [],
    };
    this.filterInfo = {
      tag: '',
      option: ''
    };
    this.ascendentOrder = true;
    this.orderFilter = {
      asc: this.ascendentOrder,
      option: ''
    }
    this.tripList = [];
    this.orderByDropdown = ORDER_BY;
    this.countryDropdown = defaultDropdown;
    this.cityDropdown = defaultDropdown;
    this.typeDropdown = defaultDropdown;
  }

  ngOnInit(): void {
    this.setDropdownItems();
  }

  private setDropdownItems(): void {
    this.countryDropdown = {
      title: 'Country',
      options: this.dataService.countryList(),
    };
    this.cityDropdown = {
      title: 'City',
      options: this.dataService.cityList(),
    };
    this.typeDropdown = {
      title: 'Type',
      options: Object.values(TRIP_TYPE),
    };
  }

  public onTripClick(location: TripLocation): void {
    this.tripClickEvent.emit(location);
  }

  public getFlag(countryId: string): string {
    return this.dataService.getCountryFlag(countryId);
  }

  public getCountryName(countryId: string): string {
    return this.dataService.getCountryName(countryId);
  }

  public setFilterTag(option: string, tag: string): void {
    this.filterInfo = {
      tag: tag,
      option: option
    }
  }

  public setOrderBy(option: string, asc: boolean): void {
    this.orderFilter = {
      option: option,
      asc: asc,
    }
  }
}
