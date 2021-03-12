import { Pipe, PipeTransform } from '@angular/core';
import { FilterInfo, Trip } from '@models/trip.model';
import { DataService } from '@services/data.service';

@Pipe({
  name: 'filterBy',
})
export class FilterPipe implements PipeTransform {
  private dataService: DataService = new DataService();

  transform(list: Array<Trip>, filterInfo: FilterInfo): Array<Trip> {
    switch (filterInfo.tag) {
      case 'country':
        return list.filter(
          (trip: Trip) =>
            trip.location.countryId == this.dataService.getCountryIdByName(filterInfo.option)
        );
      case 'city':
        return list.filter((trip: Trip) => trip.location.city == filterInfo.option);
      case 'type':
        return list.filter((trip: Trip) => trip.type ==filterInfo.option);
      default:
        return list;
    }
  }
}
