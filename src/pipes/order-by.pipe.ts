import { Pipe, PipeTransform } from '@angular/core';
import { OrderByInfo, Trip } from '@models/trip.model';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(list: Array<Trip>, orderBy: OrderByInfo): Array<Trip> {
    switch (orderBy.option) {
      case 'Country':
        const countryList = list.sort((a, b) =>
          a.location.countryId > b.location.countryId ? 1 : -1
        );
        return orderBy.asc ? countryList : countryList.reverse();
      case 'City':
        const cityList = list.sort((a, b) =>
          a.location.city > b.location.city ? 1 : -1
        );
        return orderBy.asc ? cityList : cityList.reverse();
      case 'Type':
        const typeList = list.sort((a, b) => (a.type > b.type ? 1 : -1));
        return orderBy.asc ? typeList : typeList.reverse();
      case 'Date':
        const dateList = list.sort((a, b) =>
          a.startDate > b.startDate ? 1 : -1
        );
        return orderBy.asc ? dateList : dateList.reverse();
      default:
        return list;
    }
  }
}
