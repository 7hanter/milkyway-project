import { TripLocation } from "@models/location.model";

export interface Trip {
    location: TripLocation;
    type: string;
    startDate: Date;
    endDate?: Date;
}
export interface FilterInfo {
    tag: string;
    option: string;
}

export interface OrderByInfo {
    asc: boolean;
    option: string;
}

export const TRIP_TYPE = {
    holiday: 'HOLIDAY',
    dream: 'DREAM',
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
            city: 'Villarrica',
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
    {
        location: {
            countryId: 'BO',
            city: 'Santa Cruz',
            lat: -16.4942,
            lng: -68.1475
        },
        type: TRIP_TYPE.family,
        startDate: new Date('2020-01-15'),
        endDate: new Date('2020-01-22')
    },
    {
        location: {
            countryId: 'CO',
            city: 'Medellin',
            lat: 6.2447,
            lng: -75.5748
        },
        type: TRIP_TYPE.living,
        startDate: new Date('1995-03-17'),
        endDate: new Date('2006-12-06')
    },
    {
        location: {
            countryId: 'CL',
            city: 'Pucon',
            lat: -39.28223,
            lng: -71.95427
        },
        type: TRIP_TYPE.holiday,
        startDate: new Date('2020-12-24'),
        endDate: new Date('2020-12-31')
    },
    {
        location: {
            countryId: 'CO',
            city: 'Bogota',
            lat: 4.6126,
            lng: -74.0705
        },
        type: TRIP_TYPE.family,
        startDate: new Date('2013-04-05'),
    },
    {
        location: {
            countryId: 'CL',
            city: 'Pucon',
            lat: -39.28223,
            lng: -71.95427
        },
        type: TRIP_TYPE.dream,
        startDate: new Date('2022-01-01'),
    },
    {
        location: {
            countryId: 'MX',
            city: 'Cancun',
            lat: 21.17429,
            lng: -86.84656
        },
        type: TRIP_TYPE.family,
        startDate: new Date('2020-10-01'),
        endDate: new Date('2020-10-15')
    },
    {
        location: {
            countryId: 'MX',
            city: 'Playa del Carmen',
            lat: 20.6274,
            lng: -87.07987
        },
        type: TRIP_TYPE.holiday,
        startDate: new Date('2020-10-15'),
        endDate: new Date('2020-10-17')
    },
    {
        location: {
            countryId: 'ES',
            city: 'Madrid',
            lat: 40.416775,
            lng: -3.703790
        },
        type: TRIP_TYPE.business,
        startDate: new Date('2014-10-15'),
        endDate: new Date('2014-10-20')
    },
    {
        location: {
            countryId: 'DE',
            city: 'Frankfurt',
            lat: 50.110924,
            lng: 8.682127
        },
        type: TRIP_TYPE.business,
        startDate: new Date('2014-10-09')
    },
    {
        location: {
            countryId: 'DE',
            city: 'Berlin',
            lat: 52.520008,
            lng: 13.404954
        },
        type: TRIP_TYPE.dream,
        startDate: new Date('2021-07-09'),
    },
    {
        location: {
            countryId: 'DE',
            city: 'Hamburg',
            lat: 53.551086,
            lng: 9.993682
        },
        type: TRIP_TYPE.dream,
        startDate: new Date('2021-07-20'),
    },
    {
        location: {
            countryId: 'US',
            city: 'Boston',
            lat: 42.361145,
            lng: -71.057083
        },
        type: TRIP_TYPE.family,
        startDate: new Date('2019-06-06'),
        endDate: new Date('2019-06-20')
    },
    {
        location: {
            countryId: 'US',
            city: 'New Hampshire',
            lat: 44.000000,
            lng: -71.500000
        },
        type: TRIP_TYPE.family,
        startDate: new Date('2019-05-30'),
        endDate: new Date('2019-06-06')
    },
    {
        location: {
            countryId: 'US',
            city: 'New York',
            lat: 40.730610,
            lng: -73.935242
        },
        type: TRIP_TYPE.business,
        startDate: new Date('2008-03-17'),
        endDate: new Date('2008-04-02')
    },
    {
        location: {
            countryId: 'US',
            city: 'San Francisco',
            lat: 37.773972,
            lng: -122.431297
        },
        type: TRIP_TYPE.holiday,
        startDate: new Date('2018-12-10'),
        endDate: new Date('2019-01-05')
    },
    {
        location: {
            countryId: 'JP',
            city: 'Tokyo',
            lat: 35.652832,
            lng: 139.839478
        },
        type: TRIP_TYPE.dream,
        startDate: new Date('2021-03-17'),
    },
    {
        location: {
            countryId: 'IT',
            city: 'Rome',
            lat: 41.902782,
            lng: 12.496366
        },
        type: TRIP_TYPE.holiday,
        startDate: new Date('2014-10-15'),
        endDate: new Date('2014-10-19')
    },
    {
        location: {
            countryId: 'FR',
            city: 'Lourdes',
            lat: 43.1,
            lng: -0.05
        },
        type: TRIP_TYPE.holiday,
        startDate: new Date('2014-10-14'),
    }
];