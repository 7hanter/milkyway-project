import { TripLocation } from "@models/location.model";

export interface Trip {
    location: TripLocation;
    type: string;
    startDate: Date;
    endDate?: Date;
}

export const TRIP_TYPE = {
    holiday: 'HOLIDAY',
    wish: 'WISH',
    living: 'LIVING',
    work: 'WORK',
    business: 'BUSINESS',
    family: 'FAMILY'
}

export const MOCK_TRIPS: Array<Trip> = [
    {
        location: {
            countryId: 'CO',
            city: 'Bogota',
            lat: 4.6126,
            lng: -74.0705
        },
        type: TRIP_TYPE.living,
        startDate: new Date('2006-12-06'),
        endDate: new Date()
    },
    {
        location: {
            countryId: 'CO',
            city: 'Medellin',
            lat: 6.2447,
            lng: -75.5748
        },
        type: TRIP_TYPE.work,
        startDate: new Date('2020-05-01'),
        endDate: new Date()
    },
    {
        location: {
            countryId: 'CO',
            city: 'Cartagena',
            lat: 10.4236,
            lng: -75.5253
        },
        type: TRIP_TYPE.business,
        startDate: new Date('2018-11-22'),
        endDate: new Date('2018-12-02')
    },
    {
        location: {
            countryId: 'CL',
            city: 'Santiago',
            lat: -33.4500,
            lng: -70.6667
        },
        type: TRIP_TYPE.holiday,
        startDate: new Date('2020-12-10'),
        endDate: new Date('2020-12-12')
    },
    {
        location: {
            countryId: 'CL',
            city: 'Villarica',
            lat: -39.2800,
            lng: -72.2300
        },
        type: TRIP_TYPE.holiday,
        startDate: new Date('2020-12-12'),
        endDate: new Date('2020-12-20')
    },
    {
        location: {
            countryId: 'CL',
            city: 'Temuco',
            lat: -38.7399,
            lng: -72.5901
        },
        type: TRIP_TYPE.holiday,
        startDate: new Date('2020-12-20'),
        endDate: new Date('2020-12-24')
    },
    {
        location: {
            countryId: 'BO',
            city: 'La Paz',
            lat: -16.4942,
            lng: -68.1475
        },
        type: TRIP_TYPE.family,
        startDate: new Date('2020-01-09'),
        endDate: new Date('2020-01-15')
    },
];