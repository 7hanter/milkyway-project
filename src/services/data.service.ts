import { Injectable } from '@angular/core';
import { Country, MOCK_COUNTRIES } from '@models/location.model';
import { TRIP_TYPE } from '@models/trip.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: Array<Country> = MOCK_COUNTRIES;

  constructor() {}

  public countryList(): Array<string> {
    return this.data.map((country: Country) => country.name);
  }

  public cityList(): Array<string> {
    let allCities: Array<string> = [];
    this.data.forEach(({ cities }) => allCities.push(...cities));
    return allCities;
  }

  public getCountryFlag(countryId: string): string {
    return (
      this.data.find((country: Country) => country.id == countryId)?.flag || ''
    );
  }

  public getCountryName(countryId: string): string {
    return (
      this.data.find((country: Country) => country.id == countryId)?.name || ''
    );
  }

  public getCountryIdByName(countryName: string): string {
    return (
      this.data.find((country: Country) => country.name == countryName)?.id || ''
    );
  }
}
